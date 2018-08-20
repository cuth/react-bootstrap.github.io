webpackJsonp([0xd9bfe23c3813],{451:function(e,t){"use strict";e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleClose() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    const popover = (\n      <Popover id="modal-popover" title="popover">\n        very popover. such engagement\n      </Popover>\n    );\n    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;\n\n    return (\n      <div>\n        <p>Click to get the full Modal experience!</p>\n\n        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal show={this.state.show} onHide={this.handleClose}>\n          <Modal.Header closeButton>\n            <Modal.Title>Modal heading</Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <h4>Text in a modal</h4>\n            <p>\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n            </p>\n\n            <h4>Popover in a modal</h4>\n            <p>\n              there is a{\' \'}\n              <OverlayTrigger overlay={popover}>\n                <a href="#popover">popover</a>\n              </OverlayTrigger>{\' \'}\n              here\n            </p>\n\n            <h4>Tooltips in a modal</h4>\n            <p>\n              there is a{\' \'}\n              <OverlayTrigger overlay={tooltip}>\n                <a href="#tooltip">tooltip</a>\n              </OverlayTrigger>{\' \'}\n              here\n            </p>\n\n            <hr />\n\n            <h4>Overflowing text to show scroll behavior</h4>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleClose}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n'},452:function(e,t){"use strict";e.exports='/**\n * You will want to include this bit of css\n *\n * .modal-container {\n *   position: relative;\n * }\n * .modal-container .modal, .modal-container .modal-backdrop {\n *   position: absolute;\n * }\n */\n\nclass Trigger extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleHide = this.handleHide.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleHide() {\n    this.setState({ show: false });\n  }\n  render() {\n    return (\n      <div className="modal-container" style={{ height: 200 }}>\n        <Button\n          bsStyle="primary"\n          bsSize="large"\n          onClick={() => this.setState({ show: true })}\n        >\n          Launch contained modal\n        </Button>\n\n        <Modal\n          show={this.state.show}\n          onHide={this.handleHide}\n          container={this}\n          aria-labelledby="contained-modal-title"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="contained-modal-title">\n              Contained Modal\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id\n            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleHide}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    );\n  }\n}\n\nrender(<Trigger />);\n'},453:function(e,t){"use strict";e.exports='class Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleHide = this.handleHide.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  handleHide() {\n    this.setState({ show: false });\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button bsStyle="primary" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal\n          {...this.props}\n          show={this.state.show}\n          onHide={this.handleHide}\n          dialogClassName="custom-modal"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="contained-modal-title-lg">\n              Modal heading\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <h4>Wrapped Text</h4>\n            <p>\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\n              facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum\n              dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis\n              laudantium quibusdam quidem corporis architecto veritatis. Ex\n              facilis minima beatae sunt perspiciatis placeat. Quasi corporis\n              odio eaque voluptatibus ratione magnam nulla? Amet cum maiores\n              consequuntur totam dicta! Inventore adipisicing vel vero odio modi\n              doloremque? Vitae porro impedit ea minima laboriosam quisquam\n              neque. Perspiciatis omnis obcaecati consequatur sunt deleniti\n              similique facilis sequi. Ipsum harum vitae modi reiciendis\n              officiis. Quas laudantium laudantium modi corporis nihil provident\n              consectetur omnis, natus nulla distinctio illum corporis. Sit ex\n              earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum\n              illum architecto aspernatur perspiciatis error fuga illum, tempora\n              harum earum, a dolores. Animi facilis inventore harum dolore\n              accusamus fuga provident molestiae eum! Odit dicta error dolorem\n              sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum\n              saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat\n              officia culpa sint! Beatae voluptates voluptatem excepturi\n              molestiae alias in tenetur beatae placeat architecto. Sit possimus\n              rerum fugiat sapiente aspernatur. Necessitatibus tempora animi\n              dicta perspiciatis tempora a velit in! Doloribus perspiciatis\n              doloribus suscipit nam earum. Deleniti veritatis eaque totam\n              assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus\n              eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur\n              alias ipsum repudiandae! Quia omnis quisquam dignissimos a\n              mollitia. Suscipit aspernatur eum maiores repellendus ipsum\n              doloribus alias voluptatum consequatur. Consectetur quibusdam\n              veniam quas tenetur necessitatibus repudiandae? Rem optio vel\n              alias neque optio sapiente quidem similique reiciendis tempore.\n              Illum accusamus officia cum enim minima eligendi consectetur nemo\n              veritatis nam nisi! Adipisicing nobis perspiciatis dolorum\n              adipisci soluta architecto doloremque voluptatibus omnis debitis\n              quas repellendus. Consequuntur assumenda illum commodi mollitia\n              asperiores? Quis aspernatur consequatur modi veritatis aliquid at?\n              Atque vel iure quos. Amet provident voluptatem amet aliquam\n              deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis\n              neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum\n              sed atque molestias debitis omnis! Sit sint repellendus deleniti\n              officiis distinctio. Impedit vel quos harum doloribus corporis.\n              Laborum ullam nemo quaerat reiciendis recusandae minima dicta\n              molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.\n              Amet exercitationem quasi velit inventore neque doloremque!\n              Consequatur neque dolorem vel impedit sunt voluptate. Amet quo\n              amet magni exercitationem libero recusandae possimus pariatur.\n              Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur\n              sit eligendi neque sunt soluta laudantium natus qui aperiam\n              quisquam consectetur consequatur sit sint a unde et. At voluptas\n              ut officiis esse totam quasi dolorem! Hic deserunt doloribus\n              repudiandae! Lorem quod ab nostrum asperiores aliquam ab id\n              consequatur, expedita? Tempora quaerat ex ea temporibus in tempore\n              voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda\n              ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!\n              Accusantium atque elit voluptate asperiores corrupti temporibus\n              mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis\n              id quos dolorum eaque suscipit magni delectus maxime. Sit odit\n              provident vel magnam quod. Possimus eligendi non corrupti tenetur\n              culpa accusantium quod quis. Voluptatum quaerat animi dolore\n              maiores molestias voluptate? Necessitatibus illo omnis laborum hic\n              enim minima! Similique. Dolor voluptatum reprehenderit nihil\n              adipisci aperiam voluptatem soluta magnam accusamus iste incidunt\n              tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo\n              animi ratione. Sunt odit similique doloribus temporibus\n              reiciendis! Ullam. Dolor dolores veniam animi sequi dolores\n              molestias voluptatem iure velit. Elit dolore quaerat incidunt enim\n              aut distinctio. Ratione molestiae laboriosam similique laboriosam\n              eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.\n            </p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleHide}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n'},454:function(e,t){"use strict";e.exports='class MySmallModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        bsSize="small"\n        aria-labelledby="contained-modal-title-sm"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Wrapped Text</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass MyLargeModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        bsSize="large"\n        aria-labelledby="contained-modal-title-lg"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Wrapped Text</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      smShow: false,\n      lgShow: false\n    };\n  }\n  render() {\n    let smClose = () => this.setState({ smShow: false });\n    let lgClose = () => this.setState({ lgShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          bsStyle="primary"\n          onClick={() => this.setState({ smShow: true })}\n        >\n          Launch small demo modal\n        </Button>\n        <Button\n          bsStyle="primary"\n          onClick={() => this.setState({ lgShow: true })}\n        >\n          Launch large demo modal\n        </Button>\n\n        <MySmallModal show={this.state.smShow} onHide={smClose} />\n        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n'},455:function(e,t){"use strict";e.exports='<div className="static-modal">\n  <Modal.Dialog>\n    <Modal.Header>\n      <Modal.Title>Modal title</Modal.Title>\n    </Modal.Header>\n\n    <Modal.Body>One fine body...</Modal.Body>\n\n    <Modal.Footer>\n      <Button>Close</Button>\n      <Button bsStyle="primary">Save changes</Button>\n    </Modal.Footer>\n  </Modal.Dialog>\n</div>;\n'},529:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.data;return l.default.createElement("div",{className:"bs-docs-section"},l.default.createElement("h2",{className:"page-header"},l.default.createElement(u.default,{id:"modals"},"Modals")," ",l.default.createElement("small",null,"Modal")),l.default.createElement("h3",null,l.default.createElement(u.default,{id:"modals-static"},"Static Markup")),l.default.createElement("p",null,"A modal dialog component"),l.default.createElement(h.default,{codeText:b.default}),l.default.createElement("h3",null,l.default.createElement(u.default,{id:"modals-live"},"Basic example")),l.default.createElement("p",null),l.default.createElement("p",null,"A modal with header, body, and set of actions in the footer. Use"," ",l.default.createElement("code",null,"<Modal/>")," in combination with other components to show or hide your Modal. The ",l.default.createElement("code",null,"<Modal/>"),' Component comes with a few convenient "sub components": ',l.default.createElement("code",null,"<Modal.Header/>"),","," ",l.default.createElement("code",null,"<Modal.Title/>"),", ",l.default.createElement("code",null,"<Modal.Body/>"),", and"," ",l.default.createElement("code",null,"<Modal.Footer/>"),", which you can use to build the Modal content."),l.default.createElement(h.default,{codeText:v.default}),l.default.createElement("div",{className:"bs-callout bs-callout-info"},l.default.createElement("h4",null,"Additional Import Options"),l.default.createElement("p",null,"The Modal Header, Title, Body, and Footer components are available as static properties the ",l.default.createElement("code",null,"<Modal/>")," component, but you can also, import them directly from the ",l.default.createElement("code",null,"/lib")," directory like:"," ",l.default.createElement("code",null,'require("react-bootstrap/lib/ModalHeader")'),".")),l.default.createElement("h3",null,l.default.createElement(u.default,{id:"modals-contained"},"Contained Modal")),l.default.createElement("p",null,"You will need to add the following css to your project and ensure that your container has the ",l.default.createElement("code",null,"modal-container")," class."),l.default.createElement("pre",null,l.default.DOM.code(null,".modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n")),l.default.createElement(h.default,{codeText:M.default}),l.default.createElement("h3",null,l.default.createElement(u.default,{id:"modal-default-sizing"},"Sizing modals using standard Bootstrap props")),l.default.createElement("p",null,'You can specify a bootstrap large or small modal by using the "bsSize" prop.'),l.default.createElement(h.default,{codeText:y.default}),l.default.createElement("h3",null,l.default.createElement(u.default,{id:"modal-custom-sizing"},"Sizing modals using custom CSS")),l.default.createElement("p",null,'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'),l.default.createElement(h.default,{codeText:S.default}),l.default.createElement("h3",null,l.default.createElement(u.default,{id:"modals-props"},"Props")),l.default.createElement("h4",null,l.default.createElement(u.default,{id:"modals-props-modal"},"Modal"),l.default.createElement(d.default,{component:t.Modal.displayName})),l.default.createElement(m.default,{metadata:t.Modal}),l.default.createElement("h4",null,l.default.createElement(u.default,{id:"modals-props-modal-dialog"},"Modal.Dialog"),l.default.createElement(d.default,{component:t.ModalDialog.displayName})),l.default.createElement(m.default,{metadata:t.ModalDialog}),l.default.createElement("h4",null,l.default.createElement(u.default,{id:"modals-props-modal-header"},"Modal.Header"),l.default.createElement(d.default,{component:t.ModalHeader.displayName})),l.default.createElement(m.default,{metadata:t.ModalHeader}),l.default.createElement("h4",null,l.default.createElement(u.default,{id:"modals-props-modal-title"},"Modal.Title"),l.default.createElement(d.default,{component:t.ModalTitle.displayName})),l.default.createElement(m.default,{metadata:t.ModalTitle}),l.default.createElement("h4",null,l.default.createElement(u.default,{id:"modals-props-modal-body"},"Modal.Body"),l.default.createElement(d.default,{component:t.ModalBody.displayName})),l.default.createElement(m.default,{metadata:t.ModalBody}),l.default.createElement("h4",null,l.default.createElement(u.default,{id:"modals-props-modal-footer"},"Modal.Footer"),l.default.createElement(d.default,{component:t.ModalFooter.displayName})),l.default.createElement(m.default,{metadata:t.ModalFooter}))}t.__esModule=!0,t.query=void 0,t.default=o;var i=n(1),l=a(i),s=n(12),u=a(s),r=n(17),d=a(r),c=n(14),m=a(c),p=n(13),h=a(p),f=n(455),b=a(f),g=n(451),v=a(g),q=n(452),M=a(q),E=n(454),y=a(E),C=n(453),S=a(C);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-components-modal-js-6a34219d735bf0ffab28.js.map