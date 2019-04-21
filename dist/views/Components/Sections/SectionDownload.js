"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _downloadStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx"));

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

var SectionDownload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionDownload, _React$Component);

  function SectionDownload() {
    _classCallCheck(this, SectionDownload);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionDownload).apply(this, arguments));
  }

  _createClass(SectionDownload, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, {
        className: classes.textCenter,
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8
      }, _react.default.createElement("h2", null, "Do you love this UI Kit?"), _react.default.createElement("h4", null, "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!")), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 8,
        md: 6
      }, _react.default.createElement(_Button.default, {
        color: "primary",
        size: "lg",
        href: "https://www.creative-tim.com/product/material-kit-react",
        target: "_blank"
      }, "Free React Download"), _react.default.createElement(_Button.default, {
        color: "primary",
        size: "lg",
        href: "https://www.creative-tim.com/product/material-kit",
        target: "_blank"
      }, "Free HTML Downoad"))), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_GridContainer.default, {
        className: classes.textCenter,
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8
      }, _react.default.createElement("h2", null, "Want more?"), _react.default.createElement("h4", null, "We've launched", " ", _react.default.createElement("a", {
        href: "https://www.creative-tim.com/product/material-kit-pro-react",
        target: "_blank"
      }, "Material Kit PRO React", " "), ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI nspired by Material Design.")), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 8,
        md: 6
      }, _react.default.createElement(_Button.default, {
        color: "rose",
        size: "lg",
        href: "https://www.creative-tim.com/product/material-kit-pro-react",
        target: "_blank"
      }, "Material Kit PRO"), _react.default.createElement(_Button.default, {
        color: "rose",
        size: "lg",
        href: "https://www.creative-tim.com/product/material-dashboard-pro-react",
        target: "_blank"
      }, "Material Dashboard PRO"))), _react.default.createElement("div", {
        className: classes.textCenter + " " + classes.sharingArea
      }, _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement("h3", null, "Thank you for supporting us!")), _react.default.createElement(_Button.default, {
        color: "twitter"
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-twitter"
      }), " Tweet"), _react.default.createElement(_Button.default, {
        color: "facebook"
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-facebook-square"
      }), " ", "Share"), _react.default.createElement(_Button.default, {
        color: "google"
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-google-plus-g"
      }), "Share"), _react.default.createElement(_Button.default, {
        color: "github"
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-github"
      }), " Star"))));
    }
  }]);

  return SectionDownload;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_downloadStyle.default)(SectionDownload);

exports.default = _default;