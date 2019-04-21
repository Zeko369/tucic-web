"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Card = _interopRequireDefault(require("components/Card/Card.jsx"));

var _CardHeader = _interopRequireDefault(require("components/Card/CardHeader.jsx"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.jsx"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.jsx"));

var _loginStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx"));

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

var SectionLogin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionLogin, _React$Component);

  function SectionLogin() {
    _classCallCheck(this, SectionLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionLogin).apply(this, arguments));
  }

  _createClass(SectionLogin, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_Card.default, null, _react.default.createElement("form", {
        className: classes.form
      }, _react.default.createElement(_CardHeader.default, {
        color: "primary",
        className: classes.cardHeader
      }, _react.default.createElement("h4", null, "Login"), _react.default.createElement("div", {
        className: classes.socialLine
      }, _react.default.createElement(_Button.default, {
        justIcon: true,
        href: "#pablo",
        target: "_blank",
        color: "transparent",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, _react.default.createElement("i", {
        className: classes.socialIcons + " fab fa-twitter"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        href: "#pablo",
        target: "_blank",
        color: "transparent",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, _react.default.createElement("i", {
        className: classes.socialIcons + " fab fa-facebook"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        href: "#pablo",
        target: "_blank",
        color: "transparent",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, _react.default.createElement("i", {
        className: classes.socialIcons + " fab fa-google-plus-g"
      })))), _react.default.createElement("p", {
        className: classes.divider
      }, "Or Be Classical"), _react.default.createElement(_CardBody.default, null, _react.default.createElement(_CustomInput.default, {
        labelText: "First Name...",
        id: "first",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "text",
          endAdornment: _react.default.createElement(_InputAdornment.default, {
            position: "end"
          }, _react.default.createElement(_People.default, {
            className: classes.inputIconsColor
          }))
        }
      }), _react.default.createElement(_CustomInput.default, {
        labelText: "Email...",
        id: "email",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "email",
          endAdornment: _react.default.createElement(_InputAdornment.default, {
            position: "end"
          }, _react.default.createElement(_Email.default, {
            className: classes.inputIconsColor
          }))
        }
      }), _react.default.createElement(_CustomInput.default, {
        labelText: "Password",
        id: "pass",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          type: "password",
          endAdornment: _react.default.createElement(_InputAdornment.default, {
            position: "end"
          }, _react.default.createElement(_Icon.default, {
            className: classes.inputIconsColor
          }, "lock_outline"))
        }
      })), _react.default.createElement(_CardFooter.default, {
        className: classes.cardFooter
      }, _react.default.createElement(_Button.default, {
        simple: true,
        color: "primary",
        size: "lg"
      }, "Get started"))))))));
    }
  }]);

  return SectionLogin;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_loginStyle.default)(SectionLogin);

exports.default = _default;