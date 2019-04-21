"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _customLinearProgressStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/customLinearProgressStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CustomLinearProgress(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      color = props.color,
      rest = _objectWithoutProperties(props, ["classes", "color"]);

  return _react.default.createElement(_LinearProgress.default, _extends({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    }
  }));
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};
CustomLinearProgress.propTypes = {
  classes: _propTypes.default.object.isRequired,
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

var _default = (0, _withStyles.default)(_customLinearProgressStyle.default)(CustomLinearProgress);

exports.default = _default;