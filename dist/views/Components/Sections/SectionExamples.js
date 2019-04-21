"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _exampleStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx"));

var _landing = _interopRequireDefault(require("assets/img/landing.jpg"));

var _profile = _interopRequireDefault(require("assets/img/profile.jpg"));

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

var SectionExamples =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionExamples, _React$Component);

  function SectionExamples() {
    _classCallCheck(this, SectionExamples);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionExamples).apply(this, arguments));
  }

  _createClass(SectionExamples, [{
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
        md: 6
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "landing-page",
        className: classes.link
      }, _react.default.createElement("img", {
        src: _landing.default,
        alt: "...",
        className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
      }), _react.default.createElement(_Button.default, {
        color: "primary",
        size: "lg",
        simple: true
      }, "View landing page"))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "profile-page",
        className: classes.link
      }, _react.default.createElement("img", {
        src: _profile.default,
        alt: "...",
        className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
      }), _react.default.createElement(_Button.default, {
        color: "primary",
        size: "lg",
        simple: true
      }, "View profile page"))))));
    }
  }]);

  return SectionExamples;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_exampleStyle.default)(SectionExamples);

exports.default = _default;