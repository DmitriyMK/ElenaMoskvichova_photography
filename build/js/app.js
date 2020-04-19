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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Scrollmagic\nvar tl = new TimelineMax();\ntl.to('img', 1.65, {\n  y: -200,\n  scaleX: 0.75,\n  rotationX: 20,\n  scaleY: 0.75,\n  opacity: 0,\n  ease: Linear.easeNone\n}, 0); // tl.to('.header__logo', 1, { y: -70, ease: Power4.easeOut }, 0);\n// tl.to('.go', 1.85, { y: -140, ease: Linear.easeNone }, 0);\n\nvar controller = new ScrollMagic.Controller();\nvar scene = new ScrollMagic.Scene({\n  duration: '600',\n  offset: 80,\n  triggerElement: '#trigger',\n  triggerHook: 0\n});\nscene.setTween(tl);\nscene.addTo(controller);\nscene.addIndicators();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbi8vIFNjcm9sbG1hZ2ljXG5sZXQgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbnRsLnRvKCdpbWcnLCAxLjY1LCB7IHk6IC0yMDAsIHNjYWxlWDogMC43NSwgcm90YXRpb25YOiAyMCwgc2NhbGVZOiAwLjc1LCBvcGFjaXR5OiAwLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmUgfSwgMCk7XG4vLyB0bC50bygnLmhlYWRlcl9fbG9nbycsIDEsIHsgeTogLTcwLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9LCAwKTtcbi8vIHRsLnRvKCcuZ28nLCAxLjg1LCB7IHk6IC0xNDAsIGVhc2U6IExpbmVhci5lYXNlTm9uZSB9LCAwKTtcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5jb25zdCBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gIGR1cmF0aW9uOiAnNjAwJyxcbiAgb2Zmc2V0OiA4MCxcbiAgdHJpZ2dlckVsZW1lbnQ6ICcjdHJpZ2dlcicsXG4gIHRyaWdnZXJIb29rOiAwLFxufSk7XG5cbnNjZW5lLnNldFR3ZWVuKHRsKTtcbnNjZW5lLmFkZFRvKGNvbnRyb2xsZXIpO1xuc2NlbmUuYWRkSW5kaWNhdG9ycygpO1xuIl0sIm1hcHBpbmdzIjoiQUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });