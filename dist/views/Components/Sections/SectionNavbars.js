"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Face = _interopRequireDefault(require("@material-ui/icons/Face"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _Explore = _interopRequireDefault(require("@material-ui/icons/Explore"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Header = _interopRequireDefault(require("components/Header/Header.jsx"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.jsx"));

var _CustomDropdown = _interopRequireDefault(require("components/CustomDropdown/CustomDropdown.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _navbarsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx"));

var _bg = _interopRequireDefault(require("assets/img/bg.jpg"));

var _avatar = _interopRequireDefault(require("assets/img/faces/avatar.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SectionNavbars =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionNavbars, _React$Component);

  function SectionNavbars() {
    _classCallCheck(this, SectionNavbars);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionNavbars).apply(this, arguments));
  }

  _createClass(SectionNavbars, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Menu")), _react.default.createElement(_Header.default, {
        brand: "Menu",
        color: "primary",
        leftLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Link")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Link")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_CustomDropdown.default, {
          buttonText: "Dropdown",
          dropdownHeader: "Dropdown Header",
          buttonProps: {
            className: classes.navLink,
            color: "transparent"
          },
          dropdownList: ["Action", "Another action", "Something else here", {
            divider: true
          }, "Separated link", {
            divider: true
          }, "One more separated link"]
        })))
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Menu with Icons")), _react.default.createElement(_Header.default, {
        brand: "Icons",
        color: "info",
        rightLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          color: "transparent",
          className: classes.navLink
        }, _react.default.createElement(_Email.default, {
          className: classes.icons
        }))), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          color: "transparent",
          className: classes.navLink
        }, _react.default.createElement(_Face.default, {
          className: classes.icons
        }))), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_CustomDropdown.default, {
          left: true,
          hoverColor: "info",
          dropdownHeader: "Dropdown Header",
          buttonIcon: "settings",
          buttonProps: {
            className: classes.navLink,
            color: "transparent"
          },
          dropdownList: ["Action", "Another action", "Something else here", {
            divider: true
          }, "Separated link", {
            divider: true
          }, "One more separated link"]
        })))
      }))), _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Navigation"))), _react.default.createElement("div", {
        id: "navbar",
        className: classes.navbar
      }, _react.default.createElement("div", {
        className: classes.navigation,
        style: {
          backgroundImage: "url(" + _bg.default + ")"
        }
      }, _react.default.createElement(_Header.default, {
        brand: "Brand",
        color: "rose",
        leftLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Link")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Link"))),
        rightLinks: _react.default.createElement("div", null, _react.default.createElement(_CustomInput.default, {
          white: true,
          inputRootCustomClasses: classes.inputRootCustomClasses,
          formControlProps: {
            className: classes.formControl
          },
          inputProps: {
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput
            }
          }
        }), _react.default.createElement(_Button.default, {
          justIcon: true,
          round: true,
          color: "white"
        }, _react.default.createElement(_Search.default, {
          className: classes.searchIcon
        })))
      }), _react.default.createElement(_Header.default, {
        brand: "Info Color",
        color: "info",
        rightLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink + " " + classes.navLinkActive,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Discover")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Profile")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Settings")))
      }), _react.default.createElement(_Header.default, {
        brand: "Primary Color",
        color: "primary",
        rightLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink + " " + classes.navLinkActive,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, _react.default.createElement(_Explore.default, {
          className: classes.icons
        }), " Discover")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, _react.default.createElement(_AccountCircle.default, {
          className: classes.icons
        }), " Profile")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, _react.default.createElement(_Icon.default, {
          className: classes.icons
        }, "settings"), " Settings")))
      }), _react.default.createElement(_Header.default, {
        brand: "Navbar with notifications",
        color: "dark",
        rightLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Discover")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Wishlist")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          justIcon: true,
          round: true,
          href: "#pablo",
          className: classes.notificationNavLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "rose"
        }, _react.default.createElement(_Email.default, {
          className: classes.icons
        }))), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_CustomDropdown.default, {
          left: true,
          caret: false,
          hoverColor: "black",
          dropdownHeader: "Dropdown Header",
          buttonText: _react.default.createElement("img", {
            src: _avatar.default,
            className: classes.img,
            alt: "profile"
          }),
          buttonProps: {
            className: classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent"
          },
          dropdownList: ["Me", "Settings and other stuff", "Sign out"]
        })))
      }), _react.default.createElement(_Header.default, {
        brand: "Navbar with profile",
        rightLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Discover")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.navLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "transparent"
        }, "Wishlist")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          href: "#pablo",
          className: classes.registerNavLink,
          onClick: function onClick(e) {
            return e.preventDefault();
          },
          color: "rose",
          round: true
        }, "Register")))
      }), _react.default.createElement(_Header.default, {
        brand: "Transparent",
        color: "transparent",
        rightLinks: _react.default.createElement(_List.default, {
          className: classes.list
        }, _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          color: "transparent",
          className: classes.navLink + " " + classes.socialIconsButton
        }, _react.default.createElement("i", {
          className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
        }), " ", "Twitter")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          color: "transparent",
          className: classes.navLink + " " + classes.socialIconsButton
        }, _react.default.createElement("i", {
          className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
        }), " ", "Facebook")), _react.default.createElement(_ListItem.default, {
          className: classes.listItem
        }, _react.default.createElement(_Button.default, {
          color: "transparent",
          className: classes.navLink + " " + classes.socialIconsButton
        }, _react.default.createElement("i", {
          className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
        }), " ", "Instagram")))
      }))));
    }
  }]);

  return SectionNavbars;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_navbarsStyle.default)(SectionNavbars);

exports.default = _default;