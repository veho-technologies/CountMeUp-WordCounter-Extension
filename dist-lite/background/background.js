!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{static sendMessageToContentScript(e,t,n,r){chrome.tabs.sendMessage(e,{msg:{source:t.source,destination:"ContentId",name:t.name},data:n},r)}static sendMessage(e,t,n){chrome.runtime.sendMessage({msg:e,data:t},n)}static addMessageListener(e,t){chrome.runtime.onMessage.addListener((n,r,o)=>{var s;n.msg.source===e.source&&n.msg.destination===e.destination&&(e.name?(null==e?void 0:e.name)===(null===(s=n.msg)||void 0===s?void 0:s.name)&&t(n.data,r,o):t(n.data,r,o))})}}},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e){const t=function(e){return e.split(" ").length}(e);return 1===t?`${t} ${chrome.i18n.getMessage("_word")}`:`${t} ${chrome.i18n.getMessage("_words")}`}function s(e){const t=function(e){return e.length}(e);return 1===t?`${t} ${chrome.i18n.getMessage("_character")}`:`${t} ${chrome.i18n.getMessage("_characters")}`}chrome.contextMenus.create({title:"Word counter",contexts:["selection"],id:"WordsCounter"}),r.a.addMessageListener({source:"ContentId",destination:"BackgroundId",name:"selectedText"},e=>{var t;chrome.contextMenus.update("WordsCounter",{title:`${t=e,`${o(t)} - ${s(t)}`}`})})}]);