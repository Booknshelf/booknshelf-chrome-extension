import {Trigger} from './constants';

const iframeId = "booknshelf-popup-frame-" + randomId();
const iframeConstStyle = "height: 224px; width: 370px; " +
                         "margin: 0px; padding: 0px; " +
                         "position: fixed; right: 5px; top: 5px; " +
                         "z-index: 2147483647; ";
const iframeStyleVisible = "display: block !important;";
const iframeStyleGone = "display: none;";

function randomId() {
  return Math.random().toString(36).substr(2, 10);
}

function injectFrame() {
  // Avoid recursive frame insertion
  let extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  if (!location.origin.includes(extensionOrigin)) {
    let iframe = <HTMLIFrameElement> document.getElementById(iframeId);
    if (iframe != null) {
      // change display to show
      iframe.style.cssText = iframeConstStyle + iframeStyleVisible;
    }
    else {
      iframe = document.createElement('iframe');
      iframe.src = chrome.runtime.getURL('frame.html');
      iframe.frameBorder="0";
      iframe.id=iframeId;
      iframe.style.cssText = iframeConstStyle + iframeStyleVisible;
      document.body.appendChild(iframe);
    }
  }
}

chrome.runtime.onMessage.addListener( function(request, sender) {
  console.log("Contentscript received : '" + Trigger[request.trigger] + "'");
  if(request.trigger == Trigger.selection_menu) {
    console.log(request.selection)
  }
  injectFrame();
});
