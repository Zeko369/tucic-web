"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

require("./style.css");

var _Header = _interopRequireDefault(require("components/Header/Header.jsx"));

var _Footer = _interopRequireDefault(require("components/Footer/Footer.jsx"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _HeaderLinks = _interopRequireDefault(require("components/Header/HeaderLinks.jsx"));

var _Parallax = _interopRequireDefault(require("components/Parallax/Parallax.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _landingPage = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPage.jsx"));

var _ProductSection = _interopRequireDefault(require("./Sections/ProductSection.jsx"));

var _WorkSection = _interopRequireDefault(require("./Sections/WorkSection.jsx"));

var _logo = _interopRequireDefault(require("assets/img/logo.svg"));

var _bg = _interopRequireDefault(require("assets/img/bg.jpg"));

var _foo = _interopRequireDefault(require("./foo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var dashboardRoutes = [];

var LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage(props) {
    var _this;

    _classCallCheck(this, LandingPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).call(this, props));
    _this.state = {
      selected: 0
    };
    _this.change = _this.change.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LandingPage, [{
    key: "change",
    value: function change(to_id) {
      this.setState({
        selected: to_id
      });
      console.log(to_id);
    }
  }, {
    key: "render",
    value: function render() {
      var selectedDiv = _react.default.createElement("div", null, this.state.selected == 0 ? _react.default.createElement(_foo.default, null) : this.state.selected == 1 ? _react.default.createElement("a", null, "FOOOO") : this.state.selected == 2 ? _react.default.createElement("a", null, "FOOOOdsafsdf") : this.state.selected == 3 ? _react.default.createElement("a", null, "FOOasdasdasdasdOO") : this.state.selected == 4 ? _react.default.createElement("a", null, "FOOO786234876234O") : _react.default.createElement("a", null, "PET"));

      var _this$props = this.props,
          classes = _this$props.classes,
          rest = _objectWithoutProperties(_this$props, ["classes"]);

      return _react.default.createElement("div", null, _react.default.createElement(_Header.default, _extends({
        color: "transparent",
        routes: dashboardRoutes,
        brand: "",
        rightLinks: _react.default.createElement(_HeaderLinks.default, null),
        fixed: true,
        changeColorOnScroll: {
          height: 100,
          color: "white"
        }
      }, rest)), _react.default.createElement(_Parallax.default, {
        small: true,
        filter: true,
        image: require("assets/img/top-bg.png")
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("img", {
        width: "90%",
        src: _logo.default,
        alt: "logo"
      }))))), _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.main, classes.mainRaised)
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_ProductSection.default, {
        change: this.change,
        state: this.state
      }), selectedDiv, _react.default.createElement("br", null), _react.default.createElement("div", {
        className: "foobar",
        style: {
          backgroundImage: "url(" + _bg.default + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "500px"
        }
      }, _react.default.createElement(_Button.default, {
        className: "webshop123",
        color: "danger",
        size: "lg",
        style: {
          backgroundColor: "#ed1c24",
          position: "relative",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "60px",
          marginTop: "-30px",
          marginLeft: "-100px"
        }
      }, "Webshop")), _react.default.createElement(_WorkSection.default, null))), _react.default.createElement(_Footer.default, null));
    }
  }]);

  return LandingPage;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_landingPage.default)(LandingPage);

exports.default = _default;