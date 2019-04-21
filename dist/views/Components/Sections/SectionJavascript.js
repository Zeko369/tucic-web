"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _LibraryBooks = _interopRequireDefault(require("@material-ui/icons/LibraryBooks"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _javascriptStyles = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Transition(props) {
  return _react.default.createElement(_Slide.default, _extends({
    direction: "down"
  }, props));
}

var SectionJavascript =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionJavascript, _React$Component);

  function SectionJavascript(props) {
    var _this;

    _classCallCheck(this, SectionJavascript);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionJavascript).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "anchorElLeft", null);

    _defineProperty(_assertThisInitialized(_this), "anchorElTop", null);

    _defineProperty(_assertThisInitialized(_this), "anchorElBottom", null);

    _defineProperty(_assertThisInitialized(_this), "anchorElRight", null);

    _this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
    return _this;
  }

  _createClass(SectionJavascript, [{
    key: "handleClickOpen",
    value: function handleClickOpen(modal) {
      var x = [];
      x[modal] = true;
      this.setState(x);
    }
  }, {
    key: "handleClose",
    value: function handleClose(modal) {
      var x = [];
      x[modal] = false;
      this.setState(x);
    }
  }, {
    key: "handleClosePopover",
    value: function handleClosePopover(state) {
      this.setState(_defineProperty({}, state, false));
    }
  }, {
    key: "handleClickButton",
    value: function handleClickButton(state) {
      this.setState(_defineProperty({}, state, true));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h2", null, "Javascript components")), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Modal")), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Button.default, {
        color: "primary",
        block: true,
        onClick: function onClick() {
          return _this2.handleClickOpen("classicModal");
        }
      }, _react.default.createElement(_LibraryBooks.default, {
        className: classes.icon
      }), "Classic"), _react.default.createElement(_Dialog.default, {
        classes: {
          root: classes.center,
          paper: classes.modal
        },
        open: this.state.classicModal,
        TransitionComponent: Transition,
        keepMounted: true,
        onClose: function onClose() {
          return _this2.handleClose("classicModal");
        },
        "aria-labelledby": "classic-modal-slide-title",
        "aria-describedby": "classic-modal-slide-description"
      }, _react.default.createElement(_DialogTitle.default, {
        id: "classic-modal-slide-title",
        disableTypography: true,
        className: classes.modalHeader
      }, _react.default.createElement(_IconButton.default, {
        className: classes.modalCloseButton,
        key: "close",
        "aria-label": "Close",
        color: "inherit",
        onClick: function onClick() {
          return _this2.handleClose("classicModal");
        }
      }, _react.default.createElement(_Close.default, {
        className: classes.modalClose
      })), _react.default.createElement("h4", {
        className: classes.modalTitle
      }, "Modal title")), _react.default.createElement(_DialogContent.default, {
        id: "classic-modal-slide-description",
        className: classes.modalBody
      }, _react.default.createElement("p", null, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")), _react.default.createElement(_DialogActions.default, {
        className: classes.modalFooter
      }, _react.default.createElement(_Button.default, {
        color: "transparent",
        simple: true
      }, "Nice Button"), _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return _this2.handleClose("classicModal");
        },
        color: "danger",
        simple: true
      }, "Close"))))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 12
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Datetime Picker")), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement(_InputLabel.default, {
        className: classes.label
      }, "Datetime Picker"), _react.default.createElement("br", null), _react.default.createElement(_FormControl.default, {
        fullWidth: true
      }, _react.default.createElement(_reactDatetime.default, {
        inputProps: {
          placeholder: "Datetime Picker Here"
        }
      })))))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Popovers")), _react.default.createElement(_Button.default, {
        buttonRef: function buttonRef(node) {
          _this2.anchorElLeft = node;
        },
        onClick: function onClick() {
          return _this2.handleClickButton("openLeft");
        }
      }, "On left"), _react.default.createElement(_Popover.default, {
        classes: {
          paper: classes.popover
        },
        open: this.state.openLeft,
        anchorEl: this.anchorElLeft,
        anchorReference: "anchorEl",
        onClose: function onClose() {
          return _this2.handleClosePopover("openLeft");
        },
        anchorOrigin: {
          vertical: "center",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "center",
          horizontal: "right"
        }
      }, _react.default.createElement("h3", {
        className: classes.popoverHeader
      }, "Popover on left"), _react.default.createElement("div", {
        className: classes.popoverBody
      }, "Here will be some very useful information about his popover. Here will be some very useful information about his popover.")), _react.default.createElement(_Button.default, {
        buttonRef: function buttonRef(node) {
          _this2.anchorElTop = node;
        },
        onClick: function onClick() {
          return _this2.handleClickButton("openTop");
        }
      }, "On top"), _react.default.createElement(_Popover.default, {
        classes: {
          paper: classes.popover
        },
        open: this.state.openTop,
        anchorEl: this.anchorElTop,
        anchorReference: "anchorEl",
        onClose: function onClose() {
          return _this2.handleClosePopover("openTop");
        },
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "center"
        }
      }, _react.default.createElement("h3", {
        className: classes.popoverHeader
      }, "Popover on top"), _react.default.createElement("div", {
        className: classes.popoverBody
      }, "Here will be some very useful information about his popover.")), _react.default.createElement(_Button.default, {
        buttonRef: function buttonRef(node) {
          _this2.anchorElBottom = node;
        },
        onClick: function onClick() {
          return _this2.handleClickButton("openBottom");
        }
      }, "On bottom"), _react.default.createElement(_Popover.default, {
        classes: {
          paper: classes.popover
        },
        open: this.state.openBottom,
        anchorEl: this.anchorElBottom,
        anchorReference: "anchorEl",
        onClose: function onClose() {
          return _this2.handleClosePopover("openBottom");
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      }, _react.default.createElement("h3", {
        className: classes.popoverHeader
      }, "Popover on bottom"), _react.default.createElement("div", {
        className: classes.popoverBody
      }, "Here will be some very useful information about his popover.")), _react.default.createElement(_Button.default, {
        buttonRef: function buttonRef(node) {
          _this2.anchorElRight = node;
        },
        onClick: function onClick() {
          return _this2.handleClickButton("openRight");
        }
      }, "On right"), _react.default.createElement(_Popover.default, {
        classes: {
          paper: classes.popover
        },
        open: this.state.openRight,
        anchorEl: this.anchorElRight,
        anchorReference: "anchorEl",
        onClose: function onClose() {
          return _this2.handleClosePopover("openRight");
        },
        anchorOrigin: {
          vertical: "center",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "center",
          horizontal: "left"
        }
      }, _react.default.createElement("h3", {
        className: classes.popoverHeader
      }, "Popover on right"), _react.default.createElement("div", {
        className: classes.popoverBody
      }, "Here will be some very useful information about his popover.")), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Tooltips")), _react.default.createElement(_Tooltip.default, {
        id: "tooltip-left",
        title: "Tooltip on left",
        placement: "left",
        classes: {
          tooltip: classes.tooltip
        }
      }, _react.default.createElement(_Button.default, null, "On left")), _react.default.createElement(_Tooltip.default, {
        id: "tooltip-top",
        title: "Tooltip on top",
        placement: "top",
        classes: {
          tooltip: classes.tooltip
        }
      }, _react.default.createElement(_Button.default, null, "On top")), _react.default.createElement(_Tooltip.default, {
        id: "tooltip-bottom",
        title: "Tooltip on bottom",
        placement: "bottom",
        classes: {
          tooltip: classes.tooltip
        }
      }, _react.default.createElement(_Button.default, null, "On bottom")), _react.default.createElement(_Tooltip.default, {
        id: "tooltip-right",
        title: "Tooltip on right",
        placement: "right",
        classes: {
          tooltip: classes.tooltip
        }
      }, _react.default.createElement(_Button.default, null, "On right")))), _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Carousel"))));
    }
  }]);

  return SectionJavascript;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_javascriptStyles.default)(SectionJavascript);

exports.default = _default;