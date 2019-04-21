"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Small = _interopRequireDefault(require("components/Typography/Small.jsx"));

var _Danger = _interopRequireDefault(require("components/Typography/Danger.jsx"));

var _Warning = _interopRequireDefault(require("components/Typography/Warning.jsx"));

var _Success = _interopRequireDefault(require("components/Typography/Success.jsx"));

var _Info = _interopRequireDefault(require("components/Typography/Info.jsx"));

var _Primary = _interopRequireDefault(require("components/Typography/Primary.jsx"));

var _Muted = _interopRequireDefault(require("components/Typography/Muted.jsx"));

var _Quote = _interopRequireDefault(require("components/Typography/Quote.jsx"));

var _typographyStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx"));

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

var SectionTypography =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionTypography, _React$Component);

  function SectionTypography() {
    _classCallCheck(this, SectionTypography);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionTypography).apply(this, arguments));
  }

  _createClass(SectionTypography, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement("div", {
        id: "typography"
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h2", null, "Typography")), _react.default.createElement(_GridContainer.default, null, _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 1"), _react.default.createElement("h1", null, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 2"), _react.default.createElement("h2", null, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 3"), _react.default.createElement("h3", null, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 4"), _react.default.createElement("h4", null, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 5"), _react.default.createElement("h5", null, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 6"), _react.default.createElement("h6", null, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 1"), _react.default.createElement("h1", {
        className: classes.title
      }, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 2"), _react.default.createElement("h2", {
        className: classes.title
      }, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 3"), _react.default.createElement("h3", {
        className: classes.title
      }, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Header 4"), _react.default.createElement("h4", {
        className: classes.title
      }, "The Life of Material Kit")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Paragraph"), _react.default.createElement("p", null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Quote"), _react.default.createElement(_Quote.default, {
        text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
        author: " Kanye West, Musician"
      })), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Muted Text"), _react.default.createElement(_Muted.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Primary Text"), _react.default.createElement(_Primary.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Info Text"), _react.default.createElement(_Info.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Success Text"), _react.default.createElement(_Success.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Warning Text"), _react.default.createElement(_Warning.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Danger Text"), _react.default.createElement(_Danger.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), _react.default.createElement("div", {
        className: classes.typo
      }, _react.default.createElement("div", {
        className: classes.note
      }, "Small Tag"), _react.default.createElement("h2", null, "Header with small subtitle", _react.default.createElement("br", null), _react.default.createElement(_Small.default, null, "Use \"Small\" tag for the headers"))))), _react.default.createElement("div", {
        className: classes.space50
      }), _react.default.createElement("div", {
        id: "images"
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h2", null, "Images")), _react.default.createElement("br", null), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 2
      }, _react.default.createElement("h4", null, "Rounded Image"), _react.default.createElement("img", {
        src: _avatar.default,
        alt: "...",
        className: classes.imgRounded + " " + classes.imgFluid
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 2,
        className: classes.marginLeft
      }, _react.default.createElement("h4", null, "Circle Image"), _react.default.createElement("img", {
        src: _avatar.default,
        alt: "...",
        className: classes.imgRoundedCircle + " " + classes.imgFluid
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 2,
        className: classes.marginLeft
      }, _react.default.createElement("h4", null, "Rounded Raised"), _react.default.createElement("img", {
        src: _avatar.default,
        alt: "...",
        className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 2,
        className: classes.marginLeft
      }, _react.default.createElement("h4", null, "Circle Raised"), _react.default.createElement("img", {
        src: _avatar.default,
        alt: "...",
        className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
      }))), _react.default.createElement(_GridContainer.default, null)), _react.default.createElement("div", {
        className: classes.space50
      })));
    }
  }]);

  return SectionTypography;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_typographyStyle.default)(SectionTypography);

exports.default = _default;