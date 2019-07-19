import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true
    };

    this.hide = this.hide.bind(this);
    this.unhide = this.unhide.bind(this);
  }

  hide() {
    if (!this.state.hide) {
      this.setState({ hide: true });
    }
  }

  unhide() {
    if (this.state.hide) {
      setTimeout(() => {
        this.setState({ hide: false });
      }, 100);
    }
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();

    headroom.onTop = this.hide;
    headroom.onNotTop = this.unhide;
  }
  render() {
    let { hide } = this.state;

    hide = this.props.landing ? hide : false;

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand
                className={`mr-lg-5 ${hide ? "d-none" : ""}`}
                to="/"
                tag={Link}
              >
                <img alt="..." src={require("assets/img/logoSmall.svg")} />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/logoWhite.svg")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://web.facebook.com/izradamaskica/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-icon"
                      color="danger"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-shopping-cart mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Webshop</span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
