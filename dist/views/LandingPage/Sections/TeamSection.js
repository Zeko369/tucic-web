"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _Card = _interopRequireDefault(require("components/Card/Card.jsx"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.jsx"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.jsx"));

var _teamStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"));

var _avatar = _interopRequireDefault(require("assets/img/faces/avatar.jpg"));

var _christian = _interopRequireDefault(require("assets/img/faces/christian.jpg"));

var _kendall = _interopRequireDefault(require("assets/img/faces/kendall.jpg"));

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

var TeamSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TeamSection, _React$Component);

  function TeamSection() {
    _classCallCheck(this, TeamSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(TeamSection).apply(this, arguments));
  }

  _createClass(TeamSection, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var imageClasses = (0, _classnames.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("h2", {
        className: classes.title
      }, "Here is our team"), _react.default.createElement("div", null, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_Card.default, {
        plain: true
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6,
        className: classes.itemGrid
      }, _react.default.createElement("img", {
        src: _avatar.default,
        alt: "...",
        className: imageClasses
      })), _react.default.createElement("h4", {
        className: classes.cardTitle
      }, "Gigi Hadid", _react.default.createElement("br", null), _react.default.createElement("small", {
        className: classes.smallTitle
      }, "Model")), _react.default.createElement(_CardBody.default, null, _react.default.createElement("p", {
        className: classes.description
      }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", _react.default.createElement("a", {
        href: "#pablo"
      }, "links"), " for people to be able to follow them outside the site.")), _react.default.createElement(_CardFooter.default, {
        className: classes.justifyCenter
      }, _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-twitter"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-instagram"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-facebook"
      }))))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_Card.default, {
        plain: true
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6,
        className: classes.itemGrid
      }, _react.default.createElement("img", {
        src: _christian.default,
        alt: "...",
        className: imageClasses
      })), _react.default.createElement("h4", {
        className: classes.cardTitle
      }, "Christian Louboutin", _react.default.createElement("br", null), _react.default.createElement("small", {
        className: classes.smallTitle
      }, "Designer")), _react.default.createElement(_CardBody.default, null, _react.default.createElement("p", {
        className: classes.description
      }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", _react.default.createElement("a", {
        href: "#pablo"
      }, "links"), " for people to be able to follow them outside the site.")), _react.default.createElement(_CardFooter.default, {
        className: classes.justifyCenter
      }, _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-twitter"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-linkedin"
      }))))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_Card.default, {
        plain: true
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6,
        className: classes.itemGrid
      }, _react.default.createElement("img", {
        src: _kendall.default,
        alt: "...",
        className: imageClasses
      })), _react.default.createElement("h4", {
        className: classes.cardTitle
      }, "Kendall Jenner", _react.default.createElement("br", null), _react.default.createElement("small", {
        className: classes.smallTitle
      }, "Model")), _react.default.createElement(_CardBody.default, null, _react.default.createElement("p", {
        className: classes.description
      }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", _react.default.createElement("a", {
        href: "#pablo"
      }, "links"), " for people to be able to follow them outside the site.")), _react.default.createElement(_CardFooter.default, {
        className: classes.justifyCenter
      }, _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-twitter"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-instagram"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        color: "transparent",
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: classes.socials + " fab fa-facebook"
      }))))))));
    }
  }]);

  return TeamSection;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_teamStyle.default)(TeamSection);

exports.default = _default;