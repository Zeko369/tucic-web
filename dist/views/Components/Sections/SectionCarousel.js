"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _LocationOn = _interopRequireDefault(require("@material-ui/icons/LocationOn"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Card = _interopRequireDefault(require("components/Card/Card.jsx"));

var _carouselStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx"));

var _bg = _interopRequireDefault(require("assets/img/bg.jpg"));

var _bg2 = _interopRequireDefault(require("assets/img/bg2.jpg"));

var _bg3 = _interopRequireDefault(require("assets/img/bg3.jpg"));

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

var SectionCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionCarousel, _React$Component);

  function SectionCarousel() {
    _classCallCheck(this, SectionCarousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionCarousel).apply(this, arguments));
  }

  _createClass(SectionCarousel, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      };
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8,
        className: classes.marginAuto
      }, _react.default.createElement(_Card.default, {
        carousel: true
      }, _react.default.createElement(_reactSlick.default, settings, _react.default.createElement("div", null, _react.default.createElement("img", {
        src: _bg.default,
        alt: "First slide",
        className: "slick-image"
      }), _react.default.createElement("div", {
        className: "slick-caption"
      }, _react.default.createElement("h4", null, _react.default.createElement(_LocationOn.default, {
        className: "slick-icons"
      }), "Yellowstone National Park, United States"))), _react.default.createElement("div", null, _react.default.createElement("img", {
        src: _bg2.default,
        alt: "Second slide",
        className: "slick-image"
      }), _react.default.createElement("div", {
        className: "slick-caption"
      }, _react.default.createElement("h4", null, _react.default.createElement(_LocationOn.default, {
        className: "slick-icons"
      }), "Somewhere Beyond, United States"))), _react.default.createElement("div", null, _react.default.createElement("img", {
        src: _bg3.default,
        alt: "Third slide",
        className: "slick-image"
      }), _react.default.createElement("div", {
        className: "slick-caption"
      }, _react.default.createElement("h4", null, _react.default.createElement(_LocationOn.default, {
        className: "slick-icons"
      }), "Yellowstone National Park, United States")))))))));
    }
  }]);

  return SectionCarousel;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_carouselStyle.default)(SectionCarousel);

exports.default = _default;