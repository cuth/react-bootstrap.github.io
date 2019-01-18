(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y}),n.d(t,"_frontmatter",function(){return E});var a=n(54),r=n.n(a),o=n(0),i=n.n(o),l=n(122),c=n(306),s=n(302),d=n(319),p=n(772),u=n.n(p),m=n(773),g=n.n(m),f=n(774),b=n.n(f),v=n(775),h=n.n(v),y="810844139";t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(l.MDXTag,{name:"h1",components:t,props:{id:"badges"}},"Badges"),i.a.createElement(l.MDXTag,{name:"p",components:t},"Badges scale to match the size of the immediate parent element by\nusing relative font sizing and em units."),i.a.createElement(d.a,{codeText:u.a}),i.a.createElement(l.MDXTag,{name:"p",components:t},"Badges can be used as part of links or buttons to provide a counter."),i.a.createElement(d.a,{codeText:g.a}),i.a.createElement(l.MDXTag,{name:"p",components:t},"Note that depending on how they are used, badges may be confusing for\nusers of screen readers and similar assistive technologies. While the\nstyling of badges provides a visual cue as to their purpose, these users\nwill simply be presented with the content of the badge. Depending on the\nspecific situation, these badges may seem like random additional words or\nnumbers at the end of a sentence, link, or button. Unless the context is\nclear, consider including additional context with a visually hidden piece\nof additional text. ## Contextual variations Add any of the below\nmentioned modifier classes to change the appearance of a badge."),i.a.createElement(d.a,{codeText:h.a}),i.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"pill"}},"Pill"),i.a.createElement(l.MDXTag,{name:"p",components:t},"badges Use the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"pill")," modifier class to make badges more rounded\n(with a larger ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"border-radius")," and additional horizontal ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"padding"),").\nUseful if you miss the badges from v3."),i.a.createElement(d.a,{codeText:b.a}),i.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),i.a.createElement(s.a,{metadata:n.data.metadata}))};var E={}},270:function(e,t,n){var a=n(12).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(13)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},277:function(e){e.exports={name:"react-bootstrap",version:"0.32.4",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js","jsnext:main":"es/index.js",module:"es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",start:"yarn --cwd www run develop","ci-lint":"eslint --rule 'prettier/prettier: 2'",format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"npm run build-docs && rollout",tdd:"karma start",test:"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --compilers js:@babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:"^0.14.9 || >=15.3.0","react-dom":"^0.14.9 || >=15.3.0"},devDependencies:{"@4c/rollout":"^1.1.0","@babel/cli":"^7.0.0","@babel/core":"^7.0.0","@babel/plugin-proposal-class-properties":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-transform-runtime":"^7.0.0","@babel/preset-env":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@storybook/react":"^3.4.8","babel-core":"^7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.0.1",chai:"^4.1.2",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.2","create-react-class":"^15.6.3","cross-env":"^5.2.0",enzyme:"^3.6.0","enzyme-adapter-react-16":"^1.5.0",eslint:"^5.5.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^2.6.2","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.0",husky:"^0.14.3",karma:"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.4","lint-staged":"^7.2.0",lodash:"^4.17.10",mocha:"^5.2.0",prettier:"~1.13.7",react:"^16.5.0","react-dom":"^16.5.0","react-test-renderer":"^16.5.0","release-script":"^1.0.2",sinon:"^6.2.0","sinon-chai":"^3.2.0",webpack:"^4.17.2"},dependencies:{"@babel/runtime":"^7.0.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.2.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.3","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^1.2.1","react-overlays":"^1.0.0-beta.17","react-prop-types":"^0.4.0","react-transition-group":"^2.4.0",uncontrollable:"^6.0.0",warning:"^4.0.1"},"release-script":{bowerRepo:"git@github.com:react-bootstrap/react-bootstrap-bower.git",docsRepo:"git@github.com:react-bootstrap/react-bootstrap.github.io.git",docsRoot:"www/public/"}}},278:function(e,t,n){var a=n(116)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},279:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},281:function(e,t,n){"use strict";n(282)("trim",function(e){return function(){return e(this,3)}})},282:function(e,t,n){var a=n(5),r=n(28),o=n(10),i=n(283),l="["+i+"]",c=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),d=function(e,t,n){var r={},l=o(function(){return!!i[e]()||"​"!="​"[e]()}),c=r[e]=l?t(p):i[e];n&&(r[n]=c),a(a.P+a.F*l,"String",r)},p=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e};e.exports=d},283:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},284:function(e,t,n){var a=n(316),r=n(285),o=n(292),i=n(293),l=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&i(e,t[0],t[1])?t=[]:n>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])});e.exports=l},285:function(e,t,n){var a=n(115),r=n(309),o=n(286),i=n(289),l=n(311),c=n(290),s=n(276);e.exports=function(e,t,n){var d=-1;t=a(t.length?t:[s],l(r));var p=o(e,function(e,n,r){return{criteria:a(t,function(t){return t(e)}),index:++d,value:e}});return i(p,function(e,t){return c(e,t,n)})}},286:function(e,t,n){var a=n(287),r=n(269);e.exports=function(e,t){var n=-1,o=r(e)?Array(e.length):[];return a(e,function(e,a,r){o[++n]=t(e,a,r)}),o}},287:function(e,t,n){var a=n(312),r=n(288)(a);e.exports=r},288:function(e,t,n){var a=n(269);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!a(n))return e(n,r);for(var o=n.length,i=t?o:-1,l=Object(n);(t?i--:++i<o)&&!1!==r(l[i],i,l););return n}}},289:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},290:function(e,t,n){var a=n(291);e.exports=function(e,t,n){for(var r=-1,o=e.criteria,i=t.criteria,l=o.length,c=n.length;++r<l;){var s=a(o[r],i[r]);if(s)return r>=c?s:s*("desc"==n[r]?-1:1)}return e.index-t.index}},291:function(e,t,n){var a=n(114);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e==e,i=a(e),l=void 0!==t,c=null===t,s=t==t,d=a(t);if(!c&&!d&&!i&&e>t||i&&l&&s&&!c&&!d||r&&l&&s||!n&&s||!o)return 1;if(!r&&!i&&!d&&e<t||d&&n&&o&&!r&&!i||c&&n&&o||!l&&o||!s)return-1}return 0}},292:function(e,t,n){var a=n(276),r=n(317),o=n(318);e.exports=function(e,t){return o(r(e,t,a),e+"")}},293:function(e,t,n){var a=n(310),r=n(269),o=n(313),i=n(305);e.exports=function(e,t,n){if(!i(n))return!1;var l=typeof t;return!!("number"==l?r(n)&&o(t,n.length):"string"==l&&t in n)&&a(n[t],e)}},294:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},296:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},298:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},300:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},302:function(e,t,n){"use strict";n(119),n(270);var a=n(278),r=n.n(a),o=n(0),i=n.n(o),l=n(17),c=n(53),s=n(80),d=n(307),p=n(308),u=n(277),m=Object(l.styled)("a","Link",n(279),"link","link"),g=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+u.version+"/src/"+t+".js";return i.a.createElement(d.a,{overlay:i.a.createElement(p.a,{id:"view-"+t+"-source-tooltip"},"View source file")},i.a.createElement(m,{href:n},i.a.createElement("i",{className:"fas fa-code"}),i.a.createElement("span",{className:"sr-only"},"view source file")))},f=(n(79),n(118),n(117),n(52),n(78),n(7)),b=n.n(f),v=(n(281),n(29),n(284)),h=n.n(v),y=n(120),E=n.n(y),x=n(2),w=n.n(x),B=n(314),k=n(315),N=Object(l.styled)("code","Code",n(294),"code","code"),T=Object(l.styled)("div","PropDescription",n(296),"prop-description","propDescription");function D(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function j(e){return"func"===e?"function":"bool"===e?"boolean":e}var C=function(e){function t(){return e.apply(this,arguments)||this}b()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=j(n.name),r=e.doclets||{};switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,r){var o=t.getType({type:n});return i.a.isValidElement(o)&&(o=i.a.cloneElement(o,{key:a})),e=e.concat(o),a===r.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:n.value});return i.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(n);case"custom":return D(r.type||n.raw);default:return a}},n._renderRows=function(e){var t=this;return h()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,r=e.doclets,o=a&&a.childMarkdownRemark.html;return i.a.createElement("tr",{key:n,className:"prop-table-row"},i.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),i.a.createElement("td",{className:"text-monospace"},i.a.createElement("div",null,t.getType(e))),i.a.createElement("td",null,t.renderDefaultValue(e)),i.a.createElement("td",null,r.deprecated&&i.a.createElement("div",{className:"mb-1"},i.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),t.renderControllableNote(e,n),i.a.createElement(T,{dangerouslySetInnerHTML:{__html:o}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=j(t.name),a=e.doclets||{};return"custom"===n?D(a.type||t.raw):n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),i.a.createElement(N,null,t))},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,a="function"===j(e.type.name);if(!n)return!1;var r=a?i.a.createElement("span",null,"controls ",i.a.createElement("code",null,n)):i.a.createElement("span",null,"controlled by: ",i.a.createElement(N,null,n),", initial prop:"," ",i.a.createElement(N,null,"default"+E()(t)));return i.a.createElement("div",{className:"mb-2"},i.a.createElement("small",null,i.a.createElement("em",{className:"text-info"},r)))},n.renderEnum=function(e){var t=[];return(e.value||[]).forEach(function(e,n){var a=e.value;n>0&&t.push(i.a.createElement("span",{key:n+"c"}," | ")),t.push(i.a.createElement("code",{key:n},a))}),i.a.createElement("span",null,t)},n.renderRequiredBadge=function(e){return e.required?i.a.createElement(B.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?i.a.createElement(k.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Default"),i.a.createElement("th",null,"Description"))),i.a.createElement("tbody",null,this._renderRows(e))):i.a.createElement("div",{className:"text-muted"},i.a.createElement("em",null,"There are no public props for this component."))},t}(i.a.Component);C.propTypes={metadata:w.a.object.isRequired};var M=C,R=Object(l.styled)("span","Keyword",n(298),"keyword","keyword"),z=Object(l.styled)("code","Code",n(300),"code","code"),L=function(e){var t=e.name;return i.a.createElement(z,{"aria-label":"Import code for the "+t+" component"},i.a.createElement(R,null,"import")," ",t," ",i.a.createElement(R,null,"from")," ","'react-bootstrap/lib/",t,"'")};function P(e){var t=e.heading,n=e.metadata,a=e.exportedBy,o=n.description,l=n.displayName,d=o&&o.childMarkdownRemark.html,p=l;a&&(l=a.displayName+"."+l.split(a.displayName).pop(),p=a.displayName);var u=r()(l)+"-props";return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.default,{h:t||"3",id:u,title:l,className:"my-3"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(s.a,{target:u},i.a.createElement("span",{className:" text-monospace"},l)),i.a.createElement("span",{className:"ml-auto"}),i.a.createElement(g,{component:l}))),i.a.createElement(L,{name:p}),d&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}}),i.a.createElement(M,{metadata:n}))}P.propTypes={},t.a=P},772:function(e,t){e.exports='<div>\n  <h1>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h1>\n  <h2>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h2>\n  <h3>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h3>\n  <h4>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h4>\n  <h5>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h5>\n  <h6>\n    Example heading <Badge variant="secondary">New</Badge>\n  </h6>\n</div>;\n'},773:function(e,t){e.exports='<Button variant="primary">\n  Profile <Badge variant="light">9</Badge>\n  <span className="sr-only">unread messages</span>\n</Button>;\n'},774:function(e,t){e.exports='<div>\n  <Badge pill variant="primary">\n    Primary\n  </Badge>\n  <Badge pill variant="secondary">\n    Secondary\n  </Badge>\n  <Badge pill variant="success">\n    Success\n  </Badge>\n  <Badge pill variant="danger">\n    Danger\n  </Badge>\n  <Badge pill variant="warning">\n    Warning\n  </Badge>\n  <Badge pill variant="info">\n    Info\n  </Badge>\n  <Badge pill variant="light">\n    Light\n  </Badge>\n  <Badge pill variant="dark">\n    Dark\n  </Badge>\n</div>;\n'},775:function(e,t){e.exports='<div>\n  <Badge variant="primary">Primary</Badge>\n  <Badge variant="secondary">Secondary</Badge>\n  <Badge variant="success">Success</Badge>\n  <Badge variant="danger">Danger</Badge>\n  <Badge variant="warning">Warning</Badge>\n  <Badge variant="info">Info</Badge>\n  <Badge variant="light">Light</Badge>\n  <Badge variant="dark">Dark</Badge>\n</div>;\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LS0tc3JjLXBhZ2VzLWNvbXBvbmVudHMtYmFkZ2UtbWR4LTI2NzE1MzAyZTQzMjYyZjJjOWYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvYmFkZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1EWFRhZyB9IGZyb20gJ0BtZHgtanMvdGFnJ1xuXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCIvVXNlcnMvamFzb24vc3JjL3JlYWN0LWJvb3RzdHJhcC93d3cvc3JjL2xheW91dHMvQXBpTGF5b3V0LmpzXCJcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IENvbXBvbmVudEFwaSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBvbmVudEFwaSc7XG5pbXBvcnQgUmVhY3RQbGF5Z3JvdW5kIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVhY3RQbGF5Z3JvdW5kJztcbmltcG9ydCBCYWRnZUJhc2ljIGZyb20gJy4uLy4uL2V4YW1wbGVzL0JhZGdlL0Jhc2ljJztcbmltcG9ydCBCYWRnZUJ1dHRvbiBmcm9tICcuLi8uLi9leGFtcGxlcy9CYWRnZS9CdXR0b24nO1xuaW1wb3J0IEJhZGdlUGlsbCBmcm9tICcuLi8uLi9leGFtcGxlcy9CYWRnZS9QaWxsJztcbmltcG9ydCBCYWRnZVZhcmlhdGlvbnMgZnJvbSAnLi4vLi4vZXhhbXBsZXMvQmFkZ2UvVmFyaWF0aW9ucyc7XG5leHBvcnQgY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBCYWRnZVF1ZXJ5IHtcbiAgICBtZXRhZGF0YTogY29tcG9uZW50TWV0YWRhdGEoZGlzcGxheU5hbWU6IHsgZXE6IFwiQmFkZ2VcIiB9KSB7XG4gICAgICBkaXNwbGF5TmFtZVxuICAgICAgLi4uQ29tcG9uZW50QXBpX21ldGFkYXRhXG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgKHtjb21wb25lbnRzLCAuLi5wcm9wc30pID0+IDxNRFhUYWcgbmFtZT1cIndyYXBwZXJcIiBMYXlvdXQ9e0RlZmF1bHRMYXlvdXR9IGxheW91dFByb3BzPXtwcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30+XG5cblxuXG48TURYVGFnIG5hbWU9XCJoMVwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHByb3BzPXt7XCJpZFwiOlwiYmFkZ2VzXCJ9fT57YEJhZGdlc2B9PC9NRFhUYWc+XG48TURYVGFnIG5hbWU9XCJwXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30+e2BCYWRnZXMgc2NhbGUgdG8gbWF0Y2ggdGhlIHNpemUgb2YgdGhlIGltbWVkaWF0ZSBwYXJlbnQgZWxlbWVudCBieVxudXNpbmcgcmVsYXRpdmUgZm9udCBzaXppbmcgYW5kIGVtIHVuaXRzLmB9PC9NRFhUYWc+XG48UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtCYWRnZUJhc2ljfSAvPlxuPE1EWFRhZyBuYW1lPVwicFwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PntgQmFkZ2VzIGNhbiBiZSB1c2VkIGFzIHBhcnQgb2YgbGlua3Mgb3IgYnV0dG9ucyB0byBwcm92aWRlIGEgY291bnRlci5gfTwvTURYVGFnPlxuPFJlYWN0UGxheWdyb3VuZCBjb2RlVGV4dD17QmFkZ2VCdXR0b259IC8+XG48TURYVGFnIG5hbWU9XCJwXCIgY29tcG9uZW50cz17Y29tcG9uZW50c30+e2BOb3RlIHRoYXQgZGVwZW5kaW5nIG9uIGhvdyB0aGV5IGFyZSB1c2VkLCBiYWRnZXMgbWF5IGJlIGNvbmZ1c2luZyBmb3JcbnVzZXJzIG9mIHNjcmVlbiByZWFkZXJzIGFuZCBzaW1pbGFyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMuIFdoaWxlIHRoZVxuc3R5bGluZyBvZiBiYWRnZXMgcHJvdmlkZXMgYSB2aXN1YWwgY3VlIGFzIHRvIHRoZWlyIHB1cnBvc2UsIHRoZXNlIHVzZXJzXG53aWxsIHNpbXBseSBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgY29udGVudCBvZiB0aGUgYmFkZ2UuIERlcGVuZGluZyBvbiB0aGVcbnNwZWNpZmljIHNpdHVhdGlvbiwgdGhlc2UgYmFkZ2VzIG1heSBzZWVtIGxpa2UgcmFuZG9tIGFkZGl0aW9uYWwgd29yZHMgb3Jcbm51bWJlcnMgYXQgdGhlIGVuZCBvZiBhIHNlbnRlbmNlLCBsaW5rLCBvciBidXR0b24uIFVubGVzcyB0aGUgY29udGV4dCBpc1xuY2xlYXIsIGNvbnNpZGVyIGluY2x1ZGluZyBhZGRpdGlvbmFsIGNvbnRleHQgd2l0aCBhIHZpc3VhbGx5IGhpZGRlbiBwaWVjZVxub2YgYWRkaXRpb25hbCB0ZXh0LiAjIyBDb250ZXh0dWFsIHZhcmlhdGlvbnMgQWRkIGFueSBvZiB0aGUgYmVsb3dcbm1lbnRpb25lZCBtb2RpZmllciBjbGFzc2VzIHRvIGNoYW5nZSB0aGUgYXBwZWFyYW5jZSBvZiBhIGJhZGdlLmB9PC9NRFhUYWc+XG48UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtCYWRnZVZhcmlhdGlvbnN9IC8+XG48TURYVGFnIG5hbWU9XCJoMlwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHByb3BzPXt7XCJpZFwiOlwicGlsbFwifX0+e2BQaWxsYH08L01EWFRhZz5cbjxNRFhUYWcgbmFtZT1cInBcIiBjb21wb25lbnRzPXtjb21wb25lbnRzfT57YGJhZGdlcyBVc2UgdGhlIGB9PE1EWFRhZyBuYW1lPVwiaW5saW5lQ29kZVwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHBhcmVudE5hbWU9XCJwXCI+e2BwaWxsYH08L01EWFRhZz57YCBtb2RpZmllciBjbGFzcyB0byBtYWtlIGJhZGdlcyBtb3JlIHJvdW5kZWRcbih3aXRoIGEgbGFyZ2VyIGB9PE1EWFRhZyBuYW1lPVwiaW5saW5lQ29kZVwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHBhcmVudE5hbWU9XCJwXCI+e2Bib3JkZXItcmFkaXVzYH08L01EWFRhZz57YCBhbmQgYWRkaXRpb25hbCBob3Jpem9udGFsIGB9PE1EWFRhZyBuYW1lPVwiaW5saW5lQ29kZVwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHBhcmVudE5hbWU9XCJwXCI+e2BwYWRkaW5nYH08L01EWFRhZz57YCkuXG5Vc2VmdWwgaWYgeW91IG1pc3MgdGhlIGJhZGdlcyBmcm9tIHYzLmB9PC9NRFhUYWc+XG48UmVhY3RQbGF5Z3JvdW5kIGNvZGVUZXh0PXtCYWRnZVBpbGx9IC8+XG48TURYVGFnIG5hbWU9XCJoMlwiIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHByb3BzPXt7XCJpZFwiOlwiYXBpXCJ9fT57YEFQSWB9PC9NRFhUYWc+XG48Q29tcG9uZW50QXBpIG1ldGFkYXRhPXtwcm9wcy5kYXRhLm1ldGFkYXRhfSAvPlxuPC9NRFhUYWc+XG5cbmV4cG9ydCBjb25zdCBfZnJvbnRtYXR0ZXIgPSB7fTtcblxuICAiXSwibWFwcGluZ3MiOiJBQVlBIiwic291cmNlUm9vdCI6IiJ9