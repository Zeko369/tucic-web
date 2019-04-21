"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _customInputStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/customInputStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CustomInput(_ref) {
  var _classNames, _classNames2, _classNames4;

  var props = _extends({}, _ref);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;
  var labelClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _defineProperty(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = (0, _classnames.default)(_defineProperty({}, inputRootCustomClasses, inputRootCustomClasses !== undefined));
  var inputClasses = (0, _classnames.default)((_classNames4 = {}, _defineProperty(_classNames4, classes.input, true), _defineProperty(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = (0, _classnames.default)(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return _react.default.createElement(_FormControl.default, _extends({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? _react.default.createElement(_InputLabel.default, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, _react.default.createElement(_Input.default, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)));
}

CustomInput.propTypes = {
  classes: _propTypes.default.object.isRequired,
  labelText: _propTypes.default.node,
  labelProps: _propTypes.default.object,
  id: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  formControlProps: _propTypes.default.object,
  inputRootCustomClasses: _propTypes.default.string,
  error: _propTypes.default.bool,
  success: _propTypes.default.bool,
  white: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(_customInputStyle.default)(CustomInput);

exports.default = _default;