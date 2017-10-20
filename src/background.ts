import {Trigger} from './constants';

// Set listeners
chrome.contextMenus.create({
  "title": "Save to Booknshelf",
  "contexts":["page"],
  "onclick": function(tab, info) {
    console.log("Page context menu item clicked");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {trigger: Trigger.page_menu});
    });
  }
});
chrome.contextMenus.create({
  "title": "Find and save to Booknshelf",
  "contexts":["selection"],
  "onclick": function(tab, info) {
    console.log("Selection context menu item clicked");
    // console.log("info: " + JSON.stringify(info));
    // console.log("tab: " + JSON.stringify(tab));
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {trigger: Trigger.selection_menu, selection: tab.selectionText});
    });
  }
});
chrome.browserAction.onClicked.addListener( function(tab) {
  console.log("Browser action clicked");
  // console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {trigger: Trigger.browser_action});
  });
});
