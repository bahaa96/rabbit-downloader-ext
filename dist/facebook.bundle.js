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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNewDownload = void 0;
exports.handleNewDownload = (download) => {
    const action = {
        type: 'ADD_DOWNLOAD',
        download,
    };
    chrome.runtime.sendMessage({ action }, function (response) {
        console.log(response);
    });
};


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extractor_1 = __importDefault(__webpack_require__(22));
const actions_1 = __webpack_require__(2);
const videoURL = window.location.href;
let videoID = "Download";
try {
    videoID = window.location.pathname.split("/").filter(el => el)[2];
}
catch (e) {
    console.log(e.message);
}
const handleLow = () => {
    extractor_1.default.low(videoURL).then(({ url }) => {
        const download = {
            filename: videoID + ".mp4",
            url
        };
        actions_1.handleNewDownload(download);
    });
};
const handleHigh = () => {
    extractor_1.default.high(videoURL).then(({ url }) => {
        const download = {
            filename: videoID + ".mp4",
            url
        };
        actions_1.handleNewDownload(download);
    });
};
let downloadBtn = document.createElement("div");
downloadBtn.classList.add("fb-download-button");
downloadBtn.innerHTML = `
  <button>
    <i class="fa fa-arrow-down fa-lg"></i>
  </button>
  <ul>
    <li>HD</li>
    <li>Normal Quality</li>
  </ul>
`;
downloadBtn.querySelector("button").onclick = () => {
    downloadBtn.querySelector("ul").classList.toggle("active");
};
downloadBtn.querySelector("ul li:nth-child(1)").onclick = handleHigh;
downloadBtn.querySelector("ul li:nth-child(2)").onclick = handleLow;
window.onload = () => {
    document.querySelector("div").appendChild(downloadBtn);
    // const locationInterval = setInterval(() => {
    //   if ((/http[s]?:\/\/www.facebook.\s+\/\d+\/videos\/\d+/gi).test(window.location.href)) {
    //     console.log("Changed")
    //   }
    // }, 250)
};


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const msg = 'Either the video is deleted or it\'s not shared publicly!';
const lowResolution = (link) => fetch(link)
    .then((res) => res.text())
    .then((res) => {
    const link = res
        .split('sd_src_no_ratelimit:"')[1]
        .split('",hd_src_no_ratelimit:')[0];
    return {
        url: link,
    };
})
    .catch((err) => {
    if (err) {
        err.message = msg;
    }
    return err.message;
});
const highResolution = (link) => fetch(link)
    .then((res) => res.text())
    .then((res) => {
    const link = res
        .split('hd_src_no_ratelimit:"')[1]
        .split('",aspect_ratio:')[0];
    return {
        url: link,
    };
})
    .catch((err) => {
    if (err) {
        err.message = msg;
    }
    return err.message;
});
exports.default = {
    low: lowResolution,
    high: highResolution,
};


/***/ })

/******/ });
//# sourceMappingURL=facebook.bundle.js.map