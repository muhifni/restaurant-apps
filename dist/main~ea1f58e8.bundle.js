/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([17,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: 'RestaurantList-V1',
  // CACHE_NAME: new Date().toLocaleString(), // cache name sementara utk dev
  DATABASE_NAME: 'restaurant-list-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants'
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(9);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gooey{      \n    top: 50%;\n    left: -24%;\n    width: 142px;\n    height: 42px;      \n    background: white;\n    filter: contrast(20);\n    /* grid-column-start: 2;\n    grid-column-end: 4; */\n    margin: 0 auto;\n    margin-top: 150px;\n    margin-bottom: 150px;\n    border-radius: 16px;\n}\n\n.gooey .dot {\n  position: absolute;\n    width: 16px;\n    height: 16px;\n    top: 12px;\n    left: 15px;\n    filter: blur(4px);\n    background: #000;\n    border-radius: 50%;\n    transform: translateX(0);\n    animation: dot 2.8s infinite;\n}\n\n.gooey .dots{\n  transform: translateX(0);\n    margin-top: 12px;\n    margin-left: 31px;\n    animation: dots 2.8s infinite;\n}\n\n.gooey .dots span {\n  display: block;\n      float: left;\n      width: 16px;\n      height: 16px;\n      margin-left: 16px;\n      filter: blur(4px);\n      background: #000;\n      border-radius: 50%;\n}\n      \n\n@keyframes dot{\n  50% {transform: translateX(96px)}\n}\n  \n    \n@keyframes dots {\n  50% {transform: translateX(-31px)}\n}\n ", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  min-height: 100vh;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 1) 10%,\n    rgba(252, 252, 252, 1) 50%,\n    rgba(248, 248, 248, 1) 80%,\n    rgba(242, 242, 242, 1) 100%\n  );\n}\n\nimg {\n  display: block;\n}\n\na {\n  min-width: 44px;\n  min-height: 44px;\n  display: block;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-inline {\n  display: inline;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.container {\n  padding: 32px;\n  flex: 1;\n}\n\n.open {\n  /* transform: translate(0px, 12px) !important; */\n  transform: translate(0px, 100px) !important;\n  right: 0 !important;\n  /* top: 68px; */\n}\n\nh2 {\n  font-size: 1.2rem;\n}\n\n/* \n** Skip to content styling \n*/\n\na.skip {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  background: #99a3a5;\n  color: #fff;\n  padding: 10px;\n  top: -50px;\n  z-index: 1500;\n}\n\na.skip:focus {\n  top: 0;\n}\n\n/* \n** NavBar Styling \n*/\n\nnav {\n  padding: 12px 32px;\n  position: sticky;\n  top: 0;\n  background: #fff;\n  z-index: 50;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\nnav .d-flex {\n  justify-content: space-between;\n  align-items: center;\n}\n\nnav ul {\n  display: flex;\n}\n\nnav li {\n  list-style: none;\n  margin: 0px 22px;\n  border-bottom: 1px solid #fff;\n}\n\nnav li:hover {\n  border-bottom: 1px solid;\n}\n\n.nav__hide {\n  transform: translate(0, -77px);\n  transition: transform 0.3s ease-in-out;\n}\n\n.nav__show {\n  transform: translate(0, 0);\n  transition: transform 0.3s ease-in-out;\n}\n\nnav li a {\n  text-decoration: none;\n  color: #000;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n\nnav li hr {\n  position: relative;\n}\n\n/* \n** logo styling \n*/\n.logo h1 {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.logo i {\n  font-size: 36px;\n  font-weight: 300;\n  margin-right: 2px;\n}\n\n/* \n** hamburger styling  \n*/\n\n#hamburger a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: #000;\n  text-decoration: none;\n}\n\n/* \n** Hero Element Styling \n*/\nheader {\n  margin-bottom: 2rem;\n}\n\nheader img {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  object-position: center;\n}\n\n/* \n** Restaurant styling \n*/\n.restaurant-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin-top: 1rem;\n}\n\n.restaurant {\n  background: #fff;\n\n  border-radius: 8px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.restaurant .content {\n  padding: 10px 24px;\n}\n\n.restaurant .image {\n  width: 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  height: 145px;\n  object-fit: cover;\n}\n\n.restaurant-container {\n  min-height: 265px;\n}\n\n.rating,\n.city {\n  font-size: 0.9rem;\n}\n\n.rating .fas.fa-star,\n.rating p {\n  color: #ffc107;\n}\n\n.rating .fas.fa-star,\n.rating p,\n.city p {\n  display: inline-block;\n}\n\n.restaurant img,\n.restaurant h3,\n.restaurant .rating,\n.restaurant .city,\n.restaurant .description {\n  margin-bottom: 7px;\n}\n\n.restaurant .city {\n  margin-left: 15px;\n}\n\ni.fas.fa-map-marker-alt {\n  color: #ff0000;\n}\n\n.restaurant p.description {\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n}\n\n.name a {\n  text-decoration: none;\n  color: #000;\n}\n\n/* \n** Detail Restaurant styling  \n*/\n.detail_container {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.detail_container hr {\n  margin: 8px 0;\n}\n\n.detail_image {\n  margin-bottom: 10px;\n}\n\n.detail_image img {\n  width: 100%;\n}\n\n.detail_city {\n  margin-right: 30px;\n}\n\n.detail_category p {\n  display: inline-block;\n  padding: 2px 8px;\n  background-color: hsl(0deg 0% 90%);\n  border-radius: 6px;\n  margin-right: 8px;\n  margin-top: 5px;\n}\n\n.detail_content {\n  display: grid;\n  gap: 20px;\n}\n\n.list_menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.menu_makanan p,\n.menu_minuman p {\n  font-weight: bold;\n}\n\n.detail_review .d-flex {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n\n.detail_review {\n  border-top: 1px solid #bdbdbd;\n  border-bottom: 1px solid #bdbdbd;\n  padding: 10px 0;\n}\n\n.review_image img {\n  width: 40px;\n}\n\n.review_date p {\n  font-size: 14px;\n  color: #111111;\n}\n\n.review_text {\n  background-color: #e3e3e3;\n  border-radius: 4px;\n  padding: 10px;\n}\n\n/* \n** Footer styling  \n*/\n\nfooter {\n  background-color: #fff;\n  padding: 25px;\n}\n\nfooter p {\n  text-align: center;\n}\n\n/*\n   Like\n*/\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(13);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 1195px) {\r\n  .restaurant-list {\r\n    width: 100%;\r\n    justify-content: space-around;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 780px) {\r\n  .restaurant p.description {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 710px) {\r\n  .restaurant .image {\r\n    height: 325px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #menu-container {\r\n    display: block;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    transition: transform 0.3s ease-in-out;\r\n    transform: translate(0px, -200px);\r\n    right: 0px;\r\n  }\r\n\r\n  header img {\r\n    height: 250px;\r\n  }\r\n\r\n  .list_menu {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    gap: 10px;\r\n  }\r\n\r\n  .gooey {\r\n    grid-column-start: 1;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  #hamburger,\r\n  #mobile-nav {\r\n    display: none;\r\n  }\r\n\r\n  .gooey {\r\n    grid-column-start: 2;\r\n    grid-column-end: 4;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .restaurant .image {\r\n    height: 300px;\r\n  }\r\n\r\n  .restaurant p.description {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n  nav li a {\r\n    font-size: 16px;\r\n  }\r\n\r\n  header img {\r\n    height: 200px;\r\n  }\r\n\r\n  .restaurant .image {\r\n    height: 195px;\r\n  }\r\n\r\n  .restaurant p.description {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .restaurant-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 820px) {\r\n  .restaurant-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  header img {\r\n    min-width: 1000px;\r\n  }\r\n\r\n  .restaurant-list {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restaurant-list {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _require = __webpack_require__(0),
    CONFIG = _require["default"];

var RestaurantItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RestaurantItem, _HTMLElement);

  var _super = _createSuper(RestaurantItem);

  function RestaurantItem() {
    _classCallCheck(this, RestaurantItem);

    return _super.call(this);
  }

  _createClass(RestaurantItem, [{
    key: "restaurant",
    set: function set(restaurant) {
      this._restaurant = restaurant;
      this.render();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n      <div class=\"restaurant\" tabindex=\"0\">\n          <img src=\"".concat(CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId, "\"\n              class=\"image lazyload\" alt=\"restaurant image\">\n          <div class=\"content\">\n              <h3 class=\"name\"><a href=\"#/detail/").concat(this._restaurant.id, "\">").concat(this._restaurant.name, "</a></h3>\n              <div class=\"rating d-inline-block\">\n                  <i class=\"fas fa-star\"></i>\n                  <p>").concat(this._restaurant.rating, "</p>\n              </div>\n              <div class=\"city d-inline-block\">\n                  <i class=\"fas fa-map-marker-alt\"></i>\n                  <p>").concat(this._restaurant.city, "</p>\n              </div>\n              <p class=\"description\">").concat(this._restaurant.description, "</p>\n          </div>\n      </div>\n    ");
    }
  }]);

  return RestaurantItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('restaurant-item', RestaurantItem);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HeroImage = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HeroImage, _HTMLElement);

  var _super = _createSuper(HeroImage);

  function HeroImage() {
    _classCallCheck(this, HeroImage);

    return _super.call(this);
  }

  _createClass(HeroImage, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <picture>\n      <source media=\"(min-width: 1000px)\" srcset=\"./images/heros/hero-image_2-large.jpg\">\n      <source media=\"(min-width: 800px)\" srcset=\"./images/heros/hero-image_2-medium.jpg\">\n      <source media=\"(max-width: 799px)\" srcset=\"./images/heros/hero-image_2-small.jpg\">\n      <img src='./images/heros/hero-image_2-large.jpg' alt=\"hero images\"></img>\n    </picture>\n    ";
    }
  }]);

  return HeroImage;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('hero-image', HeroImage);

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(7);

