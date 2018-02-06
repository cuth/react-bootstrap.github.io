webpackJsonp([0x61ea79bfa198],{533:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),c=l(s),u=a(91),i=l(u),d=a(88),p=l(d),m=a(226),f=l(m),h=a(12),b=l(h),E=function(e){function t(){return o(this,t),n(this,e.apply(this,arguments))}return r(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"bs-docs-section"},c.default.createElement("h2",{className:"page-header"},c.default.createElement(b.default,{id:"install"},"Install")),c.default.createElement(i.default,null,c.default.createElement(p.default,{sm:6},c.default.createElement(f.default,{header:"npm (recommended)",className:"bs-docs-code-panel"},c.default.createElement("pre",null,c.default.createElement("code",null,"\n$ npm install --save react react-dom\n$ npm install --save react-bootstrap\n                ")))),c.default.createElement(p.default,{sm:6},c.default.createElement(f.default,{header:"bower",className:"bs-docs-code-panel"},c.default.createElement("pre",null,c.default.createElement("code",null,"\n$ bower install react\n$ bower install react-bootstrap\n                "))))),c.default.createElement("h2",null,"Stylesheets"),c.default.createElement("p",null,"Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included css. However, some stylesheet ",c.default.createElement("strong",null,"is required")," to use these components. How and which bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN."),c.default.createElement("div",{className:"bs-callout bs-callout-warning"},c.default.createElement("p",null,"React-Bootstrap currently targets Bootstrap v3. To use React-Bootstrap, include the CSS for Bootstrap v3 instead of Bootstrap v4.")),c.default.createElement("pre",null,c.default.createElement("code",null,'\n<!-- Latest compiled and minified CSS -->\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n\n<!-- Optional theme -->\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">\n          ')),c.default.createElement("p",null,"For more advanced use cases you can also use a bundler like Webpack or Browserify to include the css files for you as part of your build process but that is beyond the scope of this guide. Also see"," ",c.default.createElement("a",{href:"http://getbootstrap.com/customize/"},"http://getbootstrap.com/customize/")," ","for details about customizing stylesheets to match your component use."),c.default.createElement("h3",null,"Themes"),c.default.createElement("p",null,"React-Bootstrap is compatible with existing Bootstrap themes. Just follow the installation instructions for your theme of choice."),c.default.createElement("div",{className:"bs-callout bs-callout-warning"},c.default.createElement("p",null,"Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors.")),c.default.createElement("h2",{className:"page-header"},c.default.createElement(b.default,{id:"commonjs"},"Javascript")),c.default.createElement("p",null,"React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either"," ",c.default.createElement("code",null,"bootstrap.js")," or jQuery. If you have React setup and React-Bootstrap installed you have everything you need."),c.default.createElement("p",null,"You can consume the library as CommonJS modules, ES6 modules via Babel, AMD, or as a global JS script."),c.default.createElement("div",{className:"bs-callout bs-callout-info"},c.default.createElement("h4",null,"Bundle size optimization"),c.default.createElement("p",null,"If you install React-Bootstrap using ",c.default.createElement("strong",null,"npm"),", you can import individual components from ",c.default.createElement("code",null,"react-bootstrap/lib")," ","rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the size of your client bundle.")),c.default.createElement("h3",null,c.default.createElement(b.default,{id:"commonjs"},"CommonJS")),c.default.createElement("pre",null,c.default.createElement("code",null,"\nvar Alert = require('react-bootstrap/lib/Alert');\n// or\nvar Alert = require('react-bootstrap').Alert;")),"/>",c.default.createElement("h3",null,c.default.createElement(b.default,{id:"es6"},"ES6")),c.default.createElement("p",null,"Es6 modules aren't supported natively yet, but you can use the syntax now with the help of a transpiler like Babel."),c.default.createElement("pre",null,c.default.createElement("code",null,"\nimport Button from 'react-bootstrap/lib/Button';\n// or\nimport { Button } from 'react-bootstrap';")),c.default.createElement("h3",null,c.default.createElement(b.default,{id:"amd"},"AMD")),c.default.createElement("div",{className:"bs-callout bs-callout-danger"},c.default.createElement("p",null,"AMD support is limited to requiring the entire package. If you only want to consume specific components, consider using npm and CommonJS modules instead.")),c.default.createElement("pre",null,c.default.createElement("code",null,"\ndefine(['react-bootstrap'], function(ReactBootstrap) {\nvar Alert = ReactBootstrap.Alert;\n...\n});")),c.default.createElement("h3",null,c.default.createElement(b.default,{id:"browser-globals"},"Browser globals")),c.default.createElement("p",null,"We provide ",c.default.createElement("code",null,"react-bootstrap.js")," and"," ",c.default.createElement("code",null,"react-bootstrap.min.js")," bundles with all components exported on the ",c.default.createElement("code",null,"window.ReactBootstrap")," object. These bundles are available on"," ",c.default.createElement("a",{href:"https://cdnjs.com/libraries/react-bootstrap"},"CDNJS"),", and in both the Bower and NPM packages."),c.default.createElement("pre",null,c.default.createElement("code",null,'\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>\n<script>\nvar Alert = ReactBootstrap.Alert;\n</script>'))),c.default.createElement("div",{className:"bs-docs-section"},c.default.createElement("h2",{className:"page-header"},c.default.createElement(b.default,{id:"browser-support"},"Browser support")),c.default.createElement("p",null,"We aim to support all browsers supported by both"," ",c.default.createElement("a",{href:"http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills"},"React")," ","and"," ",c.default.createElement("a",{href:"http://getbootstrap.com/getting-started/#support"},"Bootstrap"),"."),c.default.createElement("p",null,"Unfortunately, due to the lack of resources and the will of dedicating the efforts to modern browsers and getting closer to Bootstrap's features, we will not be testing"," ",c.default.createElement("code",null,"react-bootstrap")," against IE8 anymore.",c.default.createElement("br",null),"We will however continue supporting IE8 as long as people submit PRs addressing compatibility issues with it."),c.default.createElement("p",null,"React requires"," ",c.default.createElement("a",{href:"http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills"},"polyfills for non-ES5 capable browsers.")),c.default.createElement("div",{className:"highlight"},c.default.createElement("pre",null,c.default.createElement("code",null,'\n<!--[if lt IE 9]>\n<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>\n<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>\n<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>\n<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>\n<![endif]-->')))))},t}(c.default.Component);t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-getting-started-introduction-js-5f8f85ce82e310b202ea.js.map