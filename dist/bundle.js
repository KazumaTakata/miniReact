!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function l(e,t,...n){let l=n;return 1===l.length&&(l=l[0]),{type:e,props:t,child:l}}function o(){console.log("callback");let e=Object.assign({},i());r.text1="text22222";let t=Object.assign({},i());console.log(e),console.log(t);let n=document.getElementById("main");!function e(t,n,l,o){if(l.type!==o.type){n.remove();let o=document.createElement(l.type);t.appendChild(o),l.child.map(t=>{e(o,null,t,null)})}else if("string"==typeof l.child)l.child!==o.child&&(n.textContent=l.child);else if(Array.isArray(l.child)){let t=new Set(l.child.map(e=>e.key));o.child.map(e=>e.key).filter(e=>t.has(e)),l.child.map((t,l)=>{e(n,n.childNodes[l],t,o.child[l])})}}(n,n.childNodes[0],t,e)}n.r(t);let r={text1:"text1111"};function i(){return l("ul",{id:"cool",className:"foo",onClick:o},l("li",null,r.text1),l("li",null,"text2"),l("li",null,"text3"))}let c=document.getElementById("main");(function e(t,n){let l=document.createElement(n.type);if(null!==n.props&&Object.keys(n.props).map(e=>{if("className"===e)l.setAttribute("class",n.props[e]);else if(e.startsWith("on")){let t=e.split("on")[1].toLowerCase();l.addEventListener(t,n.props[e])}else l.setAttribute(e,n.props[e])}),"string"==typeof n.child){let e=document.createTextNode(n.child);l.appendChild(e),t.appendChild(l)}else t.appendChild(l),n.child.map(t=>{e(l,t)})})(c,i()),console.log(i())}]);