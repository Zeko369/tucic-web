"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _footerStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/footerStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Footer(_ref) {
  var _classNames, _classNames2;

  var props = _extends({}, _ref);

  var classes = props.classes,
      whiteFont = props.whiteFont;
  var footerClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.footer, true), _defineProperty(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.a, true), _defineProperty(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return _react.default.createElement("footer", {
    className: footerClasses
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.left
  }, _react.default.createElement(_core.List, {
    className: classes.list
  }, _react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, _react.default.createElement("a", {
    href: "https://www.creative-tim.com/",
    className: classes.block,
    target: "_blank"
  }, "Creative Tim")), _react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, _react.default.createElement("a", {
    href: "https://www.creative-tim.com/presentation",
    className: classes.block,
    target: "_blank"
  }, "About us")), _react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, _react.default.createElement("a", {
    href: "http://blog.creative-tim.com/",
    className: classes.block,
    target: "_blank"
  }, "Blog")), _react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, _react.default.createElement("a", {
    href: "https://www.creative-tim.com/license",
    className: classes.block,
    target: "_blank"
  }, "Licenses")))), _react.default.createElement("div", {
    className: classes.right
  }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", _react.default.createElement(_Favorite.default, {
    className: classes.icon
  }), " by", " ", _react.default.createElement("a", {
    href: "https://www.creative-tim.com",
    className: aClasses,
    target: "_blank"
  }, "Creative Tim"), " ", "for a better web.")));
}

Footer.propTypes = {
  classes: _propTypes.default.object.isRequired,
  whiteFont: _propTypes.default.bool
};

var _default = (0, _core.withStyles)(_footerStyle.default)(Footer);

exports.default = _default;