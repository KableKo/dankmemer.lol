(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/app/Components/Button/Button.scss":
/*!***********************************************!*\
  !*** ./src/app/Components/Button/Button.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/Components/Button/Button.scss?");

/***/ }),

/***/ "./src/app/Components/Button/index.jsx":
/*!*********************************************!*\
  !*** ./src/app/Components/Button/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ \"./src/app/Components/Button/Button.scss\");\n/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({link,children,onClick})=>{const button=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{onClick:onClick,className:\"button\"},children);return link?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\",{href:link},button):button;}));\n\n//# sourceURL=webpack:///./src/app/Components/Button/index.jsx?");

/***/ }),

/***/ "./src/app/Pages/Reports/index.jsx":
/*!*****************************************!*\
  !*** ./src/app/Pages/Reports/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Button */ \"./src/app/Components/Button/index.jsx\");\n/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules.js */ \"./src/app/Pages/Reports/rules.js\");\n/* harmony import */ var _reports_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports.scss */ \"./src/app/Pages/Reports/reports.scss\");\n/* harmony import */ var _reports_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reports_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}class Reports extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]{constructor(...args){super(...args);_defineProperty(this,\"textAreaRef\",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());_defineProperty(this,\"state\",{reportType:'User Report',brokenRules:[]});}async send(){if(!this.state.reportType){return alert('You have to select the kind of report you\\'d like to file.');}if(this.textAreaRef.current.value.split(' ').length<20){return alert('Your report must be at least 20 words.');}if(this.state.brokenRules.length===0){return alert('You must tick at least one broken rule.');}const res=await fetch('/api/report',{credentials:'same-origin',method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({reportType:this.state.reportType,body:this.textAreaRef.current.value,rules:this.state.brokenRules})});switch(res.status){case 429:return this.setState({finished:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"header\"},\"You've already recently reported someone.\"),\"You have to wait before you do it again.\")});case 200:return this.setState({finished:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"header\"},\"Your report has been sent.\"),\"Make sure you keep your direct messages with the bot open.\",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null),\"If we have any information to ask for, the bot will send you a direct message.\",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null),\"We will not notify you if a ban has happened or not, for privacy reasons.\")});case 403:return this.setState({finished:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"header\"},\"You have been banned from reporting people.\"),\"Report bans are un-appealable. Good job. I'm proud of you.\")});}}handleRadio(e){this.setState({reportType:e.target.value});}handleCheckbox(rule){this.setState(prev=>({brokenRules:prev.brokenRules.includes(rule)?prev.brokenRules.filter(brokenRule=>brokenRule!==rule):prev.brokenRules.concat(rule)}));}render(){/*if (!this.props.loggedIn) {\n      return (\n        <div className=\"content appeal\">\n          <header className=\"header\">\n            You aren't logged in with your Discord account. <a href=\"/oauth/login?redirect=/appeals\">Click this</a> to log in.\n          </header>\n        </div>\n      );\n    }*/if(this.state.finished){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"content appeal\"},this.state.finished);}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"content appeal\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\",null,\"Which type of report is this?\",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{type:\"radio\",value:\"User Report\",checked:this.state.reportType==='User Report',onChange:this.handleRadio.bind(this)}),\"User Report\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{type:\"radio\",value:\"Server Report\",checked:this.state.reportType==='Server Report',onChange:this.handleRadio.bind(this)}),\"Server Report\")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\",null,\"Which rules did they break?\",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null),_rules_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][this.state.reportType].map((rule,index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",{key:rule},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{type:\"checkbox\",value:rule,checked:this.state.brokenRules.includes(rule),onChange:this.handleCheckbox.bind(this,rule)}),`${index+1}. ${rule}`))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",null,\"Write the body of your report below. If you don't include an ID, the report is useless.\",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\",{target:\"_blank\",href:\"https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-\"},\"HOW TO GET THEIR ID????\"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\",{className:\"textarea\",ref:this.textAreaRef,rows:\"12\"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{onClick:this.send.bind(this)},\"Send\")));}}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(store=>store.login)(Reports));\n\n//# sourceURL=webpack:///./src/app/Pages/Reports/index.jsx?");

/***/ }),

/***/ "./src/app/Pages/Reports/reports.scss":
/*!********************************************!*\
  !*** ./src/app/Pages/Reports/reports.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/Pages/Reports/reports.scss?");

/***/ }),

/***/ "./src/app/Pages/Reports/rules.js":
/*!****************************************!*\
  !*** ./src/app/Pages/Reports/rules.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst userRules=[\"No userbots, spamming, auto-typers, or macros\",\"No sharing exploits, or abusing them\",\"No coin storage accounts/farming accounts (alts)\",\"Do not use the bot for racism, homophobia, any other type of targeted hate\",\"Using the bot for advertising\",\"Coins are not to be used in scams or invite servers. Example: giving people meme coins to invite as many people as possible\",\"Selling meme coins or trading for real life currency in any way\",\"Other/NA\"];const serverRules=[\"Server has userbots\",\"Server is trading invites/nitro for currency\",\"Entire server is knowingly breaking bot rules\",\"Server has alts\",\"Other/NA\"];/* harmony default export */ __webpack_exports__[\"default\"] = ({'Server Report':serverRules,'User Report':userRules});\n\n//# sourceURL=webpack:///./src/app/Pages/Reports/rules.js?");

/***/ })

}]);