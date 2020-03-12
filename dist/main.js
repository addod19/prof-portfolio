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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n// import project from './view.js';\r\n\r\n\r\nconst Project = (title, description, liveLink, sourceLink, image, ...skills) => {\r\n    const getTitle = () => title;\r\n    const getDescription = () => description;\r\n    const getSkills = () => skills;\r\n    const getLiveLink = () => liveLink;\r\n    const getSourceLink = () => sourceLink;\r\n    const getImage = () => image;\r\n\r\n    return {getTitle, getDescription, getSkills, getLiveLink, getSourceLink, getImage};\r\n};\r\n// let project = {\r\n//     myTitle: 'javascript',\r\n//     myDescription: 'building portfolio with vanilla javascript',\r\n//     mySkills: ['skill1', 'skill2'],\r\n//     myLiveLink: 'link',\r\n//     mySourceLink: 'slink',\r\n//     myImage: 'image',\r\n\r\n//     printHeader: function() {\r\n//         return (`Title: ${this.myTitle} Description: ${this.myDescription} Skills: ${this.mySkills} My Live Link: ${this.myLiveLink}\r\n//         Source Link: ${this.mySourceLink} Image: ${this.myImage}`)\r\n//     }\r\n// };\r\n// let pp = Project;\r\n// pp.printHeader;\r\n// pp.myTitle = 'rails';\r\n// pp.mydescription = 'build restaurant app with ruby on rails';\r\n// pp.mySkills = ['postgrest', 'webpack'];\r\n// pp.myLiveLink = 'https://linkedin.com/in/daniel-larbi-addo';\r\n// pp.mySourceLink = 'https://github.com/addod19';\r\n// pp.myImage = '../images/first.png';\r\n// console.log(pp);\r\nconst Developer = (intro, currPos, ...socNetworks) => {\r\n    const getIntro = () => intro;\r\n    const getCurrPos = () => currPos;\r\n    const getSocNetworks = () => socNetworks;\r\n\r\n    return {\r\n        getIntro,\r\n        getCurrPos,\r\n        getSocNetworks\r\n    }\r\n};\r\n\r\n\r\n// const view = ( () => {\r\n//     let intro = document.getElementById('#intro');\r\n//     let dan = Developer('Hi, I am Daniel Larbi Addo a full-stack developer.',\r\n//                     'I am currently working as a technical support engineer (PT)',\r\n//                     ['link1', 'link2', 'link3']);\r\n//     let msg = dan.getIntro();\r\n//     // console.log(msg);\r\n//     let head = document.createTextNode(msg);\r\n//     head.innerHTML = msg;\r\n//     intro.appendChild(head);\r\n//     intro.innerHTML = msg;\r\n\r\n// })();\r\n\r\nlet dann = Developer('Hi, I am Daniel Larbi Addo a full-stack developer.',\r\n                    'I am currently working as a technical support engineer (PT)',\r\n                    ['link1', 'link2', 'link3']);\r\nlet p = Project('my-title', 'somyehtng else', 'yes we can', 'super women', ['one', 'two', 'three']);\r\nconsole.log(p)\r\n_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mainContainer();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst view = ( () => {\r\n\r\n    const mainContainer = () => {\r\n        const container = document.createElement('div');\r\n        container.classList.add('container');\r\n\r\n        const intro = document.createElement('div');\r\n        intro.classList.add('intro');\r\n        \r\n        container.innerHTML = intro;\r\n\r\n        container.appendChild(intro);\r\n\r\n        const projects = document.createElement('div');\r\n        projects.classList.add('projects');\r\n        container.appendChild(projects);\r\n    }\r\n\r\n    return { mainContainer };\r\n})();\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (view);\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });