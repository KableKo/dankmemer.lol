(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/Pages/Staff/Developers/Developer.jsx":
/*!******************************************************!*\
  !*** ./src/app/Pages/Staff/Developers/Developer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Developer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Developer.scss */ \"./src/app/Pages/Staff/Developers/Developer.scss\");\n/* harmony import */ var _Developer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Developer_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socials_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socials.js */ \"./src/app/Pages/Staff/Developers/socials.js\");\nconst UWU=new Audio(`/static/uwu.wav`);const playAudio=()=>UWU.play();/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({name,picture,social,about})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"staff-member\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"staff-name blurple\"},name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"staff-social\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{className:\"staff-picture\",alt:`${name}'s avatar`,onClick:()=>{name==='Melmsie'?playAudio():console.log('Go click Mel\\'s avatar');},src:picture}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"staff-about-parent\"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:about.length>120?'staff-about':'',dangerouslySetInnerHTML:{__html:about}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"staff-accounts\"},Object.entries(social).map(([socialName,link])=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\",{key:socialName,href:link},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{className:\"staff-account\",alt:`${name}'s ${socialName} link`,src:_socials_js__WEBPACK_IMPORTED_MODULE_2__[socialName]})))))));\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/Developers/Developer.jsx?");

/***/ }),

/***/ "./src/app/Pages/Staff/Developers/Developer.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/Staff/Developers/Developer.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/Developers/Developer.scss?");

/***/ }),

/***/ "./src/app/Pages/Staff/Developers/socials.js":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/Developers/socials.js ***!
  \***************************************************/
/*! exports provided: Overwatch, Discord, Spotify, Twitter, Website, YouTube, GitHub, GitLab, Reddit, Twitch, Insta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var assets_Overwatch_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/Overwatch.svg */ \"./src/app/assets/Overwatch.svg\");\n/* harmony import */ var assets_Overwatch_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_Overwatch_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Overwatch\", function() { return assets_Overwatch_svg__WEBPACK_IMPORTED_MODULE_0___default.a; });\n/* harmony import */ var assets_Discord_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/Discord.svg */ \"./src/app/assets/Discord.svg\");\n/* harmony import */ var assets_Discord_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_Discord_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Discord\", function() { return assets_Discord_svg__WEBPACK_IMPORTED_MODULE_1___default.a; });\n/* harmony import */ var assets_Spotify_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/Spotify.svg */ \"./src/app/assets/Spotify.svg\");\n/* harmony import */ var assets_Spotify_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_Spotify_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Spotify\", function() { return assets_Spotify_svg__WEBPACK_IMPORTED_MODULE_2___default.a; });\n/* harmony import */ var assets_Twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/Twitter.svg */ \"./src/app/assets/Twitter.svg\");\n/* harmony import */ var assets_Twitter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_Twitter_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Twitter\", function() { return assets_Twitter_svg__WEBPACK_IMPORTED_MODULE_3___default.a; });\n/* harmony import */ var assets_Website_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/Website.svg */ \"./src/app/assets/Website.svg\");\n/* harmony import */ var assets_Website_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_Website_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Website\", function() { return assets_Website_svg__WEBPACK_IMPORTED_MODULE_4___default.a; });\n/* harmony import */ var assets_YouTube_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/YouTube.svg */ \"./src/app/assets/YouTube.svg\");\n/* harmony import */ var assets_YouTube_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_YouTube_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"YouTube\", function() { return assets_YouTube_svg__WEBPACK_IMPORTED_MODULE_5___default.a; });\n/* harmony import */ var assets_GitHub_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/GitHub.svg */ \"./src/app/assets/GitHub.svg\");\n/* harmony import */ var assets_GitHub_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_GitHub_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"GitHub\", function() { return assets_GitHub_svg__WEBPACK_IMPORTED_MODULE_6___default.a; });\n/* harmony import */ var assets_GitLab_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/GitLab.svg */ \"./src/app/assets/GitLab.svg\");\n/* harmony import */ var assets_GitLab_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_GitLab_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"GitLab\", function() { return assets_GitLab_svg__WEBPACK_IMPORTED_MODULE_7___default.a; });\n/* harmony import */ var assets_Reddit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/Reddit.svg */ \"./src/app/assets/Reddit.svg\");\n/* harmony import */ var assets_Reddit_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_Reddit_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Reddit\", function() { return assets_Reddit_svg__WEBPACK_IMPORTED_MODULE_8___default.a; });\n/* harmony import */ var assets_Twitch_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/Twitch.svg */ \"./src/app/assets/Twitch.svg\");\n/* harmony import */ var assets_Twitch_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_Twitch_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Twitch\", function() { return assets_Twitch_svg__WEBPACK_IMPORTED_MODULE_9___default.a; });\n/* harmony import */ var assets_instagram_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/instagram.png */ \"./src/app/assets/instagram.png\");\n/* harmony import */ var assets_instagram_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_instagram_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Insta\", function() { return assets_instagram_png__WEBPACK_IMPORTED_MODULE_10___default.a; });\n\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/Developers/socials.js?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets sync \\.(png|jpg|gif|webp)$":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/Staff/assets sync nonrecursive \.(png|jpg|gif|webp)$ ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./2pumpchump.png\": \"./src/app/Pages/Staff/assets/2pumpchump.png\",\n\t\"./abaddon.gif\": \"./src/app/Pages/Staff/assets/abaddon.gif\",\n\t\"./aetheryx.png\": \"./src/app/Pages/Staff/assets/aetheryx.png\",\n\t\"./aiphey.png\": \"./src/app/Pages/Staff/assets/aiphey.png\",\n\t\"./auxim.gif\": \"./src/app/Pages/Staff/assets/auxim.gif\",\n\t\"./blair.gif\": \"./src/app/Pages/Staff/assets/blair.gif\",\n\t\"./bleddyn48.jpg\": \"./src/app/Pages/Staff/assets/bleddyn48.jpg\",\n\t\"./bourbon.png\": \"./src/app/Pages/Staff/assets/bourbon.png\",\n\t\"./dauntless.jpg\": \"./src/app/Pages/Staff/assets/dauntless.jpg\",\n\t\"./devoxin.jpg\": \"./src/app/Pages/Staff/assets/devoxin.jpg\",\n\t\"./duckysoren.gif\": \"./src/app/Pages/Staff/assets/duckysoren.gif\",\n\t\"./f-i-n-g-e-r-c-h-i-p-s.jpg\": \"./src/app/Pages/Staff/assets/f-i-n-g-e-r-c-h-i-p-s.jpg\",\n\t\"./fizzy-coco.png\": \"./src/app/Pages/Staff/assets/fizzy-coco.png\",\n\t\"./jaiden.jpg\": \"./src/app/Pages/Staff/assets/jaiden.jpg\",\n\t\"./justin.gif\": \"./src/app/Pages/Staff/assets/justin.gif\",\n\t\"./kable-kompany.gif\": \"./src/app/Pages/Staff/assets/kable-kompany.gif\",\n\t\"./katz.jpg\": \"./src/app/Pages/Staff/assets/katz.jpg\",\n\t\"./kayla.png\": \"./src/app/Pages/Staff/assets/kayla.png\",\n\t\"./knight.png\": \"./src/app/Pages/Staff/assets/knight.png\",\n\t\"./melmsie.png\": \"./src/app/Pages/Staff/assets/melmsie.png\",\n\t\"./mercury.jpg\": \"./src/app/Pages/Staff/assets/mercury.jpg\",\n\t\"./miril-savla.jpg\": \"./src/app/Pages/Staff/assets/miril-savla.jpg\",\n\t\"./mistress-red.jpg\": \"./src/app/Pages/Staff/assets/mistress-red.jpg\",\n\t\"./mook.png\": \"./src/app/Pages/Staff/assets/mook.png\",\n\t\"./morgan.png\": \"./src/app/Pages/Staff/assets/morgan.png\",\n\t\"./nathanos.gif\": \"./src/app/Pages/Staff/assets/nathanos.gif\",\n\t\"./nevulo.jpg\": \"./src/app/Pages/Staff/assets/nevulo.jpg\",\n\t\"./notme#8130.jpg\": \"./src/app/Pages/Staff/assets/notme#8130.jpg\",\n\t\"./nunca.jpg\": \"./src/app/Pages/Staff/assets/nunca.jpg\",\n\t\"./nyx.jpg\": \"./src/app/Pages/Staff/assets/nyx.jpg\",\n\t\"./passionate.gif\": \"./src/app/Pages/Staff/assets/passionate.gif\",\n\t\"./reign.jpg\": \"./src/app/Pages/Staff/assets/reign.jpg\",\n\t\"./shiiiitakë.png\": \"./src/app/Pages/Staff/assets/shiiiitakë.png\",\n\t\"./sinister.png\": \"./src/app/Pages/Staff/assets/sinister.png\",\n\t\"./spurkeh.gif\": \"./src/app/Pages/Staff/assets/spurkeh.gif\",\n\t\"./tintin-(note-all-lowercase-plx).jpg\": \"./src/app/Pages/Staff/assets/tintin-(note-all-lowercase-plx).jpg\",\n\t\"./toto.png\": \"./src/app/Pages/Staff/assets/toto.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/app/Pages/Staff/assets sync \\\\.(png|jpg|gif|webp)$\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets_sync_nonrecursive_\\.(png%7Cjpg%7Cgif%7Cwebp)$?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/2pumpchump.png":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/assets/2pumpchump.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fee51643e2bb31af0780c1c8bb63aef4.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/2pumpchump.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/abaddon.gif":
/*!************************************************!*\
  !*** ./src/app/Pages/Staff/assets/abaddon.gif ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3adc385d31cd711ff1925738b25e5d2e.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/abaddon.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/aetheryx.png":
/*!*************************************************!*\
  !*** ./src/app/Pages/Staff/assets/aetheryx.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5863dabe6e4bef6e65fa2a82cdbaa404.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/aetheryx.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/aiphey.png":
/*!***********************************************!*\
  !*** ./src/app/Pages/Staff/assets/aiphey.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"56989a2cc183c840cc123f96c75e8252.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/aiphey.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/auxim.gif":
/*!**********************************************!*\
  !*** ./src/app/Pages/Staff/assets/auxim.gif ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9dedba447b4a9a15a3ad2595e9745992.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/auxim.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/blair.gif":
/*!**********************************************!*\
  !*** ./src/app/Pages/Staff/assets/blair.gif ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6a8764fd3ab02420b6ed7c3b27a47ac4.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/blair.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/bleddyn48.jpg":
/*!**************************************************!*\
  !*** ./src/app/Pages/Staff/assets/bleddyn48.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3143a2bcddd114bed37e0409f38cdea9.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/bleddyn48.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/bourbon.png":
/*!************************************************!*\
  !*** ./src/app/Pages/Staff/assets/bourbon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d66f9ad2066622f3509244c3a1bee8da.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/bourbon.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/dauntless.jpg":
/*!**************************************************!*\
  !*** ./src/app/Pages/Staff/assets/dauntless.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ad192b782127e0679d3ffe5d2c0ee5db.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/dauntless.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/devoxin.jpg":
/*!************************************************!*\
  !*** ./src/app/Pages/Staff/assets/devoxin.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"891369adad61358fbde147eb4f8d7c32.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/devoxin.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/duckysoren.gif":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/assets/duckysoren.gif ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"75c25e5d9666b5f8b943df219de315ad.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/duckysoren.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/f-i-n-g-e-r-c-h-i-p-s.jpg":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Staff/assets/f-i-n-g-e-r-c-h-i-p-s.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6d98914e68af3421f38a4a604ae7bec1.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/f-i-n-g-e-r-c-h-i-p-s.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/fizzy-coco.png":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/assets/fizzy-coco.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"28f669a94952d0eadcc87347c6bd71ed.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/fizzy-coco.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/jaiden.jpg":
/*!***********************************************!*\
  !*** ./src/app/Pages/Staff/assets/jaiden.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ae318b48d5a7cbef2f8552d5f7eccb19.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/jaiden.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/justin.gif":
/*!***********************************************!*\
  !*** ./src/app/Pages/Staff/assets/justin.gif ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0f8519707fbb4fed3c40c295959c9cfa.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/justin.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/kable-kompany.gif":
/*!******************************************************!*\
  !*** ./src/app/Pages/Staff/assets/kable-kompany.gif ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e6bcb2987332e274dd2d25c9a654d780.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/kable-kompany.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/katz.jpg":
/*!*********************************************!*\
  !*** ./src/app/Pages/Staff/assets/katz.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b0a2b7cd70977bf48305589718ae424a.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/katz.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/kayla.png":
/*!**********************************************!*\
  !*** ./src/app/Pages/Staff/assets/kayla.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a5773475dec15e59156de6103451dcee.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/kayla.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/knight.png":
/*!***********************************************!*\
  !*** ./src/app/Pages/Staff/assets/knight.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"bd7e2d1423d4314a6a4aa6227b0fb5b8.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/knight.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/melmsie.png":
/*!************************************************!*\
  !*** ./src/app/Pages/Staff/assets/melmsie.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ac8d991f4bb8c804867147d7b613c821.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/melmsie.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/mercury.jpg":
/*!************************************************!*\
  !*** ./src/app/Pages/Staff/assets/mercury.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"73cf761b5e8dfea53626687cbee5d9c9.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/mercury.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/miril-savla.jpg":
/*!****************************************************!*\
  !*** ./src/app/Pages/Staff/assets/miril-savla.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"113fb08a3e2b56ad34b48b91eaaf6980.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/miril-savla.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/mistress-red.jpg":
/*!*****************************************************!*\
  !*** ./src/app/Pages/Staff/assets/mistress-red.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"07ae074302f502e03657bfdd82eb3441.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/mistress-red.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/mook.png":
/*!*********************************************!*\
  !*** ./src/app/Pages/Staff/assets/mook.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a7ce93ca1d4d20d238061df18290ca25.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/mook.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/morgan.png":
/*!***********************************************!*\
  !*** ./src/app/Pages/Staff/assets/morgan.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8561d53c6d00e023ecdaeb7fc26eb07a.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/morgan.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/nathanos.gif":
/*!*************************************************!*\
  !*** ./src/app/Pages/Staff/assets/nathanos.gif ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"af2ab480fed06fb14762772be12fefca.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/nathanos.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/nevulo.jpg":
/*!***********************************************!*\
  !*** ./src/app/Pages/Staff/assets/nevulo.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a8a9e247a043ae4c58a41dc2dbceefde.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/nevulo.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/notme#8130.jpg":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/assets/notme#8130.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"39949b5005aaef7f300732b80418cf99.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/notme#8130.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/nunca.jpg":
/*!**********************************************!*\
  !*** ./src/app/Pages/Staff/assets/nunca.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"474e76d7e0ad7b015a1a25e451ad120e.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/nunca.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/nyx.jpg":
/*!********************************************!*\
  !*** ./src/app/Pages/Staff/assets/nyx.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"84bced063acf10768d464ab0bc42c1e0.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/nyx.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/passionate.gif":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/assets/passionate.gif ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"faadf3ae67e8c770e299ab0837ea0e01.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/passionate.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/reign.jpg":
/*!**********************************************!*\
  !*** ./src/app/Pages/Staff/assets/reign.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"47f87f0cfa300e743c3fa5ac35a353ff.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/reign.jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/shiiiitakë.png":
/*!***************************************************!*\
  !*** ./src/app/Pages/Staff/assets/shiiiitakë.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b03acd8c9f7a35b82f5b45a767bcc421.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/shiiiitak%C3%AB.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/sinister.png":
/*!*************************************************!*\
  !*** ./src/app/Pages/Staff/assets/sinister.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ca2cace685e80c175b8fd2e4ade695b8.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/sinister.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/spurkeh.gif":
/*!************************************************!*\
  !*** ./src/app/Pages/Staff/assets/spurkeh.gif ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8c9a4331ffbd4aacbd8bc23b46e45383.gif\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/spurkeh.gif?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/tintin-(note-all-lowercase-plx).jpg":
/*!************************************************************************!*\
  !*** ./src/app/Pages/Staff/assets/tintin-(note-all-lowercase-plx).jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"939a5332d1425db8b30e009eb7e19a8d.jpg\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/tintin-(note-all-lowercase-plx).jpg?");

/***/ }),

