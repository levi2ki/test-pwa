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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./indexWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./indexWorker.js":
/*!************************!*\
  !*** ./indexWorker.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nself.addEventListener('install', function (event) {\n  event.waitUntil(caches.open('v1').then(function (cache) {\n    return cache.addAll(['./', './index.html', './index.js', './stylesheets/style.css', './stylesheets/mcw.min.css', './assets', './assets/audio', './assets/audio/badumts.mp3', './assets/audio/swerch.mp3', './assets/audio/sad-trombone.mp3']);\n  }).catch(function (err) {\n    console.warn('error caching', err);\n  }));\n});\n\nself.addEventListener('fetch', function (event) {\n  console.log('[Service Worker] Fetch', event.request.url);\n  event.respondWith(caches.match(event.request));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleFdvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXhXb3JrZXIuanM/YzdlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gIGV2ZW50LndhaXRVbnRpbChcclxuICAgIGNhY2hlcy5vcGVuKCd2MScpLnRoZW4oY2FjaGUgPT4ge1xyXG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKFtcclxuICAgICAgICAnLi8nLFxyXG4gICAgICAgICcuL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICcuL2luZGV4LmpzJyxcclxuICAgICAgICAnLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3MnLFxyXG4gICAgICAgICcuL3N0eWxlc2hlZXRzL21jdy5taW4uY3NzJyxcclxuICAgICAgICAnLi9hc3NldHMnLFxyXG4gICAgICAgICcuL2Fzc2V0cy9hdWRpbycsXHJcbiAgICAgICAgJy4vYXNzZXRzL2F1ZGlvL2JhZHVtdHMubXAzJyxcclxuICAgICAgICAnLi9hc3NldHMvYXVkaW8vc3dlcmNoLm1wMycsXHJcbiAgICAgICAgJy4vYXNzZXRzL2F1ZGlvL3NhZC10cm9tYm9uZS5tcDMnXHJcbiAgICAgIF0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS53YXJuKCdlcnJvciBjYWNoaW5nJywgZXJyKVxyXG4gICAgfSlcclxuICApXHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coJ1tTZXJ2aWNlIFdvcmtlcl0gRmV0Y2gnLCBldmVudC5yZXF1ZXN0LnVybCk7XHJcbiAgZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcclxufSkiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./indexWorker.js\n");

/***/ })

/******/ });