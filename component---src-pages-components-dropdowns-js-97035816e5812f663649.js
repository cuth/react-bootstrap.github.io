webpackJsonp([0x91e0e8038d2d],{409:function(e,t){"use strict";e.exports="const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];\n\nfunction renderDropdownButton(title, i) {\n  return (\n    <DropdownButton\n      bsStyle={title.toLowerCase()}\n      title={title}\n      key={i}\n      id={`dropdown-basic-${i}`}\n    >\n      <MenuItem eventKey=\"1\">Action</MenuItem>\n      <MenuItem eventKey=\"2\">Another action</MenuItem>\n      <MenuItem eventKey=\"3\" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey=\"4\">Separated link</MenuItem>\n    </DropdownButton>\n  );\n}\n\nconst buttonsInstance = (\n  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>\n);\n\nrender(buttonsInstance);\n"},410:function(e,t){"use strict";e.exports='<ButtonToolbar>\n  <Dropdown id="dropdown-custom-1">\n    <Dropdown.Toggle>\n      <Glyphicon glyph="star" />\n      Pow! Zoom!\n    </Dropdown.Toggle>\n    <Dropdown.Menu className="super-colors">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown id="dropdown-custom-2">\n    <Button bsStyle="info">mix it up style-wise</Button>\n    <Dropdown.Toggle bsStyle="success" />\n    <Dropdown.Menu className="super-colors">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </Dropdown.Menu>\n  </Dropdown>\n</ButtonToolbar>;\n'},411:function(e,t){"use strict";e.exports='class CustomToggle extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(e) {\n    e.preventDefault();\n\n    this.props.onClick(e);\n  }\n\n  render() {\n    return (\n      <a href="" onClick={this.handleClick}>\n        {this.props.children}\n      </a>\n    );\n  }\n}\n\nclass CustomMenu extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: \'\'\n    };\n  }\n\n  handleChange(e) {\n    this.setState({ value: e.target.value });\n  }\n\n  focusNext() {\n    const input = ReactDOM.findDOMNode(this.input);\n\n    if (input) {\n      input.focus();\n    }\n  }\n\n  render() {\n    const { children } = this.props;\n    const { value } = this.state;\n\n    return (\n      <div className="dropdown-menu" style={{ padding: \'\' }}>\n        <FormControl\n          ref={c => {\n            this.input = c;\n          }}\n          type="text"\n          placeholder="Type to filter..."\n          onChange={this.handleChange}\n          value={value}\n        />\n        <ul className="list-unstyled">\n          {React.Children.toArray(children).filter(\n            child => !value.trim() || child.props.children.indexOf(value) !== -1\n          )}\n        </ul>\n      </div>\n    );\n  }\n}\n\nrender(\n  <Dropdown id="dropdown-custom-menu">\n    <CustomToggle bsRole="toggle">Custom toggle</CustomToggle>\n\n    <CustomMenu bsRole="menu">\n      <MenuItem eventKey="1">Red</MenuItem>\n      <MenuItem eventKey="2">Blue</MenuItem>\n      <MenuItem eventKey="3" active>\n        Orange\n      </MenuItem>\n      <MenuItem eventKey="1">Red-Orange</MenuItem>\n    </CustomMenu>\n  </Dropdown>\n);\n'},412:function(e,t){"use strict";e.exports='<ButtonToolbar>\n  <DropdownButton\n    bsStyle="default"\n    title="No caret"\n    noCaret\n    id="dropdown-no-caret"\n  >\n    <MenuItem eventKey="1">Action</MenuItem>\n    <MenuItem eventKey="2">Another action</MenuItem>\n    <MenuItem eventKey="3">Something else here</MenuItem>\n    <MenuItem divider />\n    <MenuItem eventKey="4">Separated link</MenuItem>\n  </DropdownButton>\n</ButtonToolbar>;\n'},413:function(e,t){"use strict";e.exports='<div>\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="large"\n      title="Large button"\n      id="dropdown-size-large"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton title="Default button" id="dropdown-size-medium">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="small"\n      title="Small button"\n      id="dropdown-size-small"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="xsmall"\n      title="Extra small button"\n      id="dropdown-size-extra-small"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n</div>;\n'},441:function(e,t){"use strict";e.exports='function onSelectAlert(eventKey) {\n  alert(`Alert from menu item.\\neventKey: ${eventKey}`);\n}\n\nconst MenuItems = (\n  <Clearfix>\n    <ul className="dropdown-menu open">\n      <MenuItem header>Header</MenuItem>\n      <MenuItem>link</MenuItem>\n      <MenuItem divider />\n      <MenuItem header>Header</MenuItem>\n      <MenuItem>link</MenuItem>\n      <MenuItem disabled>disabled</MenuItem>\n      <MenuItem title="See? I have a title.">link with title</MenuItem>\n      <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>\n        link that alerts\n      </MenuItem>\n    </ul>\n  </Clearfix>\n);\n\nrender(MenuItems);\n'},485:function(e,t){"use strict";e.exports="const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];\n\nfunction renderDropdownButton(title, i) {\n  return (\n    <SplitButton\n      bsStyle={title.toLowerCase()}\n      title={title}\n      key={i}\n      id={`split-button-basic-${i}`}\n    >\n      <MenuItem eventKey=\"1\">Action</MenuItem>\n      <MenuItem eventKey=\"2\">Another action</MenuItem>\n      <MenuItem eventKey=\"3\">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey=\"4\">Separated link</MenuItem>\n    </SplitButton>\n  );\n}\n\nconst buttonsInstance = (\n  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>\n);\n\nrender(buttonsInstance);\n"},486:function(e,t){"use strict";e.exports='<div>\n  <ButtonToolbar>\n    <SplitButton title="Dropup" dropup id="split-button-dropup">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <SplitButton\n      bsStyle="primary"\n      title="Right dropup"\n      dropup\n      pullRight\n      id="split-button-dropup-pull-right"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  </ButtonToolbar>\n</div>;\n'},487:function(e,t){"use strict";e.exports='<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">\n  <MenuItem eventKey="1">Action</MenuItem>\n  <MenuItem eventKey="2">Another action</MenuItem>\n  <MenuItem eventKey="3">Something else here</MenuItem>\n  <MenuItem divider />\n  <MenuItem eventKey="4">Separated link</MenuItem>\n</SplitButton>;\n'},513:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.data;return a.default.createElement("div",{className:"bs-docs-section"},a.default.createElement("h2",{className:"page-header"},a.default.createElement(d.default,{id:"btn-dropdowns"},"Dropdowns")," ",a.default.createElement("small",null,"DropdownButton, SplitButton, Dropdown")),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-single"},"Single button dropdowns")),a.default.createElement("p",null,"Create a dropdown button with the ",a.default.createElement("code",null,"<DropdownButton />")," ","component."),a.default.createElement(f.default,{codeText:M.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-split"},"Split button dropdowns")),a.default.createElement("p",null,"Similarly, create split button dropdowns with the"," ",a.default.createElement("code",null,"<SplitButton />")," component."),a.default.createElement(f.default,{codeText:v.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-sizing"},"Sizing")),a.default.createElement("p",null,"Dropdowns work with buttons of all sizes."),a.default.createElement(f.default,{codeText:y.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-nocaret"},"No caret variation")),a.default.createElement("p",null,"Remove the caret using the ",a.default.createElement("code",null,"noCaret")," prop."),a.default.createElement(f.default,{codeText:b.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-dropup"},"Dropup variation")),a.default.createElement("p",null,"Trigger dropdown menus that site above the button by adding the"," ",a.default.createElement("code",null,"dropup")," prop."),a.default.createElement(f.default,{codeText:B.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-right"},"Dropdown right variation")),a.default.createElement("p",null,"Trigger dropdown menus that align to the right of the button using the"," ",a.default.createElement("code",null,"pullRight")," prop."),a.default.createElement(f.default,{codeText:S.default}),a.default.createElement("h2",{className:"page-header"},a.default.createElement(d.default,{id:"menu-items"},"Menu items")," ",a.default.createElement("small",null,"MenuItem")),a.default.createElement("p",null,"This component represents a menu item in a dropdown."),a.default.createElement("p",null,"It supports the basic anchor properties ",a.default.createElement("code",null,"href"),","," ",a.default.createElement("code",null,"target"),", ",a.default.createElement("code",null,"title"),"."),a.default.createElement("p",null,"It also supports different properties of the normal Bootstrap MenuItem."),a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement("code",null,"header"),": To add a header label to sections"),a.default.createElement("li",null,a.default.createElement("code",null,"divider"),": Adds an horizontal divider between sections"),a.default.createElement("li",null,a.default.createElement("code",null,"disabled"),": shows the item as disabled, and prevents"," ",a.default.createElement("code",null,"onSelect")," from firing"),a.default.createElement("li",null,a.default.createElement("code",null,"eventKey"),": passed to the callback"),a.default.createElement("li",null,a.default.createElement("code",null,"onSelect"),": a callback that is called when the user clicks the item.")),a.default.createElement("p",null,"The callback is called with the following arguments:"," ",a.default.createElement("code",null,"eventKey")," and ",a.default.createElement("code",null,"event")),a.default.createElement(f.default,{codeText:k.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-custom"},"Dropdown Customization")),a.default.createElement("p",null,"If the default handling of the dropdown menu and toggle components aren't to your liking, you can customize them, by using the more basic"," ",a.default.createElement("code",null,"Dropdown")," Component to explicitly specify the Toggle and Menu components"),a.default.createElement("div",{className:"bs-callout bs-callout-info"},a.default.createElement("h4",null,"Additional Import Options"),a.default.createElement("p",null,"As a convenience Toggle and Menu components available as static properties on the Dropdown component. However, you can also import them directly, from the ",a.default.createElement("code",null,"/lib")," directory like:"," ",a.default.createElement("code",null,'require("react-bootstrap/lib/DropdownToggle")'),".")),a.default.createElement(f.default,{codeText:T.default}),a.default.createElement("h4",null,"Custom Dropdown Components"),a.default.createElement("p",null,"For those that want to customize everything, you can forgo the included Toggle and Menu components, and create your own. In order to tell the Dropdown component what role your custom components play, add a special prop ",a.default.createElement("code",null,"bsRole")," to your menu or toggle components. The Dropdown expects at least one component with ",a.default.createElement("code",null,'bsRole="toggle"')," and exactly one with ",a.default.createElement("code",null,'bsRole="menu"'),". Custom toggle and menu components must be able to accept refs."),a.default.createElement("div",{className:"bs-callout bs-callout-warning"},a.default.createElement("h4",null,"Using ",a.default.createElement("code",null,"rootCloseEvent")," with custom dropdown components"),a.default.createElement("p",null,"If you want to use the ",a.default.createElement("code",null,"rootCloseEvent")," prop with your custom dropdown components, you will have to pass the"," ",a.default.createElement("code",null,"rootCloseEvent")," to ",a.default.createElement("code",null,"<RootCloseWrapper>")," in your custom dropdown menu component"," ",a.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119"},"similarly to how it is implemented in"," ",a.default.createElement("code",null,"<Dropdown.Menu>")),"."),a.default.createElement("p",null,"You will have to add ",a.default.createElement("code",null,"react-overlays")," as a dependency and import ",a.default.createElement("code",null,"<RootCloseWrapper>")," from"," ",a.default.createElement("code",null,"react-overlays")," yourself like:"," ",a.default.createElement("code",null,"import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper'"),".")),a.default.createElement(f.default,{codeText:x.default}),a.default.createElement("h3",null,a.default.createElement(d.default,{id:"btn-dropdowns-props"},"Props")),a.default.createElement("h4",null,a.default.createElement(d.default,{id:"btn-dropdowns-props-dropdown-button"},"DropdownButton"),a.default.createElement(m.default,{component:t.DropdownButton.displayName})),a.default.createElement(s.default,{metadata:t.DropdownButton}),a.default.createElement("h4",null,a.default.createElement(d.default,{id:"btn-dropdowns-props-split"},"SplitButton"),a.default.createElement(m.default,{component:t.SplitButton.displayName})),a.default.createElement(s.default,{metadata:t.SplitButton}),a.default.createElement("h4",null,a.default.createElement(d.default,{id:"btn-dropdowns-props-dropdown"},"Dropdown"),a.default.createElement(m.default,{component:t.Dropdown.displayName})),a.default.createElement(s.default,{metadata:t.Dropdown}),a.default.createElement("h4",null,a.default.createElement(d.default,{id:"menu-item-props"},"Menu Item"),a.default.createElement(m.default,{component:t.MenuItem.displayName})),a.default.createElement(s.default,{metadata:t.MenuItem}))}t.__esModule=!0,t.query=void 0,t.default=o;var u=n(1),a=l(u),r=n(12),d=l(r),i=n(17),m=l(i),c=n(14),s=l(c),p=n(13),f=l(p),h=n(409),M=l(h),I=n(485),v=l(I),w=n(413),y=l(w),E=n(412),b=l(E),g=n(486),B=l(g),D=n(487),S=l(D),K=n(410),T=l(K),C=n(411),x=l(C),A=n(441),k=l(A);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-dropdowns-js-97035816e5812f663649.js.map