// EXTERNAL MODULE: ./src/styles/loader-style.css
var loader_style = __webpack_require__(8);

// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(10);

// EXTERNAL MODULE: ./src/styles/responsive.css
var responsive = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/serviceworker-webpack-plugin/lib/runtime.js
var lib_runtime = __webpack_require__(5);
var lib_runtime_default = /*#__PURE__*/__webpack_require__.n(lib_runtime);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return lib_runtime_default.a.register();

          case 3:
            return _context.abrupt("return");

          case 4:
            console.log('Service worker not supported in this browser');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

var API_ENDPOINT = {
  RESTAURANT_LIST: "".concat(config["default"].BASE_URL, "list"),
  DETAIL: function DETAIL(id) {
    return "".concat(config["default"].BASE_URL, "detail/").concat(id);
  },
  SEARCH: function SEARCH(keyword) {
    return "".concat(config["default"].BASE_URL, "/search?q=").concat(keyword);
  }
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/data/restaurant-source.js
function restaurant_source_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function restaurant_source_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { restaurant_source_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { restaurant_source_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var restaurant_source_RestaurantSource = /*#__PURE__*/function () {
  function RestaurantSource() {
    _classCallCheck(this, RestaurantSource);
  }

  _createClass(RestaurantSource, null, [{
    key: "restaurantList",
    value: function () {
      var _restaurantList = restaurant_source_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.RESTAURANT_LIST);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function restaurantList() {
        return _restaurantList.apply(this, arguments);
      }

      return restaurantList;
    }()
  }, {
    key: "detailRestaurant",
    value: function () {
      var _detailRestaurant = restaurant_source_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.DETAIL(id));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                responseJson = _context2.sent;
                return _context2.abrupt("return", responseJson.restaurant);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function detailRestaurant(_x) {
        return _detailRestaurant.apply(this, arguments);
      }

      return detailRestaurant;
    }()
  }]);

  return RestaurantSource;
}();

/* harmony default export */ var restaurant_source = (restaurant_source_RestaurantSource);
// EXTERNAL MODULE: ./src/scripts/components/restaurant-item.js
var restaurant_item = __webpack_require__(14);

// EXTERNAL MODULE: ./src/scripts/components/hero-image.js
var hero_image = __webpack_require__(15);

// CONCATENATED MODULE: ./src/scripts/view/homePage.js
function homePage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function homePage_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { homePage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { homePage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var HomePage = {
  render: function render() {
    return homePage_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <div class=\"container\">\n            <section id=\"restaurant-container\" class=\"restaurant-container\">\n                <h2>Explore Restaurant</h2>\n                <div class=\"restaurant-list\">                    \n                  <div class=\"gooey\">\n                      <span class=\"dot\"></span>\n                      <div class=\"dots\">\n                          <span></span>\n                          <span></span>\n                          <span></span>\n                      </div>\n                  </div>\n                </div>\n            </section>\n        </div>");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return homePage_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurants, restaurantListElement, headerElement;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return restaurant_source.restaurantList();

            case 2:
              restaurants = _context2.sent;
              restaurantListElement = document.querySelector('.restaurant-list');
              headerElement = document.querySelector('header');
              restaurantListElement.innerHTML = '';
              headerElement.innerHTML = '<hero-image></hero-image>';
              restaurants.forEach(function (restaurant) {
                var restaurantItem = document.createElement('restaurant-item');
                restaurantItem.restaurant = restaurant;
                restaurantListElement.appendChild(restaurantItem);
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var homePage = (HomePage);
// CONCATENATED MODULE: ./src/scripts/routes/url-parser.js
// Pengurai URL aktif
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ var url_parser = (UrlParser);
// CONCATENATED MODULE: ./src/scripts/components/detail-restaurant.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function detail_restaurant_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function detail_restaurant_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function detail_restaurant_createClass(Constructor, protoProps, staticProps) { if (protoProps) detail_restaurant_defineProperties(Constructor.prototype, protoProps); if (staticProps) detail_restaurant_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var detail_restaurant_DetailRestaurant = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DetailRestaurant, _HTMLElement);

  var _super = _createSuper(DetailRestaurant);

  function DetailRestaurant() {
    detail_restaurant_classCallCheck(this, DetailRestaurant);

    return _super.call(this);
  }

  detail_restaurant_createClass(DetailRestaurant, [{
    key: "restaurant",
    set: function set(restaurant) {
      this._restaurant = restaurant;
      this.render();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n      <div class=\"detail_image\">\n          <img src=\"".concat(config["default"].BASE_IMAGE_URL_LARGE).concat(this._restaurant.pictureId, "\" alt=\"restaurant image\">\n        </div>\n        <div class=\"detail_title\">\n          <h2>").concat(this._restaurant.name, "</h2>          \n          <div class=\"detail_city d-inline-block\">\n            <i class=\"fas fa-map-marker-alt\"></i>\n            <p class=\"d-inline-block\">").concat(this._restaurant.city, "</p>\n          </div>\n          <div class=\"detail_address d-inline-block\">\n              <i class=\"fas fa-map-marked-alt\"></i>\n              <p class=\"d-inline-block\">").concat(this._restaurant.address, "</p>\n          </div>          \n          <div class=\"detail_category\">\n              ").concat(this._categoryRestaurant(), "\n          </div>          \n        </div>\n        <hr/>\n        <div class=\"detail_content\">\n          <div class=\"detail_description\">\n            <h3>Description</h3>\n            <p>").concat(this._restaurant.description, "</p>\n          </div>\n          <div class=\"detail_menu\">\n            <h3>Menu</h3>\n            <div class=\"list_menu\">\n              <div class=\"menu_makanan\">\n                <p>Makanan</p>\n                <ul>\n                  ").concat(this._foods(), "                  \n                </ul>            \n              </div>\n              <div class=\"menu_minuman\">\n                <p>Minuman</p>\n                <ul>\n                  ").concat(this._drinks(), "                  \n                </ul>\n              </div>\n            </div>            \n          </div>\n          <div class=\"review_container\">\n            <h3>Review</h3>                        \n            ").concat(this._reviewer(), "\n          </div>          \n        </div>\n    ");
    }
  }, {
    key: "_categoryRestaurant",
    value: function _categoryRestaurant() {
      var categories = this._restaurant.categories;
      var memory = '';
      categories.forEach(function (categorie) {
        memory += "<p>".concat(categorie.name, "</p>");
      });
      return memory;
    }
  }, {
    key: "_foods",
    value: function _foods() {
      var memory = '';

      this._restaurant.menus.foods.forEach(function (food) {
        memory += "<li>".concat(food.name, "</li>");
      });

      return memory;
    }
  }, {
    key: "_drinks",
    value: function _drinks() {
      var memory = '';

      this._restaurant.menus.drinks.forEach(function (drink) {
        memory += "<li>".concat(drink.name, "</li>");
      });

      return memory;
    }
  }, {
    key: "_reviewer",
    value: function _reviewer() {
      var memory = '';

      this._restaurant.customerReviews.forEach(function (reviewer) {
        memory += "\n        <div class=\"detail_review\">\n          <div class=\"d-flex\">\n            <div class=\"review_image\">\n              <img src=\"images/avatar_circle.png\" alt=\"reviewer image\">\n            </div>\n            <div class=\"review_name\">\n              <p>".concat(reviewer.name, "</p>\n            </div>\n            <div class=\"review_date\">\n              <p>").concat(reviewer.date, "</p>\n            </div>\n          </div>\n          <div class=\"review_text\">\n            <p>").concat(reviewer.review, "</p>\n          </div>\n        </div>\n      ");
      });

      return memory;
    }
  }]);

  return DetailRestaurant;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('detail-restaurant', detail_restaurant_DetailRestaurant);
// CONCATENATED MODULE: ./src/templates/template-creator.js
var createLikeButtonTemplate = function createLikeButtonTemplate() {
  return "\n  <button aria-label=\"favorite this restaurant\" id=\"likeButton\" class=\"like\">\n     <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n  </button>\n";
};

var createLikedButtonTemplate = function createLikedButtonTemplate() {
  return "\n  <button aria-label=\"unfavorite this restaurant\" id=\"likeButton\" class=\"like\">\n    <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n  </button>\n";
};

var createPreloader = function createPreloader() {
  return "\n  <div class=\"gooey\">\n    <span class=\"dot\"></span>\n      <div class=\"dots\">\n          <span></span>\n          <span></span>\n          <span></span>\n      </div>\n  </div>\n";
};


// EXTERNAL MODULE: ./node_modules/idb/build/index.js + 1 modules
var build = __webpack_require__(6);

// CONCATENATED MODULE: ./src/scripts/data/favoriterestaurant-idb.js
function favoriterestaurant_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favoriterestaurant_idb_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favoriterestaurant_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favoriterestaurant_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var DATABASE_NAME = config["default"].DATABASE_NAME,
    DATABASE_VERSION = config["default"].DATABASE_VERSION,
    OBJECT_STORE_NAME = config["default"].OBJECT_STORE_NAME;
var dbPromise = Object(build["a" /* openDB */])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestaurantIdb = {
  getRestaurant: function getRestaurant(id) {
    return favoriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dbPromise;

            case 2:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return favoriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return favoriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dbPromise;

            case 2:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return favoriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ var favoriterestaurant_idb = (FavoriteRestaurantIdb);
// CONCATENATED MODULE: ./src/scripts/utils/like-button-initiator.js
function like_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function like_button_initiator_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { like_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { like_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var LikeButtonInitiator = {
  init: function init(_ref) {
    var _this = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._restaurant = restaurant;
              _context.next = 5;
              return _this._renderButton();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantExist: function _isRestaurantExist(id) {
    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return favoriterestaurant_idb.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this3 = this;

    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    var likeButton = document.querySelector('#likeButtonContainer');
    likeButton.addEventListener('click', /*#__PURE__*/like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return favoriterestaurant_idb.putRestaurant(_this3._restaurant);

            case 2:
              _this3._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    var likeButton = document.querySelector('#likeButtonContainer');
    likeButton.addEventListener('click', /*#__PURE__*/like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return favoriterestaurant_idb.deleteRestaurant(_this4._restaurant.id);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ var like_button_initiator = (LikeButtonInitiator);
// CONCATENATED MODULE: ./src/scripts/view/detail.js
function detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function detail_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Detail = {
  render: function render() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <div class=\"container\">      \n      <div id=\"likeButtonContainer\"></div>\n      <div class=\"detail_container\">\n        <div class=\"gooey\">\n            <span class=\"dot\"></span>\n            <div class=\"dots\">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </div>\n\n      </div>\n    </div>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, restaurant, detailContainer, detailRestaurantElement, headerElement;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // fungsi yang dijalankan setelah render
              url = url_parser.parseActiveUrlWithoutCombiner();
              _context2.next = 3;
              return restaurant_source.detailRestaurant(url.id);

            case 3:
              restaurant = _context2.sent;
              detailContainer = document.querySelector('.detail_container');
              detailRestaurantElement = document.createElement('detail-restaurant');
              headerElement = document.querySelector('header');
              headerElement.innerHTML = '';
              detailContainer.innerHTML = '';
              detailRestaurantElement.restaurant = restaurant;
              detailContainer.appendChild(detailRestaurantElement);
              like_button_initiator.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                restaurant: {
                  id: restaurant.id,
                  name: restaurant.name,
                  description: restaurant.description,
                  pictureId: restaurant.pictureId,
                  city: restaurant.city,
                  rating: restaurant.rating
                }
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var detail = (Detail);
// CONCATENATED MODULE: ./src/scripts/view/favorite.js
function favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var Favorite = {
  render: function render() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <div class=\"container\">\n      <section id=\"restaurant-container\" class=\"restaurant-container\">\n          <h2>Your Favorite Restaurant</h2>\n          <div class=\"restaurant-list\">\n            <p>Tidak ada restaurant favorite</p>\n          </div>\n      </section>\n    </div>");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurants, restaurantListElement;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return favoriterestaurant_idb.getAllRestaurants();

            case 2:
              restaurants = _context2.sent;
              restaurantListElement = document.querySelector('.restaurant-list'); // console.log(restaurants);

              if (restaurants.length !== 0) {
                restaurantListElement.innerHTML = '';
                restaurants.forEach(function (restaurant) {
                  var restaurantItem = document.createElement('restaurant-item');
                  restaurantItem.restaurant = restaurant;
                  restaurantListElement.appendChild(restaurantItem);
                });
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var favorite = (Favorite);
// CONCATENATED MODULE: ./src/scripts/routes/routes.js



var routes = {
  '/': homePage,
  '/home': homePage,
  '/favorite': favorite,
  '/detail/:id': detail
};
/* harmony default export */ var routes_routes = (routes);
// CONCATENATED MODULE: ./src/scripts/utils/drawer-initiator.js
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var hamburgerBtn = _ref.hamburgerBtn,
        content = _ref.content,
        rootPage = _ref.rootPage,
        navBar = _ref.navBar,
        mainMenu = _ref.mainMenu;
    hamburgerBtn.addEventListener('click', function (event) {
      event.preventDefault();

      _this._toggleMenu(event, mainMenu);
    });
    content.addEventListener('click', function (event) {
      _this._cloneHamburger(event, mainMenu);
    });
    rootPage.addEventListener('mousewheel', function (event) {
      _this._scrollDetection(event, navBar, mainMenu);
    });
  },
  _toggleMenu: function _toggleMenu(event, mainMenu) {
    console.log('open');
    event.stopPropagation();
    mainMenu.classList.toggle('open');
  },
  _cloneHamburger: function _cloneHamburger(event, mainMenu) {
    event.stopPropagation();
    mainMenu.classList.remove('open');
  },

  /*
   * hide and show navbar
   */
  _scrollDetection: function _scrollDetection(event, navBar, mainMenu) {
    if (event.wheelDelta >= 0) {
      // console.log('up');
      navBar.classList.remove('nav__hide');
      navBar.classList.add('nav__show');
    } else {
      // console.log('down');
      navBar.classList.remove('nav__show');
      navBar.classList.add('nav__hide');
      mainMenu.classList.remove('open');
    }
  }
};
/* harmony default export */ var drawer_initiator = (DrawerInitiator);
// CONCATENATED MODULE: ./src/scripts/view/app.js
function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }





var app_App = /*#__PURE__*/function () {
  function App(_ref) {
    var hamburgerBtn = _ref.hamburgerBtn,
        content = _ref.content,
        rootPage = _ref.rootPage,
        navBar = _ref.navBar,
        mainMenu = _ref.mainMenu;

    app_classCallCheck(this, App);

    this._hamburgerBtn = hamburgerBtn;
    this._content = content;
    this._rootPage = rootPage;
    this._navbar = navBar;
    this._mainMenu = mainMenu;

    this._initialAppShell();
  }

  app_createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      drawer_initiator.init({
        hamburgerBtn: this._hamburgerBtn,
        content: this._content,
        rootPage: this._rootPage,
        navBar: this._navbar,
        mainMenu: this._mainMenu
      });
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page, skipLinkElem;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = url_parser.parseActiveUrlWithCombiner();
                page = routes_routes[url];
                skipLinkElem = document.querySelector('.skip');
                skipLinkElem.addEventListener('click', function (event) {
                  event.preventDefault();
                  document.querySelector('#main').focus();
                });
                _context.next = 6;
                return page.render();

              case 6:
                this._content.innerHTML = _context.sent;
                _context.next = 9;
                return page.afterRender();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ var app = (app_App);
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(16);

// CONCATENATED MODULE: ./src/scripts/index.js

/* for async await transpile */








var scripts_app = new app({
  hamburgerBtn: document.querySelector('#hamburger'),
  content: document.querySelector('#main'),
  rootPage: document,
  navBar: document.querySelector('nav'),
  mainMenu: document.querySelector('.menu-container'),
  restaurantList: document.querySelector('.restaurant-list')
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
  sw_register();
});

/***/ })
/******/ ]);