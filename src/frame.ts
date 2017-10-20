import {Trigger} from './constants';

console.log("Frame js loaded");
focus();
let listener = function() {
  console.log("clicked outside");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {trigger: Trigger.hide_iframe});
  });
}
window.addEventListener('blur', listener);