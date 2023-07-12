/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\nlet deferredPrompt;\n\n// Logic for installing the PWA\nwindow.addEventListener('beforeinstallprompt', event => {\n  event.preventDefault();\n  deferredPrompt = event;\n  // Show the install button\n  butInstall.style.display = 'block';\n});\n\n// Click event handler for the install button\nbutInstall.addEventListener('click', async () => {\n  if (deferredPrompt) {\n    deferredPrompt.prompt();\n    const choiceResult = await deferredPrompt.userChoice;\n    if (choiceResult.outcome === 'accepted') {\n      console.log('PWA installation accepted.');\n    } else {\n      console.log('PWA installation dismissed.');\n    }\n    deferredPrompt = null;\n    butInstall.style.display = 'none';\n  }\n});\n\n// Event handler for the appinstalled event\nwindow.addEventListener('appinstalled', event => {\n  console.log('PWA installed successfully.');\n});\n\n//# sourceURL=webpack://jate/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;