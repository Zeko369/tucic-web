"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _paginationStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/paginationStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Pagination(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      pages = props.pages,
      color = props.color;
  return _react.default.createElement("ul", {
    className: classes.pagination
  }, pages.map(function (prop, key) {
    var _classNames;

    var paginationLink = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.paginationLink, true), _defineProperty(_classNames, classes[color], prop.active), _defineProperty(_classNames, classes.disabled, prop.disabled), _classNames));
    return _react.default.createElement("li", {
      className: classes.paginationItem,
      key: key
    }, prop.onClick !== undefined ? _react.default.createElement(_Button.default, {
      onClick: prop.onClick,
      className: paginationLink
    }, prop.text) : _react.default.createElement(_Button.default, {
      onClick: function onClick() {
        return console.log("you've clicked " + prop.text);
      },
      className: paginationLink
    }, prop.text));
  }));
}

Pagination.defaultProps = {
  color: "primary"
};
Pagination.propTypes = {
  classes: _propTypes.default.object.isRequired,
  pages: _propTypes.default.arrayOf(_propTypes.default.shape({
    active: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    text: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: _propTypes.default.func
  })).isRequired,
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger"])
};

var _default = (0, _withStyles.default)(_paginationStyle.default)(Pagination);

exports.default = _default;