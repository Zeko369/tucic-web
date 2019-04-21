"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _reactRouterDom = require("react-router-dom");

var _key = _interopRequireDefault(require("../key.svg"));

var _dPrinter = _interopRequireDefault(require("../3d-printer.svg"));

var _paint = _interopRequireDefault(require("../paint.svg"));

var _knife = _interopRequireDefault(require("../knife.png"));

var _tools = _interopRequireDefault(require("../tools.svg"));

var _van = _interopRequireDefault(require("../van.svg"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _InfoArea = _interopRequireDefault(require("components/InfoArea/InfoArea.jsx"));

var _productStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"));

require("./style123.css");

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

var ProductSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductSection, _React$Component);

  function ProductSection() {
    _classCallCheck(this, ProductSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductSection).apply(this, arguments));
  }

  _createClass(ProductSection, [{
    key: "render",
    value: function render() {
      var _this = this;

      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 6,
        sm: 4,
        md: 2
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.change(0);
        }
      }, _react.default.createElement(_InfoArea.default, {
        className: "icon123 ".concat(this.props.state.selected == 0 ? 'selected123' : ''),
        title: "Izrada kljuceva",
        icon: _key.default,
        iconColor: "info",
        vertical: true
      }))), _react.default.createElement(_GridItem.default, {
        xs: 6,
        sm: 4,
        md: 2
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.change(1);
        }
      }, _react.default.createElement(_InfoArea.default, {
        className: "icon123 ".concat(this.props.state.selected == 0 + 1 ? 'selected123' : ''),
        title: "Boje i lakovi",
        icon: _paint.default,
        iconColor: "success",
        vertical: true
      }))), _react.default.createElement(_GridItem.default, {
        xs: 6,
        sm: 4,
        md: 2
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.change(2);
        }
      }, _react.default.createElement(_InfoArea.default, {
        className: "icon123 ".concat(this.props.state.selected == 1 + 1 ? 'selected123' : ''),
        title: "Zeljeznarija",
        icon: _tools.default,
        iconColor: "danger",
        vertical: true
      }))), _react.default.createElement(_GridItem.default, {
        xs: 6,
        sm: 4,
        md: 2
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.change(3);
        }
      }, _react.default.createElement(_InfoArea.default, {
        className: "icon123 ".concat(this.props.state.selected == 2 + 1 ? 'selected123' : ''),
        title: "Graviranje",
        icon: _dPrinter.default,
        iconColor: "info",
        vertical: true
      }))), _react.default.createElement(_GridItem.default, {
        xs: 6,
        sm: 4,
        md: 2
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.change(4);
        }
      }, _react.default.createElement(_InfoArea.default, {
        className: "icon123 ".concat(this.props.state.selected == 3 + 1 ? 'selected123' : ''),
        title: "Brusiona",
        icon: _knife.default,
        iconColor: "success",
        vertical: true
      }))), _react.default.createElement(_GridItem.default, {
        xs: 6,
        sm: 4,
        md: 2
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.change(5);
        }
      }, _react.default.createElement(_InfoArea.default, {
        className: "icon123 ".concat(this.props.state.selected == 4 + 1 ? 'selected123' : ''),
        title: "Intervencije",
        icon: _van.default,
        iconColor: "danger",
        vertical: true
      })))));
    }
  }]);

  return ProductSection;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_productStyle.default)(ProductSection);

exports.default = _default;