!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).vhUnit={})}(this,function(e){"use strict";function n(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}e.initVh=function(){n(),window.addEventListener("resize",function(){n()})},Object.defineProperty(e,"__esModule",{value:!0})});
