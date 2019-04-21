"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _icons = require("@material-ui/icons");

var _CustomDropdown = _interopRequireDefault(require("components/CustomDropdown/CustomDropdown.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _headerLinksStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/headerLinksStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function HeaderLinks(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes;
  return _react.default.createElement(_List.default, {
    className: classes.list
  }, _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_CustomDropdown.default, {
    noLiPadding: true,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _icons.Apps,
    dropdownList: [_react.default.createElement(_reactRouterDom.Link, {
      to: "/",
      className: classes.dropdownLink
    }, "All components"), _react.default.createElement("a", {
      href: "https://creativetimofficial.github.io/material-kit-react/#/documentation",
      target: "_blank",
      className: classes.dropdownLink
    }, "Documentation")]
  })), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "https://www.creative-tim.com/product/material-kit-react",
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, _react.default.createElement(_icons.CloudDownload, {
    className: classes.icons
  }), " Download")), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Tooltip.default, {
    id: "instagram-twitter",
    title: "Follow us on twitter",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, _react.default.createElement(_Button.default, {
    href: "https://twitter.com/CreativeTim",
    target: "_blank",
    color: "transparent",
    className: classes.navLink
  }, _react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-twitter"
  })))), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Tooltip.default, {
    id: "instagram-facebook",
    title: "Follow us on facebook",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, _react.default.createElement(_Button.default, {
    color: "transparent",
    href: "https://www.facebook.com/CreativeTim",
    target: "_blank",
    className: classes.navLink
  }, _react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook"
  })))), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Tooltip.default, {
    id: "instagram-tooltip",
    title: "Follow us on instagram",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, _react.default.createElement(_Button.default, {
    color: "transparent",
    href: "https://www.instagram.com/CreativeTimOfficial",
    target: "_blank",
    className: classes.navLink
  }, _react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-instagram"
  })))));
}

var _default = (0, _withStyles.default)(_headerLinksStyle.default)(HeaderLinks);

exports.default = _default;