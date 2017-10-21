import { Trigger } from './constants';
import * as m from 'mithril';
import { loadingScreen, setLoadingScreenText } from './ui';
import { selectBookScreen, setBooks, setQueryString, setOnClickBook } from './ui';
import { selectListScreen, setSelectedBook, setBookshelfs, setOnClickSave } from './ui';

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
let queryString = decodeURIComponent(document.URL.substring(document.URL.indexOf('?') + 1));

// Sample data, will be fetched from server
let sampleBooks = [
  ["https://images-na.ssl-images-amazon.com/images/I/51iDDR5cQ8L.jpg",
    "The Witch-Hunt; or, The Triumph of Morality",
    "F.G. Bailey"],
  ["https://images-na.ssl-images-amazon.com/images/I/51sEAEJoVIL.jpg",
    "Dark Resurrection (A Colony Novel)",
    "F.G. Cottam"],
  ["https://images-na.ssl-images-amazon.com/images/I/41D8TD5kH0L.jpg",
    "Original Instruction Manual for Nikon FG",
    "NikonCorp"],
  ["https://images-na.ssl-images-amazon.com/images/I/51tRM5d4uGL.jpg",
    "Aldin's Wish (Enchanted Immortals Book 1)",
    "F.G. Adams"],
]
let sampleBookshelfs = ["Completed", "CurrentlyReading", "Books I Have Read", "Books I Want to Read"];

// Start navigation flow
setLoadingScreenText("Searching for book...");
m.mount(document.body, loadingScreen);
setTimeout(function () {
  setQueryString(queryString);
  setBooks(sampleBooks);
  m.mount(document.body, selectBookScreen);
  setOnClickBook(function (book: string[]) {
    console.log("Book clicked : " + book[1]);
    setSelectedBook(book);
    setBookshelfs(sampleBookshelfs);
    m.mount(document.body, selectListScreen);
    setOnClickSave(function (bookshelf) {
      console.log("Book " + book[1] + " saved to " + bookshelf);
      setLoadingScreenText("Saving book...");
      m.mount(document.body, loadingScreen);
    })
  })
}, 2000);
console.log("Frame ts loaded with query string: " + decodeURIComponent(queryString));
