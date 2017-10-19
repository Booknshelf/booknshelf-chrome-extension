function OnClickMenuItem(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
}

function OnClickActionButton(tab) {
  console.log("Action button was clicked");
  console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
}

// Set listeners
chrome.contextMenus.create({
  "title": "Text page menu item",
  "contexts":["page"],
  "onclick": OnClickMenuItem});
chrome.contextMenus.create({
  "title": "Text selection menu item",
  "contexts":["selection"],
  "onclick": OnClickMenuItem});
chrome.browserAction.onClicked.addListener(OnClickActionButton)

// TODO: Open a iframe depending on the page size like Google Keep
// TODO: Show some UI based on iframe size like Google Keep
// TODO: Expose some api in booknshelf, use some structured way of exposing apis
// TODO: Use the search api to find out the book if title is provided, show results in clickable
//       radio buttons. On clicking radio button it should show list check boxes.
// TODO: Or if the page has an isbn or recorgined url then change the booknshelf icon to show
//       so and clickin on it should show the option of adding the book to your lists.
// TODO: 3 sets of icons (disabled, normal grey, enabled) for two sizes 19px and 38px.
//       use a base vector image and use a write a script that generates the icons.
// TODO: Icon state should changed between disabled, normal, enabled.
// TODO: on an empty page or error pages the icon should be disabled
// TODO: Enable js minification in webpack.config.js
// TODO: Add back options page for which list to choose by default and
//       choose the first search result by default