/***/ "./src/app/Pages/Staff/assets/toto.png":
/*!*********************************************!*\
  !*** ./src/app/Pages/Staff/assets/toto.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b5bdba7c6cde4511a021c8c276861b0f.png\";\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/assets/toto.png?");

/***/ }),

/***/ "./src/app/Pages/Staff/images.js":
/*!***************************************!*\
  !*** ./src/app/Pages/Staff/images.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst images={};const requireCtx=__webpack_require__(\"./src/app/Pages/Staff/assets sync \\\\.(png|jpg|gif|webp)$\");requireCtx.keys().map(name=>images[name.slice(2).split('.')[0]]=requireCtx(name));/* harmony default export */ __webpack_exports__[\"default\"] = (images);\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/images.js?");

/***/ }),

/***/ "./src/app/Pages/Staff/index.jsx":
/*!***************************************!*\
  !*** ./src/app/Pages/Staff/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.json */ \"./src/app/Pages/Staff/users.json\");\nvar _users_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./users.json */ \"./src/app/Pages/Staff/users.json\", 1);\n/* harmony import */ var _Developers_Developer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Developers/Developer */ \"./src/app/Pages/Staff/Developers/Developer.jsx\");\n/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.js */ \"./src/app/Pages/Staff/images.js\");\nfunction _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}const categories=Object.entries(_users_json__WEBPACK_IMPORTED_MODULE_1__);const getSocialIndex=({social})=>Object.keys(social).length===0?-1:1;/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"content\"},categories.map(([category,users])=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,{key:category},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\",{className:\"staff-title\"},category),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"staff-list\"},users.sort(()=>Math.random()-0.5).sort((a,b)=>getSocialIndex(a)-getSocialIndex(b)).map(user=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Developers_Developer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_extends({},user,{key:user.name,picture:_images_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][user.name.toLowerCase().replace(/ /g,'-')]})))))))));\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/index.jsx?");

