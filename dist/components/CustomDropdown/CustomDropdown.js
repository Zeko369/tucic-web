"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _customDropdownStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/customDropdownStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomDropdown, _React$Component);

  function CustomDropdown(props) {
    var _this;

    _classCallCheck(this, CustomDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (param) {
      _this.setState({
        open: false
      });

      if (_this.props && _this.props.onClick) {
        _this.props.onClick(param);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseAway", function (event) {
      if (_this.anchorEl.contains(event.target)) {
        return;
      }

      _this.setState({
        open: false
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(CustomDropdown, [{
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this,
          _classNames3;

      var open = this.state.open;
      var _this$props = this.props,
          classes = _this$props.classes,
          buttonText = _this$props.buttonText,
          buttonIcon = _this$props.buttonIcon,
          dropdownList = _this$props.dropdownList,
          buttonProps = _this$props.buttonProps,
          dropup = _this$props.dropup,
          dropdownHeader = _this$props.dropdownHeader,
          caret = _this$props.caret,
          hoverColor = _this$props.hoverColor,
          left = _this$props.left,
          rtlActive = _this$props.rtlActive,
          noLiPadding = _this$props.noLiPadding;
      var caretClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.caret, true), _defineProperty(_classNames, classes.caretActive, open), _defineProperty(_classNames, classes.caretRTL, rtlActive), _classNames));
      var dropdownItem = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.dropdownItem, true), _defineProperty(_classNames2, classes[hoverColor + "Hover"], true), _defineProperty(_classNames2, classes.noLiPadding, noLiPadding), _defineProperty(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
      var icon = null;

      switch (_typeof(buttonIcon)) {
        case "function":
          icon = _react.default.createElement(this.props.buttonIcon, {
            className: classes.buttonIcon
          });
          break;

        case "string":
          icon = _react.default.createElement(_Icon.default, {
            className: classes.buttonIcon
          }, this.props.buttonIcon);
          break;

        default:
          icon = null;
          break;
      }

      return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_Button.default, _extends({
        "aria-label": "Notifications",
        "aria-owns": open ? "menu-list" : null,
        "aria-haspopup": "true"
      }, buttonProps, {
        buttonRef: function buttonRef(node) {
          _this2.anchorEl = node;
        },
        onClick: this.handleClick
      }), icon, buttonText !== undefined ? buttonText : null, caret ? _react.default.createElement("b", {
        className: caretClasses
      }) : null)), _react.default.createElement(_Popper.default, {
        open: open,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: true,
        placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
        className: (0, _classnames.default)((_classNames3 = {}, _defineProperty(_classNames3, classes.popperClose, !open), _defineProperty(_classNames3, classes.popperResponsive, true), _classNames3))
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return _react.default.createElement(_Grow.default, {
          in: open,
          id: "menu-list",
          style: dropup ? {
            transformOrigin: "0 100% 0"
          } : {
            transformOrigin: "0 0 0"
          }
        }, _react.default.createElement(_Paper.default, {
          className: classes.dropdown
        }, _react.default.createElement(_ClickAwayListener.default, {
          onClickAway: _this2.handleCloseAway
        }, _react.default.createElement(_MenuList.default, {
          role: "menu",
          className: classes.menuList
        }, dropdownHeader !== undefined ? _react.default.createElement(_MenuItem.default, {
          onClick: function onClick() {
            return _this2.handleClose(dropdownHeader);
          },
          className: classes.dropdownHeader
        }, dropdownHeader) : null, dropdownList.map(function (prop, key) {
          if (prop.divider) {
            return _react.default.createElement(_Divider.default, {
              key: key,
              onClick: function onClick() {
                return _this2.handleClose("divider");
              },
              className: classes.dropdownDividerItem
            });
          }

          return _react.default.createElement(_MenuItem.default, {
            key: key,
            onClick: function onClick() {
              return _this2.handleClose(prop);
            },
            className: dropdownItem
          }, prop);
        })))));
      }));
    }
  }]);

  return CustomDropdown;
}(_react.default.Component);

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  classes: _propTypes.default.object.isRequired,
  hoverColor: _propTypes.default.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: _propTypes.default.node,
  buttonIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  dropdownList: _propTypes.default.array,
  buttonProps: _propTypes.default.object,
  dropup: _propTypes.default.bool,
  dropdownHeader: _propTypes.default.node,
  rtlActive: _propTypes.default.bool,
  caret: _propTypes.default.bool,
  left: _propTypes.default.bool,
  noLiPadding: _propTypes.default.bool,
  // function that retuns the selected item
  onClick: _propTypes.default.func
};

var _default = (0, _withStyles.default)(_customDropdownStyle.default)(CustomDropdown);

exports.default = _default;