webpackJsonp(["component---src-pages-utilities-transitions-js"],{"./node_modules/babel-loader/lib/index.js??ref--0-0!./src/pages/utilities/transitions.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e.data;return s.a.createElement("div",{className:"bs-docs-section"},s.a.createElement("h2",{className:"page-header"},s.a.createElement(o.a,{id:"transitions"},"Transitions")," ",s.a.createElement("small",null,"Collapse, Fade")),s.a.createElement("p",null,"Transition components animate their children transitioning in and out."),s.a.createElement("h3",null,s.a.createElement(o.a,{id:"transitions-collapse"},"Collapse")),s.a.createElement("p",null,"Add a collapse toggle animation to an element or component."),s.a.createElement("div",{className:"bs-callout bs-callout-info"},s.a.createElement("h4",null,"Smoothing animations"),s.a.createElement("p",null,"If you're noticing choppy animations, and the component that's being collapsed has non-zero margin or padding, try wrapping the contents of your ",s.a.createElement("code",null,"<Collapse>")," inside a node with no margin or padding, like the ",s.a.createElement("code",null,"<div>")," in the example below. This will allow the height to be computed properly, so the animation can proceed smoothly.")),s.a.createElement(r.a,{codeText:p.a}),s.a.createElement("h4",null,s.a.createElement(o.a,{id:"transitions-collapse-props"},"Props")),s.a.createElement(l.a,{metadata:n.Collapse}),s.a.createElement("h3",null,s.a.createElement(o.a,{id:"transitions-fade"},"Fade")),s.a.createElement("p",null,"Add a fade animation to a child element or component."),s.a.createElement(r.a,{codeText:c.a}),s.a.createElement("h4",null,s.a.createElement(o.a,{id:"transitions-fade-props"},"Props")),s.a.createElement(l.a,{metadata:n.Fade}))},t.d(n,"query",function(){return m});var a=t("./node_modules/react/index.js"),s=t.n(a),o=t("./src/components/Anchor.js"),l=t("./src/components/PropTable.js"),r=t("./src/components/ReactPlayground.js"),i=t("./src/examples/Fade.js"),c=t.n(i),d=t("./src/examples/Collapse.js"),p=t.n(d);var m="** extracted graphql fragment **"},"./src/examples/Collapse.js":function(e,n){e.exports="class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      open: false\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={() => this.setState({ open: !this.state.open })}>\n          click\n        </Button>\n        <Collapse in={this.state.open}>\n          <div>\n            <Well>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Well>\n          </div>\n        </Collapse>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n"},"./src/examples/Fade.js":function(e,n){e.exports="class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      open: false\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={() => this.setState({ open: !this.state.open })}>\n          click\n        </Button>\n        <Fade in={this.state.open}>\n          <div>\n            <Well>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Well>\n          </div>\n        </Fade>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n"}});
//# sourceMappingURL=component---src-pages-utilities-transitions-js-9d173a4f15d222831f3f.js.map