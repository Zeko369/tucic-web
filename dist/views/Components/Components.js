"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Header = _interopRequireDefault(require("components/Header/Header.jsx"));

var _Footer = _interopRequireDefault(require("components/Footer/Footer.jsx"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _Parallax = _interopRequireDefault(require("components/Parallax/Parallax.jsx"));

var _HeaderLinks = _interopRequireDefault(require("components/Header/HeaderLinks.jsx"));

var _SectionBasics = _interopRequireDefault(require("./Sections/SectionBasics.jsx"));

var _SectionNavbars = _interopRequireDefault(require("./Sections/SectionNavbars.jsx"));

var _SectionTabs = _interopRequireDefault(require("./Sections/SectionTabs.jsx"));

var _SectionPills = _interopRequireDefault(require("./Sections/SectionPills.jsx"));

var _SectionNotifications = _interopRequireDefault(require("./Sections/SectionNotifications.jsx"));

var _SectionTypography = _interopRequireDefault(require("./Sections/SectionTypography.jsx"));

var _SectionJavascript = _interopRequireDefault(require("./Sections/SectionJavascript.jsx"));

var _SectionCarousel = _interopRequireDefault(require("./Sections/SectionCarousel.jsx"));

var _SectionCompletedExamples = _interopRequireDefault(require("./Sections/SectionCompletedExamples.jsx"));

var _SectionLogin = _interopRequireDefault(require("./Sections/SectionLogin.jsx"));

var _SectionExamples = _interopRequireDefault(require("./Sections/SectionExamples.jsx"));

var _SectionDownload = _interopRequireDefault(require("./Sections/SectionDownload.jsx"));

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Components =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Components, _React$Component);

  function Components() {
    _classCallCheck(this, Components);

    return _possibleConstructorReturn(this, _getPrototypeOf(Components).apply(this, arguments));
  }

  _createClass(Components, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          rest = _objectWithoutProperties(_this$props, ["classes"]);

      return _react.default.createElement("div", null, _react.default.createElement(_Header.default, _extends({
        brand: "Material Kit React",
        rightLinks: _react.default.createElement(_HeaderLinks.default, null),
        fixed: true,
        color: "transparent",
        changeColorOnScroll: {
          height: 400,
          color: "white"
        }
      }, rest)), _react.default.createElement(_Parallax.default, {
        image: require("assets/img/bg4.jpg")
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, null, _react.default.createElement("div", {
        className: classes.brand
      }, _react.default.createElement("h1", {
        className: classes.title
      }, "Material Kit React."), _react.default.createElement("h3", {
        className: classes.subtitle
      }, "A Badass Material-UI Kit based on Material Design.")))))), _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.main, classes.mainRaised)
      }, _react.default.createElement(_SectionBasics.default, null), _react.default.createElement(_SectionNavbars.default, null), _react.default.createElement(_SectionTabs.default, null), _react.default.createElement(_SectionPills.default, null), _react.default.createElement(_SectionNotifications.default, null), _react.default.createElement(_SectionTypography.default, null), _react.default.createElement(_SectionJavascript.default, null), _react.default.createElement(_SectionCarousel.default, null), _react.default.createElement(_SectionCompletedExamples.default, null), _react.default.createElement(_SectionLogin.default, null), _react.default.createElement(_GridItem.default, {
        md: 12,
        className: classes.textCenter
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "/login-page",
        className: classes.link
      }, _react.default.createElement(_Button.default, {
        color: "primary",
        size: "lg",
        simple: true
      }, "View Login Page"))), _react.default.createElement(_SectionExamples.default, null), _react.default.createElement(_SectionDownload.default, null)), _react.default.createElement(_Footer.default, null));
    }
  }]);

  return Components;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_components.default)(Components);

exports.default = _default;