!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.blog=t():e.blog=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://localhost:8080/assets/",n(n.s=12)}({12:function(e,t,n){e.exports=n(13)},13:function(e,t){!function(){var e=location.href.includes("netlify")?"":"/Blog",t='\n  <div class="header-bar">\n    <div class="site-id">\n      <h1><a href="'.concat(e,'">Cary</a></h1>\n    </div>\n    <ol class="links">\n      <li>\n        <a href="').concat(e,'/index.html">Home</a>\n      </li>\n      <li>\n        <a href="').concat(e,'/articles.html">Articles</a>\n      </li>\n      <li>\n        <a href="').concat(e,'/about.html">About</a>\n      </li>\n    </ol>\n  </div>\n  '),n=document.createElement("header");if(n.innerHTML=t,document.body.prepend(n,document.body.firstChild),!window.noComment){var o=document.createElement("div");o.innerHTML="<div id=\"disqus_thread\" style='margin-top: 66px'></div>",document.body.append(o),window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=window.location.href};var r=document,i=r.createElement("script");i.src="https://https-carytalk-netlify-app.disqus.com/embed.js",i.setAttribute("data-timestamp",+new Date),(r.head||r.body).appendChild(i)}}()}})}));
//# sourceMappingURL=index.js.map