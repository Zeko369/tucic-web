"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

require("assets/scss/material-kit-react.scss?v=1.4.0");

var _LandingPage = _interopRequireDefault(require("views/LandingPage/LandingPage.jsx"));

var _ProfilePage = _interopRequireDefault(require("./views/kljucevi/ProfilePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pages for this product
var hist = (0, _history.createBrowserHistory)();

_reactDom.default.render(_react.default.createElement(_reactRouterDom.Router, {
  history: hist
}, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/izrada-kljuceva",
  component: _ProfilePage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  component: _LandingPage.default
}))), document.getElementById("root"));