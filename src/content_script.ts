import {Trigger, IFRAME} from './constants';

function hideFrame() {
  let iframe = <HTMLIFrameElement> document.getElementById(IFRAME.id);
  if (iframe != null) {
    iframe.style.cssText = IFRAME.constStyle + IFRAME.styleGone;
    iframe.parentNode.removeChild(iframe);
  }
}

function injectFrame() {
  // Avoid recursive frame insertion
  let extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  if (!location.origin.includes(extensionOrigin)) {
    let iframe = <HTMLIFrameElement> document.getElementById(IFRAME.id);
    if (iframe != null) {
      // change display to show
      iframe.style.cssText = IFRAME.constStyle + IFRAME.styleVisible;
    }
    else {
      iframe = document.createElement('iframe');
      iframe.src = chrome.runtime.getURL('frame.html');
      iframe.frameBorder="0";
      iframe.id=IFRAME.id;
      iframe.style.cssText = IFRAME.constStyle + IFRAME.styleVisible;
      document.body.appendChild(iframe);
    }
    iframe.contentWindow.focus();
  }
}

chrome.runtime.onMessage.addListener( function(request, sender) {
  console.log("Contentscript received : '" + Trigger[request.trigger] + "'");
  switch(request.trigger) {
    case Trigger.selection_menu : {
      console.log(request.selection)
      injectFrame();
      break;
    }
    case Trigger.hide_iframe: {
      hideFrame();
      break;
    }
    case Trigger.browser_action:
    case Trigger.page_menu: {
      injectFrame();
      break;
    }
  }
});
