(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/login.js"],{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2FEli%2FCoding%2FconnextTestApp%2Fpages%2Flogin.js!./":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2FEli%2FCoding%2FconnextTestApp%2Fpages%2Flogin.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/login", function() {
      var mod = __webpack_require__(/*! ./pages/login.js */ "./pages/login.js")
      if(true) {
        module.hot.accept(/*! ./pages/login.js */ "./pages/login.js", function() {
          if(!next.router.components["/login"]) return
          var updatedPage = __webpack_require__(/*! ./pages/login.js */ "./pages/login.js")
          next.router.update("/login", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*eslint-disable*/

function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var handleLogin = function handleLogin(event) {
    var bodyObj = {
      username: username,
      password: password
    };
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(bodyObj)
    });
  };

  return __jsx("div", null, __jsx("h1", null, "Login"), __jsx("div", null, __jsx("span", null, "username: "), __jsx("input", {
    type: "text",
    id: "username",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  })), __jsx("div", null, __jsx("span", null, "password: "), __jsx("input", {
    type: "text",
    id: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), __jsx("button", {
    type: "submit",
    onClick: handleLogin
  }, "submit"));
}

/***/ }),

/***/ 2:
/*!*********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flogin&absolutePagePath=%2FUsers%2FEli%2FCoding%2FconnextTestApp%2Fpages%2Flogin.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flogin&absolutePagePath=%2FUsers%2FEli%2FCoding%2FconnextTestApp%2Fpages%2Flogin.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2FEli%2FCoding%2FconnextTestApp%2Fpages%2Flogin.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=login.js.map