"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSwipeableViews = _interopRequireDefault(require("react-swipeable-views"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _navPillsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/navPillsStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavPills =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavPills, _React$Component);

  function NavPills(props) {
    var _this;

    _classCallCheck(this, NavPills);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavPills).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, active) {
      _this.setState({
        active: active
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeIndex", function (index) {
      _this.setState({
        active: index
      });
    });

    _this.state = {
      active: props.active
    };
    return _this;
  }

  _createClass(NavPills, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          tabs = _this$props.tabs,
          direction = _this$props.direction,
          color = _this$props.color,
          horizontal = _this$props.horizontal,
          alignCenter = _this$props.alignCenter;
      var flexContainerClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.flexContainer, true), _defineProperty(_classNames, classes.horizontalDisplay, horizontal !== undefined), _classNames));

      var tabButtons = _react.default.createElement(_Tabs.default, {
        classes: {
          root: classes.root,
          fixed: classes.fixed,
          flexContainer: flexContainerClasses,
          indicator: classes.displayNone
        },
        value: this.state.active,
        onChange: this.handleChange,
        centered: alignCenter
      }, tabs.map(function (prop, key) {
        var _classNames2;

        var icon = {};

        if (prop.tabIcon !== undefined) {
          icon["icon"] = _react.default.createElement(prop.tabIcon, {
            className: classes.tabIcon
          });
        }

        var pillsClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.pills, true), _defineProperty(_classNames2, classes.horizontalPills, horizontal !== undefined), _defineProperty(_classNames2, classes.pillsWithIcons, prop.tabIcon !== undefined), _classNames2));
        return _react.default.createElement(_Tab.default, _extends({
          label: prop.tabButton,
          key: key
        }, icon, {
          classes: {
            root: pillsClasses,
            labelContainer: classes.labelContainer,
            label: classes.label,
            selected: classes[color]
          }
        }));
      }));

      var tabContent = _react.default.createElement("div", {
        className: classes.contentWrapper
      }, _react.default.createElement(_reactSwipeableViews.default, {
        axis: direction === "rtl" ? "x-reverse" : "x",
        index: this.state.active,
        onChangeIndex: this.handleChangeIndex
      }, tabs.map(function (prop, key) {
        return _react.default.createElement("div", {
          className: classes.tabContent,
          key: key
        }, prop.tabContent);
      })));

      return horizontal !== undefined ? _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, horizontal.tabsGrid, tabButtons), _react.default.createElement(_GridItem.default, horizontal.contentGrid, tabContent)) : _react.default.createElement("div", null, tabButtons, tabContent);
    }
  }]);

  return NavPills;
}(_react.default.Component);

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
NavPills.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // index of the default active pill
  active: _propTypes.default.number,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabButton: _propTypes.default.string,
    tabIcon: _propTypes.default.func,
    tabContent: _propTypes.default.node
  })).isRequired,
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: _propTypes.default.string,
  horizontal: _propTypes.default.shape({
    tabsGrid: _propTypes.default.object,
    contentGrid: _propTypes.default.object
  }),
  alignCenter: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(_navPillsStyle.default)(NavPills);

exports.default = _default;