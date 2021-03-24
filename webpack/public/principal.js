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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../imgs/logo.png' in '/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/src/assets/css'\\n    at factory.create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/webpack/lib/Compilation.js:522:10)\\n    at factory (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/webpack/lib/NormalModuleFactory.js:358:22)\\n    at resolver (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/webpack/lib/NormalModuleFactory.js:118:21)\\n    at asyncLib.parallel (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/webpack/lib/NormalModuleFactory.js:198:22)\\n    at /home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/neo-async/async.js:2830:7\\n    at /home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/neo-async/async.js:6877:13\\n    at normalResolver.resolve (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/webpack/lib/NormalModuleFactory.js:188:25)\\n    at doResolve (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:213:14)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn0 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at resolver.doResolve (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn0 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn0 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\\n    at resolver.doResolve (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn42 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn0 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\\n    at resolver.doResolve (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn1 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at hook.callAsync (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\\n    at _fn0 (eval at create (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at fs.stat (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15)\\n    at process.nextTick (/home/rfcosta85/Documentos/GitHub/web_moderno/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pessoa; });\nclass pessoa { \n    cumprimentar() {\n        return 'Bom dia!'\n    }\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n\n\n\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });