import { Trigger } from './constants';
import * as m from 'mithril';
import { loadingScreen, selectBookScreen, selectListScreen } from './ui';
import { loadingScreenText, setLoadingScreenText } from './ui';
// Listen for clicks outside
focus();
let iframeGrimReaper = function () {
  console.log("clicked outside");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { trigger: Trigger.click_outside });
  });
}
window.addEventListener('blur', iframeGrimReaper);

let count = 0;
let Hello = {
  view: function () {
    return m("main", [
      m("h1", { class: "title" }, "My first app"),
      // changed the next line
      m("button", { onclick: function () { count++ } }, count + " clicks"),
    ])
  }
}

// Define routes (eg. frame.html#!/loading) to open from content_script
m.route(document.body, "/loading", {
  "/loading": loadingScreen,
  "/selectBook": selectBookScreen,
  "/selectList": selectListScreen
})
console.log("Frame js loaded");
/*
class="animated bounceInDown"
*/
setLoadingScreenText("boga boga boga");