/***/ }),

/***/ "./src/app/Pages/Staff/users.json":
/*!****************************************!*\
  !*** ./src/app/Pages/Staff/users.json ***!
  \****************************************/
/*! exports provided: Developers, Server Management, Server Moderators, Honorable Mentions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"Developers\\\":[{\\\"name\\\":\\\"Melmsie\\\",\\\"about\\\":\\\"I spend all day working my ass off at the pasta factory trying to provide pasta to hard-working people all across the world. After a long day of work, I come to Dank Memer Official to unwind and have thought-driven discussions about my favorite discord bot. When I get here, however, all I see is pasta after pasta. All I want to do is escape my miserable life, but you fucks keep spamming.\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/musicbot\\\",\\\"Website\\\":\\\"https://octave.gg/\\\",\\\"GitHub\\\":\\\"https://github.com/melmsie\\\",\\\"Twitter\\\":\\\"https://twitter.com/realmelmsie\\\",\\\"YouTube\\\":\\\"https://www.youtube.com/c/Melmsie\\\"}},{\\\"name\\\":\\\"aetheryx\\\",\\\"about\\\":\\\"it's pronounced ayyth-uh-ricks or uhh-thi-ricks. honestly just call me aeth (ayyth), you can't fuck that up\\\",\\\"social\\\":{\\\"GitHub\\\":\\\"https://github.com/aetheryx\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/user/Dynamexia\\\",\\\"Twitter\\\":\\\"https://twitter.com/aetheryx\\\"}}],\\\"Server Management\\\":[{\\\"name\\\":\\\"Dauntless\\\",\\\"about\\\":\\\"dauntless sucks\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/7kna4Pz\\\",\\\"GitHub\\\":\\\"https://github.com/Dauntless7\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/user/lonesomefickle\\\",\\\"Twitter\\\":\\\"https://twitter.com/nicolai5423\\\"}},{\\\"name\\\":\\\"Mook\\\",\\\"about\\\":\\\"Like a somboooooOoooOodie I need to spek to ur manager PLES\\\",\\\"social\\\":{\\\"Twitter\\\":\\\"https://twitter.com/MookScape\\\",\\\"Twitch\\\":\\\"https://www.twitch.tv/zmook\\\"}},{\\\"name\\\":\\\"Blair\\\",\\\"about\\\":\\\"before you embark on a journey of revenge, dig two graves. have fun.\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/fM5YVkk\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/user/gotohellwhydontya\\\",\\\"Twitch\\\":\\\"https://twitch.tv/expectationsblair\\\",\\\"Insta\\\":\\\"https://instagram.com/gotohellwhydontya\\\"}},{\\\"name\\\":\\\"DuckySoren\\\",\\\"about\\\":\\\"Ȗ̵͐ẘ̶͐Ȗ̶̓ ̷̼̐Ó̷̾w̴̐̒Ỏ̴̌\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/NXAc5xs\\\",\\\"Twitter\\\":\\\"https://twitter.com/DuckySoren\\\"}},{\\\"name\\\":\\\"Nunca\\\",\\\"about\\\":\\\"Mel is a major qt...\\\",\\\"social\\\":{\\\"GitHub\\\":\\\"https://github.com/Ionomycin\\\",\\\"Discord\\\":\\\"https://discord.gg/s87mw8\\\"}},{\\\"name\\\":\\\"tintin (note all lowercase plx)\\\",\\\"about\\\":\\\"\\\\\\\"empty\\\\\\\" but in RGB, ANYTHING but that white or 7289da. I need RGB! 🥵\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/JT5aUYQ\\\",\\\"GitHub\\\":\\\"https://github.com/tintin9999\\\"}},{\\\"name\\\":\\\"Abaddon\\\",\\\"about\\\":\\\"You think darkness to be your ally...the shadows betray you, because they serve me\\\",\\\"social\\\":{\\\"Spotify\\\":\\\"https://open.spotify.com/user/c1b8juerb2w1wcx9mf67wldvu?si=IQDA2WXxQ26rf30MVP_bQA\\\",\\\"YouTube\\\":\\\"https://youtu.be/dQw4w9WgXcQ\\\"}},{\\\"name\\\":\\\"Kable Kompany\\\",\\\"about\\\":\\\"Life keys: Superfluous vocabulary with accommodating fart jokes. \\\",\\\"social\\\":{\\\"Website\\\":\\\"https://kablekompany.com/\\\",\\\"Twitter\\\":\\\"https://twitter.com/kablekompany\\\",\\\"GitHub\\\":\\\"https://github.com/kablekompany\\\",\\\"Insta\\\":\\\"https://instagram.com/kablekompany\\\",\\\"Discord\\\":\\\"https://discord.gg/nhU7zXk\\\"}}],\\\"Server Moderators\\\":[{\\\"name\\\":\\\"Sinister\\\",\\\"about\\\":\\\"I help meth-heads change their light bulbs\\\",\\\"social\\\":{\\\"Twitch\\\":\\\"https://www.twitch.tv/sinister__1337\\\",\\\"Discord\\\":\\\"https://discord.gg/wdCVp9P\\\"}},{\\\"name\\\":\\\"Bourbon\\\",\\\"about\\\":\\\"I like my chicken with a pasta.\\\",\\\"social\\\":{}},{\\\"name\\\":\\\"Miril Savla\\\",\\\"about\\\":\\\"Madness as you know, is a lot like gravity, all it takes is a little push.\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/nBhSAW\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/b2dm3lhabhmvm4uqygo5ded95\\\",\\\"YouTube\\\":\\\"https://www.youtube.com/channel/UCx60NXyx6On8b0aF6N4AdHA/\\\"}},{\\\"name\\\":\\\"Passionate\\\",\\\"about\\\":\\\"Nothing is a waste of time if you use the experience wisely.\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/4Kvt9D9\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/9k0q0ap8j8kiv7jjsnoykq12g\\\",\\\"YouTube\\\":\\\"https://www.youtube.com/channel/UCbTYsQ8Fx9wqbylyOlt8afQ\\\"}},{\\\"name\\\":\\\"Jaiden\\\",\\\"about\\\":\\\"Hey I'm Jaiden, and you're Watching Disney Channel\\\",\\\"social\\\":{\\\"Insta\\\":\\\"https://www.instagram.com/jaiden.chengg/\\\"}},{\\\"name\\\":\\\"Knight\\\",\\\"about\\\":\\\"Hey guys! I'm Knight, feel free to friend and text me!  🏄🤙🏀\\\",\\\"social\\\":{\\\"Spotify\\\":\\\"https://open.spotify.com/user/npvwzu7cxn2pgi88t7vbzbj97?si=gRB77Z2ASISHgRNBaiG7mw\\\"}},{\\\"name\\\":\\\"Katz\\\",\\\"about\\\":\\\"i like unicorns\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/vyYc2et\\\",\\\"Twitch\\\":\\\"https://twitch.tv/zblobfish1\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/65hdgaldudzoulddxkqbg4rq2?si=I0Gt6vowRFywIYRN6nCLkw\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/user/zblobfish\\\"}},{\\\"name\\\":\\\"Spurkeh\\\",\\\"about\\\":\\\"Umm just your typically 21 year old that loves gaming and anime I work a lot whenever my freetime is I'm spending it with da bois either online or irl\\\",\\\"social\\\":{\\\"Twitch\\\":\\\"https://www.twitch.tv/yoboisparky\\\"}},{\\\"name\\\":\\\"Aiphey\\\",\\\"about\\\":\\\"First I drink the coffee. Then I do the things.\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/Y4Xu3WN\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/409mdtf1dzhrdzg501y92yzd9?si=aosUi9_1S8a-GGcMSri_1Q\\\",\\\"Insta\\\":\\\"https://www.instagram.com/aipheyduh/\\\"}},{\\\"name\\\":\\\"morgan\\\",\\\"about\\\":\\\"stand by moi\\\",\\\"social\\\":{\\\"Twitter\\\":\\\"https://twitter.com/silksmooth09\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/0c4uwktqb04nfkxym5pji1ojc?si=Kn6sMWuqRtas2nlGAefKNg\\\",\\\"YouTube\\\":\\\"https://www.youtube.com/channel/UCNuuA6tIdRU8pUj5GyxaAVw/playlists?disable_polymer=1\\\"}},{\\\"name\\\":\\\"Justin\\\",\\\"about\\\":\\\"Thought of a bio, here it is. Oh yeah, the names Justin!\\\",\\\"social\\\":{}},{\\\"name\\\":\\\"Bleddyn48\\\",\\\"about\\\":\\\"I'm a simple welsh boy, currently studying Mechanical and Manufacturing Engineering. I like the colour yellow, since all the other colours are shit looking, and for some reason, I like Indian food, like proper hot shit, chicken madras ye get me? I'm not sure what else to tall you tbh, I do have a slightly dark humour i guess? I keep that shit on lock down though. I have a pet cat called marmalade, annoys the shit out of me, but whatever. Ye, not sure what else to say, so uh.. bye?\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/qcCkr5\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/updp4bjrerrxexaxqwns6wp1e\\\"}},{\\\"name\\\":\\\"Toto\\\",\\\"about\\\":\\\"I like my pasta with a chicken.\\\",\\\"social\\\":{\\\"Insta\\\":\\\"https://www.instagram.com/cerennklndr\\\"}},{\\\"name\\\":\\\"Nyx\\\",\\\"about\\\":\\\"Night Shift Security Boi\\\",\\\"social\\\":{\\\"Reddit\\\":\\\"https://www.reddit.com/user/Nyxgawr\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/slashnyx/playlist/5aQkSFEXjGwzBJuFutQyGV\\\",\\\"Twitter\\\":\\\"https://twitter.com/Nyxgawr\\\"}},{\\\"name\\\":\\\"Kayla\\\",\\\"about\\\":\\\"Insert pretentious stuff about myself here\\\",\\\"social\\\":{\\\"Spotify\\\":\\\"https://open.spotify.com/user/kaylaramirez135\\\",\\\"Insta\\\":\\\"https://www.instagram.com/kaylaacevedo135/\\\"}},{\\\"name\\\":\\\"Shiiiitakë\\\",\\\"about\\\":\\\"Bloop.\\\",\\\"social\\\":{}},{\\\"name\\\":\\\"Nathanos\\\",\\\"about\\\":\\\"What do I see myself as in 2020? I don’t have 2020 vision.\\\",\\\"social\\\":{\\\"Discord\\\":\\\"https://discord.gg/KkVY3Xj\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/u/eternaIfire\\\",\\\"Twitch\\\":\\\"https://twitch.tv/eternaifire\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/zyd072fa571o9fksgxhj26yux?si=GdKPaIFVRIq6rEchRC_7fQ\\\",\\\"Insta\\\":\\\"https://instagram.com/nathan.ul\\\",\\\"YouTube\\\":\\\"https://www.youtube.com/channel/UCY3OaLxtjkrSxj_foGSqVjA\\\"}},{\\\"name\\\":\\\"f i n g e r c h i p s\\\",\\\"about\\\":\\\"bloop>\\\",\\\"social\\\":{}},{\\\"name\\\":\\\"Mistress Red\\\",\\\"about\\\":\\\"Chocolate doesn’t ask questions, chocolate understands.\\\",\\\"social\\\":{\\\"Website\\\":\\\"https://www.bungie.net/en/Profile/254/12740999/RED%20ENYO%2088\\\"}},{\\\"name\\\":\\\"2PumpChump\\\",\\\"about\\\":\\\"Never forget, the world is yours. Terms and conditions may apply.\\\",\\\"social\\\":{}},{\\\"name\\\":\\\"Reign\\\",\\\"about\\\":\\\"nostalgia.\\\",\\\"social\\\":{\\\"Spotify\\\":\\\"https://open.spotify.com/user/017bgykk6q21i1s1lsykhb9ev\\\",\\\"Discord\\\":\\\"https://discord.gg/27kjC54\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/u/Lone_Ashbourne\\\"}},{\\\"name\\\":\\\"notme#8130\\\",\\\"about\\\":\\\"I'm not a weeb\\\",\\\"social\\\":{\\\"Twitter\\\":\\\"https://twitter.com/vryhuman\\\"}},{\\\"name\\\":\\\"mercury\\\",\\\"about\\\":\\\"best planet\\\",\\\"social\\\":{\\\"YouTube\\\":\\\"https://www.youtube.com/channel/UCyGmGua4f5xWj-h6jcq2CNw\\\"}}],\\\"Honorable Mentions\\\":[{\\\"name\\\":\\\"Devoxin\\\",\\\"about\\\":\\\"Is breaking things considered a profession?\\\",\\\"social\\\":{\\\"GitHub\\\":\\\"https://github.com/Devoxin\\\",\\\"GitLab\\\":\\\"https://gitlab.com/Devoxin\\\",\\\"Twitter\\\":\\\"https://twitter.com/Dvoxn\\\",\\\"Website\\\":\\\"https://serux.pro\\\",\\\"Twitch\\\":\\\"https://www.twitch.tv/devoxin\\\"}},{\\\"name\\\":\\\"Nevulo\\\",\\\"about\\\":\\\"G'day, I'm Blake. I'm a web and software developer based in Australia.\\\",\\\"social\\\":{\\\"GitHub\\\":\\\"https://github.com/nevvulo\\\",\\\"Spotify\\\":\\\"https://open.spotify.com/user/talce8kvy7w0flxk2sv3iyxi4\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/user/Nevulo\\\",\\\"Website\\\":\\\"https://nevulo.xyz\\\",\\\"Twitch\\\":\\\"https://www.twitch.tv/nevvulo\\\"}},{\\\"name\\\":\\\"Auxim\\\",\\\"about\\\":\\\"<marquee behavior=\\\\\\\"alternate\\\\\\\">Hippity hoppity ur memes are my property</marquee>\\\",\\\"social\\\":{\\\"GitHub\\\":\\\"https://github.com/GeoffreyWesthoff\\\",\\\"GitLab\\\":\\\"https://gitlab.com/GeoffreyWesthoff\\\",\\\"Reddit\\\":\\\"https://www.reddit.com/user/le_spacecookie\\\",\\\"Twitter\\\":\\\"https://twitter.com/altdentifier\\\",\\\"Website\\\":\\\"https://altdentifier.com/\\\",\\\"Twitch\\\":\\\"https://www.twitch.tv/EXG_Auxim\\\"}},{\\\"name\\\":\\\"Fizzy Coco\\\",\\\"about\\\":\\\"Imagine having a bio in 2019, btw I'm mel's favorite\\\",\\\"social\\\":{\\\"Reddit\\\":\\\"https://www.reddit.com/u/rlcrawkm/\\\",\\\"Website\\\":\\\"https://m.youtube.com/watch?v=dQw4w9WgXcQ\\\"}}]}\");\n\n//# sourceURL=webpack:///./src/app/Pages/Staff/users.json?");

/***/ }),

