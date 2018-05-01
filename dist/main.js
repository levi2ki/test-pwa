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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../assets/css/mcw.min.css":
/*!*********************************!*\
  !*** ../assets/css/mcw.min.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYXNzZXRzL2Nzcy9tY3cubWluLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hc3NldHMvY3NzL21jdy5taW4uY3NzPzk3ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../assets/css/mcw.min.css\n");

/***/ }),

/***/ "../assets/css/style.css":
/*!*******************************!*\
  !*** ../assets/css/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3M/MGNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../assets/css/style.css\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _registerWorker = __webpack_require__(/*! ./lib/registerWorker */ \"./lib/registerWorker.js\");\n\nvar main = function main() {\n  __webpack_require__(/*! ../assets/css/mcw.min.css */ \"../assets/css/mcw.min.css\");\n  __webpack_require__(/*! ../assets/css/style.css */ \"../assets/css/style.css\");\n\n  if ('serviceWorker' in navigator) {\n    (0, _registerWorker.registerWorker)('./indexWorker.js', { scope: '/' });\n  }\n};\nfunction init() {\n  var allBtns = Array.from(document.querySelectorAll('.btn-play'));\n  var playerBtns = allBtns.filter(function (x) {\n    return x.dataset.class = 'play' && x.dataset.src;\n  });\n\n  playerBtns.forEach(function (x) {\n    var au = new Audio();\n\n    var audio = fetch(x.dataset.src).then(function (response) {\n      return response.blob();\n    }).then(function (blob) {\n      au.src = URL.createObjectURL(blob);\n      x.addEventListener('click', function (e) {\n        if (au.paused) {\n          au.play();\n        } else {\n          au.pause();\n          au.load();\n          au.play();\n        }\n      });\n    });\n  });\n}\n\nwindow.onload = function () {\n  main();\n  init();\n  setTimeout(function () {\n    var pb = document.getElementById('progressbar');\n    pb.classList.remove('mdc-linear-progress--indeterminate');\n    pb.classList.add('hidden');\n  }, 1500);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MTJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlcldvcmtlciB9IGZyb20gJy4vbGliL3JlZ2lzdGVyV29ya2VyJztcclxuXHJcbmNvbnN0IG1haW4gPSAoKSA9PiB7XHJcbiAgcmVxdWlyZSgnLi4vYXNzZXRzL2Nzcy9tY3cubWluLmNzcycpO1xyXG4gIHJlcXVpcmUoJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJyk7XHJcblxyXG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICByZWdpc3RlcldvcmtlcignLi9pbmRleFdvcmtlci5qcycsIHtzY29wZTogJy8nfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgYWxsQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wbGF5JykpO1xyXG4gIGNvbnN0IHBsYXllckJ0bnMgPSBhbGxCdG5zLmZpbHRlcih4ID0+IHguZGF0YXNldC5jbGFzcyA9ICdwbGF5JyAmJiB4LmRhdGFzZXQuc3JjKTtcclxuXHJcbiAgcGxheWVyQnRucy5mb3JFYWNoKHggPT4ge1xyXG4gICAgY29uc3QgYXUgPSBuZXcgQXVkaW8oKTtcclxuICAgIFxyXG4gICAgY29uc3QgYXVkaW8gPSBmZXRjaCh4LmRhdGFzZXQuc3JjKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIH0pLnRoZW4oYmxvYiA9PiB7XHJcbiAgICAgIGF1LnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoYXUucGF1c2VkKSB7XHJcbiAgICAgICAgICBhdS5wbGF5KCk7ICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXUucGF1c2UoKTtcclxuICAgICAgICAgIGF1LmxvYWQoKTtcclxuICAgICAgICAgIGF1LnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KSAgICBcclxuICB9KVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgbWFpbigpO1xyXG4gIGluaXQoKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBwYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc2JhcicpO1xyXG4gICAgcGIuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLWxpbmVhci1wcm9ncmVzcy0taW5kZXRlcm1pbmF0ZScpO1xyXG4gICAgcGIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSwgMTUwMCk7XHJcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./lib/registerWorker.js":
/*!*******************************!*\
  !*** ./lib/registerWorker.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar registerWorker = exports.registerWorker = function registerWorker(workerPath, options) {\n  navigator.serviceWorker.register(workerPath, options).then(function (reg) {\n    console.log('register success', reg.scope);\n  }).catch(function (err) {\n    console.warn('register worker failed', err);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVnaXN0ZXJXb3JrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xpYi9yZWdpc3Rlcldvcmtlci5qcz9jNWYyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWdpc3RlcldvcmtlciA9ICh3b3JrZXJQYXRoLCBvcHRpb25zKSA9PiB7XHJcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIod29ya2VyUGF0aCwgb3B0aW9ucylcclxuICAgIC50aGVuKHJlZyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlciBzdWNjZXNzJywgcmVnLnNjb3BlKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUud2FybigncmVnaXN0ZXIgd29ya2VyIGZhaWxlZCcsIGVycilcclxuICAgIH0pO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/registerWorker.js\n");

/***/ })

/******/ });