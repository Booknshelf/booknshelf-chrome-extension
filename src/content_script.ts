function injectFrame() {
  // Avoid recursive frame insertion
  var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  // if (!tab.url.includes(extensionOrigin)) {
  if (!location.origin.includes(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('frame.html');
    iframe.frameBorder="0";
    iframe.id="booknshelf-popup-frame";
    iframe.style.cssText = "height: 224px; width: 370px; " +
                            "margin: 0px; padding: 0px; " + 
                            "position: fixed; right: 5px; top: 5px; " +
                            "z-index: 2147483647; " +
                            "display: block !important;";
    document.body.appendChild(iframe);
  }
}

chrome.runtime.onMessage.addListener( function(request, sender) {
  console.log("Contentscript received : '" + request.trigger + "'");
  if(request.trigger == "selection_menu") {
    console.log(request.selection)
  }
  injectFrame();
});
