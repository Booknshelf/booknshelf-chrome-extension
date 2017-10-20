import {Trigger} from './constants';

console.log("Frame js loaded");
focus();
let iframeGrimReaper = function() {
  console.log("clicked outside");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {trigger: Trigger.click_outside});
  });
}
window.addEventListener('blur', iframeGrimReaper);

/*
class="animated bounceInDown"
*/
