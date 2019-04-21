"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _SnackbarContent = _interopRequireDefault(require("components/Snackbar/SnackbarContent.jsx"));

var _Clearfix = _interopRequireDefault(require("components/Clearfix/Clearfix.jsx"));

var _notificationsStyles = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx"));

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

var SectionNotifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionNotifications, _React$Component);

  function SectionNotifications() {
    _classCallCheck(this, SectionNotifications);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionNotifications).apply(this, arguments));
  }

  _createClass(SectionNotifications, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section,
        id: "notifications"
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Notifications"))), _react.default.createElement(_SnackbarContent.default, {
        message: _react.default.createElement("span", null, _react.default.createElement("b", null, "INFO ALERT:"), " You've got some friends nearby, stop looking at your phone and find them..."),
        close: true,
        color: "info",
        icon: "info_outline"
      }), _react.default.createElement(_SnackbarContent.default, {
        message: _react.default.createElement("span", null, _react.default.createElement("b", null, "SUCCESS ALERT:"), " You've got some friends nearby, stop looking at your phone and find them..."),
        close: true,
        color: "success",
        icon: _Check.default
      }), _react.default.createElement(_SnackbarContent.default, {
        message: _react.default.createElement("span", null, _react.default.createElement("b", null, "WARNING ALERT:"), " You've got some friends nearby, stop looking at your phone and find them..."),
        close: true,
        color: "warning",
        icon: _Warning.default
      }), _react.default.createElement(_SnackbarContent.default, {
        message: _react.default.createElement("span", null, _react.default.createElement("b", null, "DANGER ALERT:"), " You've got some friends nearby, stop looking at your phone and find them..."),
        close: true,
        color: "danger",
        icon: "info_outline"
      }), _react.default.createElement(_Clearfix.default, null));
    }
  }]);

  return SectionNotifications;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_notificationsStyles.default)(SectionNotifications);

exports.default = _default;