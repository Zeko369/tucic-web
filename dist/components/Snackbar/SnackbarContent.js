"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _snackbarContentStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/snackbarContentStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SnackbarContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SnackbarContent, _React$Component);

  function SnackbarContent(props) {
    var _this;

    _classCallCheck(this, SnackbarContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SnackbarContent).call(this, props));
    _this.closeAlert = _this.closeAlert.bind(_assertThisInitialized(_this));
    var classes = props.classes,
        message = props.message,
        color = props.color,
        close = props.close,
        icon = props.icon;
    var action = [];

    if (close !== undefined) {
      action = [_react.default.createElement(_IconButton.default, {
        className: classes.iconButton,
        key: "close",
        "aria-label": "Close",
        color: "inherit",
        onClick: _this.closeAlert
      }, _react.default.createElement(_Close.default, {
        className: classes.close
      }))];
    }

    var snackIcon = null;

    switch (_typeof(icon)) {
      case "function":
        snackIcon = _react.default.createElement(props.icon, {
          className: classes.icon
        });
        break;

      case "string":
        snackIcon = _react.default.createElement(_Icon.default, {
          className: classes.icon
        }, props.icon);
        break;

      default:
        snackIcon = null;
        break;
    }

    _this.state = {
      alert: _react.default.createElement(_SnackbarContent.default, {
        message: _react.default.createElement("div", null, snackIcon, message, close !== undefined ? action : null),
        classes: {
          root: classes.root + " " + classes[color],
          message: classes.message + " " + classes.container
        }
      })
    };
    return _this;
  }

  _createClass(SnackbarContent, [{
    key: "closeAlert",
    value: function closeAlert() {
      this.setState({
        alert: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.alert;
    }
  }]);

  return SnackbarContent;
}(_react.default.Component);

SnackbarContent.propTypes = {
  classes: _propTypes.default.object.isRequired,
  message: _propTypes.default.node.isRequired,
  color: _propTypes.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string])
};

var _default = (0, _withStyles.default)(_snackbarContentStyle.default)(SnackbarContent);

exports.default = _default;