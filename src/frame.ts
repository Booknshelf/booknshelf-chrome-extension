import { Trigger } from './constants';
import * as m from 'mithril';
import { loadingScreen, setLoadingScreenText } from './ui';
import { selectBookScreen, setBooks, setQueryString } from './ui';
import { selectListScreen, setSelectedBook, setBookshelfs } from './ui';

// Listen for clicks outside
focus();
let iframeGrimReaper = function () {
  console.log("clicked outside");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { trigger: Trigger.click_outside });
  });
}
window.addEventListener('blur', iframeGrimReaper);
// Get Query String set by content_script
let queryString = document.URL.substring(document.URL.indexOf('?')+1);
m.mount(document.body, loadingScreen);
console.log("Frame ts loaded with query string: " + decodeURIComponent(queryString));