/***/ "./src/app/assets/Discord.svg":
/*!************************************!*\
  !*** ./src/app/assets/Discord.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f8389ca1a741a115313bede9ac02e2c0.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Discord.svg?");

/***/ }),

/***/ "./src/app/assets/GitHub.svg":
/*!***********************************!*\
  !*** ./src/app/assets/GitHub.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d219fc5e66cd2e90747714476d460f31.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/GitHub.svg?");

/***/ }),

/***/ "./src/app/assets/GitLab.svg":
/*!***********************************!*\
  !*** ./src/app/assets/GitLab.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ab089c02c8a54a63a347b47190857329.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/GitLab.svg?");

/***/ }),

/***/ "./src/app/assets/Overwatch.svg":
/*!**************************************!*\
  !*** ./src/app/assets/Overwatch.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1a528d9e529911465757e1869e94ac1d.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Overwatch.svg?");

/***/ }),

/***/ "./src/app/assets/Reddit.svg":
/*!***********************************!*\
  !*** ./src/app/assets/Reddit.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0629a43be86a5fbb16a2e4ab256016d7.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Reddit.svg?");

/***/ }),

/***/ "./src/app/assets/Spotify.svg":
/*!************************************!*\
  !*** ./src/app/assets/Spotify.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e359ad39480a3ed8d413d0a663bce8a7.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Spotify.svg?");

/***/ }),

/***/ "./src/app/assets/Twitch.svg":
/*!***********************************!*\
  !*** ./src/app/assets/Twitch.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"68f7b9f66e8ba664e2adbe0b81c0c18f.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Twitch.svg?");

/***/ }),

/***/ "./src/app/assets/Twitter.svg":
/*!************************************!*\
  !*** ./src/app/assets/Twitter.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9be66c09991347ecc68ec5063d920ab7.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Twitter.svg?");

/***/ }),

/***/ "./src/app/assets/Website.svg":
/*!************************************!*\
  !*** ./src/app/assets/Website.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d8851beea04ea75ca3febac546828318.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/Website.svg?");

/***/ }),

/***/ "./src/app/assets/YouTube.svg":
/*!************************************!*\
  !*** ./src/app/assets/YouTube.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"427337d19ee4c8c33cab4ae98952b2f8.svg\";\n\n//# sourceURL=webpack:///./src/app/assets/YouTube.svg?");

/***/ }),

/***/ "./src/app/assets/instagram.png":
/*!**************************************!*\
  !*** ./src/app/assets/instagram.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6d2ab22bcdee8ba006102c0eb8ad5502.png\";\n\n//# sourceURL=webpack:///./src/app/assets/instagram.png?");

/***/ })

}]);