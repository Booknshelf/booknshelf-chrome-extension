import { Trigger } from './constants';

const iframeId = "booknshelf-popup-frame";
const iframeConstStyle = "height: 500px; width: 500px; " +
  "margin: 0px; padding: 0px; " +
  "position: fixed; right: 5px; top: 5px; " +
  "z-index: 2147483647; display: block !important;";
const GooglePlayBooks = "https://play.google.com/store/books/details/";
const Goodreads = "https://www.goodreads.com/book/show/";

function isFrameAdded() {
  return document.getElementById(iframeId) != null;
}

function removeFrame() {
  let iframe = <HTMLIFrameElement>document.getElementById(iframeId);
  if (iframe != null) iframe.parentNode.removeChild(iframe);
}

function addFrame(queryString: string) {
  // Avoid recursive frame insertion
  let extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  if (!location.origin.includes(extensionOrigin)) {
    let iframe = <HTMLIFrameElement>document.getElementById(iframeId);
    if (iframe != null) iframe.parentNode.removeChild(iframe);
    iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('frame.html') + "?" + queryString;
    iframe.frameBorder = "0";
    iframe.id = iframeId;
    iframe.style.cssText = iframeConstStyle;
    document.body.appendChild(iframe);
  }
}

function findBookDetails() {
  let url = document.URL;
  // check known url formats
  if (url.startsWith(GooglePlayBooks))
    return document.getElementsByClassName("document-title")[0].textContent;
  if (url.startsWith(Goodreads))
    return document.getElementById("bookTitle").textContent;
  // no book found
  return null;
}

chrome.runtime.onMessage.addListener(function (request, sender) {
  console.log("Contentscript received : '" + Trigger[request.trigger] + "'");
  switch (request.trigger) {
    case Trigger.click_outside: {
      removeFrame();
      break;
    }
    case Trigger.selection_menu: {
      // Searching for book using selected text
      addFrame(request.selection);
      break;
    }
    case Trigger.browser_action: {
      if (isFrameAdded())
        removeFrame();
      else {
        // Searching for Book Details
        let bookDetails = findBookDetails();
        addFrame(bookDetails);
      }
      break;
    }
    case Trigger.page_menu: {
      // Searching for Book Details
      let bookDetails = findBookDetails();
      addFrame(bookDetails);
      break;
    }
  }
});
