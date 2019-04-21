"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Camera = _interopRequireDefault(require("@material-ui/icons/Camera"));

var _Palette = _interopRequireDefault(require("@material-ui/icons/Palette"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _Header = _interopRequireDefault(require("components/Header/Header.jsx"));

var _Footer = _interopRequireDefault(require("components/Footer/Footer.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _HeaderLinks = _interopRequireDefault(require("components/Header/HeaderLinks.jsx"));

var _NavPills = _interopRequireDefault(require("components/NavPills/NavPills.jsx"));

var _Parallax = _interopRequireDefault(require("components/Parallax/Parallax.jsx"));

var _christian = _interopRequireDefault(require("assets/img/faces/christian.jpg"));

var _studio = _interopRequireDefault(require("assets/img/examples/studio-1.jpg"));

var _studio2 = _interopRequireDefault(require("assets/img/examples/studio-2.jpg"));

var _studio3 = _interopRequireDefault(require("assets/img/examples/studio-3.jpg"));

var _studio4 = _interopRequireDefault(require("assets/img/examples/studio-4.jpg"));

var _studio5 = _interopRequireDefault(require("assets/img/examples/studio-5.jpg"));

var _oluEletu = _interopRequireDefault(require("assets/img/examples/olu-eletu.jpg"));

var _clemOnojeghuo = _interopRequireDefault(require("assets/img/examples/clem-onojeghuo.jpg"));

var _cynthiaDelRio = _interopRequireDefault(require("assets/img/examples/cynthia-del-rio.jpg"));

var _mariyaGeorgieva = _interopRequireDefault(require("assets/img/examples/mariya-georgieva.jpg"));

var _clemOnojegaw = _interopRequireDefault(require("assets/img/examples/clem-onojegaw.jpg"));

var _profilePage = _interopRequireDefault(require("assets/jss/material-kit-react/views/profilePage.jsx"));

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

var ProfilePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfilePage, _React$Component);

  function ProfilePage() {
    _classCallCheck(this, ProfilePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfilePage).apply(this, arguments));
  }

  _createClass(ProfilePage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          rest = _objectWithoutProperties(_this$props, ["classes"]);

      var imageClasses = (0, _classnames.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
      var navImageClasses = (0, _classnames.default)(classes.imgRounded, classes.imgGallery);
      return _react.default.createElement("div", null, _react.default.createElement(_Header.default, _extends({
        color: "transparent",
        brand: "Material Kit React",
        rightLinks: _react.default.createElement(_HeaderLinks.default, null),
        fixed: true,
        changeColorOnScroll: {
          height: 200,
          color: "white"
        }
      }, rest)), _react.default.createElement(_Parallax.default, {
        small: true,
        filter: true,
        image: require("assets/img/profile-bg.jpg")
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.main, classes.mainRaised)
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.profile
      }, _react.default.createElement("div", {
        className: classes.name
      }, _react.default.createElement("h3", {
        className: classes.title
      }, "Christian Louboutin"), _react.default.createElement("h6", null, "DESIGNER"), _react.default.createElement(_Button.default, {
        justIcon: true,
        link: true,
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: "fab fa-twitter"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        link: true,
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: "fab fa-instagram"
      })), _react.default.createElement(_Button.default, {
        justIcon: true,
        link: true,
        className: classes.margin5
      }, _react.default.createElement("i", {
        className: "fab fa-facebook"
      })))))), _react.default.createElement("div", {
        className: classes.description
      }, _react.default.createElement("p", null, "An artist of considerable range, Chet Faker \u2014 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u2014 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.", " ")), _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8,
        className: classes.navWrapper
      }, _react.default.createElement(_NavPills.default, {
        alignCenter: true,
        color: "primary",
        tabs: [{
          tabButton: "Studio",
          tabIcon: _Camera.default,
          tabContent: _react.default.createElement(_GridContainer.default, {
            justify: "center"
          }, _react.default.createElement(_GridItem.default, {
            xs: 12,
            sm: 12,
            md: 4
          }, _react.default.createElement("img", {
            alt: "...",
            src: _studio.default,
            className: navImageClasses
          }), _react.default.createElement("img", {
            alt: "...",
            src: _studio2.default,
            className: navImageClasses
          })), _react.default.createElement(_GridItem.default, {
            xs: 12,
            sm: 12,
            md: 4
          }, _react.default.createElement("img", {
            alt: "...",
            src: _studio5.default,
            className: navImageClasses
          }), _react.default.createElement("img", {
            alt: "...",
            src: _studio4.default,
            className: navImageClasses
          })))
        }, {
          tabButton: "Work",
          tabIcon: _Palette.default,
          tabContent: _react.default.createElement("div", null)
        }, {
          tabButton: "Favorite",
          tabIcon: _Favorite.default,
          tabContent: _react.default.createElement(_GridContainer.default, {
            justify: "center"
          }, _react.default.createElement(_GridItem.default, {
            xs: 12,
            sm: 12,
            md: 4
          }, _react.default.createElement("img", {
            alt: "...",
            src: _mariyaGeorgieva.default,
            className: navImageClasses
          }), _react.default.createElement("img", {
            alt: "...",
            src: _studio3.default,
            className: navImageClasses
          })), _react.default.createElement(_GridItem.default, {
            xs: 12,
            sm: 12,
            md: 4
          }, _react.default.createElement("img", {
            alt: "...",
            src: _clemOnojeghuo.default,
            className: navImageClasses
          }), _react.default.createElement("img", {
            alt: "...",
            src: _oluEletu.default,
            className: navImageClasses
          }), _react.default.createElement("img", {
            alt: "...",
            src: _studio.default,
            className: navImageClasses
          })))
        }]
      })))))), _react.default.createElement(_Footer.default, null));
    }
  }]);

  return ProfilePage;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_profilePage.default)(ProfilePage);

exports.default = _default;