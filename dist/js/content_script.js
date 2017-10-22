/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Trigger;
(function (Trigger) {
    Trigger[Trigger["page_menu"] = 0] = "page_menu";
    Trigger[Trigger["selection_menu"] = 1] = "selection_menu";
    Trigger[Trigger["browser_action"] = 2] = "browser_action";
    Trigger[Trigger["click_outside"] = 3] = "click_outside";
})(Trigger = exports.Trigger || (exports.Trigger = {}));


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(0);
const iframeId = "booknshelf-popup-frame";
const iframeConstStyle = "height: 500px; width: 500px; " +
    "margin: 0px; padding: 0px; " +
    "position: fixed; right: 5px; top: 5px; " +
    "z-index: 2147483647; display: block !important;";
const GooglePlayBooks = "https://play.google.com/store/books/details/";
const Goodreads = "https://www.goodreads.com/book/show/";
function isFrameAdded() {
    return document.getElementById(iframeId) != null;
}
function removeFrame() {
    let iframe = document.getElementById(iframeId);
    if (iframe != null)
        iframe.parentNode.removeChild(iframe);
}
function addFrame(queryString) {
    // Avoid recursive frame insertion
    let extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
    if (!location.origin.includes(extensionOrigin)) {
        let iframe = document.getElementById(iframeId);
        if (iframe != null)
            iframe.parentNode.removeChild(iframe);
        iframe = document.createElement('iframe');
        iframe.src = chrome.runtime.getURL('frame.html') + "?" + queryString;
        iframe.frameBorder = "0";
        iframe.id = iframeId;
        iframe.style.cssText = iframeConstStyle;
        document.body.appendChild(iframe);
    }
}
function findBookDetails() {
    let url = document.URL;
    // check known url formats
    if (url.startsWith(GooglePlayBooks))
        return document.getElementsByClassName("document-title")[0].textContent;
    if (url.startsWith(Goodreads))
        return document.getElementById("bookTitle").textContent;
    // no book found
    return null;
}
chrome.runtime.onMessage.addListener(function (request, sender) {
    console.log("Contentscript received : '" + constants_1.Trigger[request.trigger] + "'");
    switch (request.trigger) {
        case constants_1.Trigger.click_outside: {
            removeFrame();
            break;
        }
        case constants_1.Trigger.selection_menu: {
            // Searching for book using selected text
            addFrame(request.selection);
            break;
        }
        case constants_1.Trigger.browser_action: {
            if (isFrameAdded())
                removeFrame();
            else {
                // Searching for Book Details
                let bookDetails = findBookDetails();
                addFrame(bookDetails);
            }
            break;
        }
        case constants_1.Trigger.page_menu: {
            // Searching for Book Details
            let bookDetails = findBookDetails();
            addFrame(bookDetails);
            break;
        }
    }
});


/***/ })

/******/ });