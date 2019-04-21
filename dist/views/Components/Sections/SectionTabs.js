"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Face = _interopRequireDefault(require("@material-ui/icons/Face"));

var _Chat = _interopRequireDefault(require("@material-ui/icons/Chat"));

var _Build = _interopRequireDefault(require("@material-ui/icons/Build"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _CustomTabs = _interopRequireDefault(require("components/CustomTabs/CustomTabs.jsx"));

var _tabsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx"));

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

var SectionTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionTabs, _React$Component);

  function SectionTabs() {
    _classCallCheck(this, SectionTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionTabs).apply(this, arguments));
  }

  _createClass(SectionTabs, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement("div", {
        id: "nav-tabs"
      }, _react.default.createElement("h3", null, "Navigation Tabs"), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "Tabs with Icons on Card")), _react.default.createElement(_CustomTabs.default, {
        headerColor: "primary",
        tabs: [{
          tabName: "Profile",
          tabIcon: _Face.default,
          tabContent: _react.default.createElement("p", {
            className: classes.textCenter
          }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
        }, {
          tabName: "Messages",
          tabIcon: _Chat.default,
          tabContent: _react.default.createElement("p", {
            className: classes.textCenter
          }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
        }, {
          tabName: "Settings",
          tabIcon: _Build.default,
          tabContent: _react.default.createElement("p", {
            className: classes.textCenter
          }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
        }]
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "Tabs on Plain Card")), _react.default.createElement(_CustomTabs.default, {
        plainTabs: true,
        headerColor: "danger",
        tabs: [{
          tabName: "Home",
          tabContent: _react.default.createElement("p", {
            className: classes.textCenter
          }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
        }, {
          tabName: "Updates",
          tabContent: _react.default.createElement("p", {
            className: classes.textCenter
          }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
        }, {
          tabName: "History",
          tabContent: _react.default.createElement("p", {
            className: classes.textCenter
          }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
        }]
      }))))));
    }
  }]);

  return SectionTabs;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_tabsStyle.default)(SectionTabs);

exports.default = _default;