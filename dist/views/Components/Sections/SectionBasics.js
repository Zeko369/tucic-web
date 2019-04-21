"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _nouislider = _interopRequireDefault(require("nouislider"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _FiberManualRecord = _interopRequireDefault(require("@material-ui/icons/FiberManualRecord"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.jsx"));

var _CustomLinearProgress = _interopRequireDefault(require("components/CustomLinearProgress/CustomLinearProgress.jsx"));

var _Pagination = _interopRequireDefault(require("components/Pagination/Pagination.jsx"));

var _Badge = _interopRequireDefault(require("components/Badge/Badge.jsx"));

var _basicsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SectionBasics =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionBasics, _React$Component);

  function SectionBasics(props) {
    var _this;

    _classCallCheck(this, SectionBasics);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionBasics).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.checked));
      };
    });

    _this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    _this.handleChangeEnabled = _this.handleChangeEnabled.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SectionBasics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _nouislider.default.create(this.refs.slider1, {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });

      _nouislider.default.create(this.refs.slider2, {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }
  }, {
    key: "handleChangeEnabled",
    value: function handleChangeEnabled(event) {
      this.setState({
        selectedEnabled: event.target.value
      });
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(value) {
      var checked = this.state.checked;
      var currentIndex = checked.indexOf(value);

      var newChecked = _toConsumableArray(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      this.setState({
        checked: newChecked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.sections
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h2", null, "Basic Elements")), _react.default.createElement("div", {
        id: "buttons"
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Buttons", _react.default.createElement("br", null), _react.default.createElement("small", null, "Pick your style"))), _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8
      }, _react.default.createElement(_Button.default, {
        color: "primary"
      }, "Default"), _react.default.createElement(_Button.default, {
        color: "primary",
        round: true
      }, "round"), _react.default.createElement(_Button.default, {
        color: "primary",
        round: true
      }, _react.default.createElement(_Favorite.default, {
        className: classes.icons
      }), " with icon"), _react.default.createElement(_Button.default, {
        justIcon: true,
        round: true,
        color: "primary"
      }, _react.default.createElement(_Favorite.default, {
        className: classes.icons
      })), _react.default.createElement(_Button.default, {
        color: "primary",
        simple: true
      }, "simple"))), _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "Pick your size"))), _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8
      }, _react.default.createElement(_Button.default, {
        color: "primary",
        size: "sm"
      }, "Small"), _react.default.createElement(_Button.default, {
        color: "primary"
      }, "Regular"), _react.default.createElement(_Button.default, {
        color: "primary",
        size: "lg"
      }, "Large"))), _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "Pick your color"))), _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8
      }, _react.default.createElement(_Button.default, null, "Default"), _react.default.createElement(_Button.default, {
        color: "primary"
      }, "Primary"), _react.default.createElement(_Button.default, {
        color: "info"
      }, "Info"), _react.default.createElement(_Button.default, {
        color: "success"
      }, "Success"), _react.default.createElement(_Button.default, {
        color: "warning"
      }, "Warning"), _react.default.createElement(_Button.default, {
        color: "danger"
      }, "Danger"), _react.default.createElement(_Button.default, {
        color: "rose"
      }, "Rose")))), _react.default.createElement("div", {
        className: classes.space50
      }), _react.default.createElement("div", {
        id: "inputs"
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Inputs")), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 4,
        md: 4,
        lg: 3
      }, _react.default.createElement(_CustomInput.default, {
        id: "regular",
        inputProps: {
          placeholder: "Regular"
        },
        formControlProps: {
          fullWidth: true
        }
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 4,
        md: 4,
        lg: 3
      }, _react.default.createElement(_CustomInput.default, {
        labelText: "With floating label",
        id: "float",
        formControlProps: {
          fullWidth: true
        }
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 4,
        md: 4,
        lg: 3
      }, _react.default.createElement(_CustomInput.default, {
        labelText: "Success input",
        id: "success",
        success: true,
        formControlProps: {
          fullWidth: true
        }
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 4,
        md: 4,
        lg: 3
      }, _react.default.createElement(_CustomInput.default, {
        labelText: "Error input",
        id: "error",
        error: true,
        formControlProps: {
          fullWidth: true
        }
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 4,
        md: 4,
        lg: 3
      }, _react.default.createElement(_CustomInput.default, {
        labelText: "With material Icons",
        id: "material",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          endAdornment: _react.default.createElement(_InputAdornment.default, {
            position: "end"
          }, _react.default.createElement(_People.default, null))
        }
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 4,
        md: 4,
        lg: 3
      }, _react.default.createElement(_CustomInput.default, {
        labelText: "With Font Awesome Icons",
        id: "font-awesome",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          endAdornment: _react.default.createElement(_InputAdornment.default, {
            position: "end"
          }, _react.default.createElement("i", {
            className: "fas fa-users"
          }))
        }
      })))), _react.default.createElement("div", {
        className: classes.space70
      }), _react.default.createElement("div", {
        id: "checkRadios"
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Checkboxes")), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Checkbox.default, {
          tabIndex: -1,
          onClick: function onClick() {
            return _this2.handleToggle(21);
          },
          checkedIcon: _react.default.createElement(_Check.default, {
            className: classes.checkedIcon
          }),
          icon: _react.default.createElement(_Check.default, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Unchecked"
      })), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Checkbox.default, {
          tabIndex: -1,
          onClick: function onClick() {
            return _this2.handleToggle(22);
          },
          checked: this.state.checked.indexOf(22) !== -1 ? true : false,
          checkedIcon: _react.default.createElement(_Check.default, {
            className: classes.checkedIcon
          }),
          icon: _react.default.createElement(_Check.default, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Checked"
      })), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        disabled: true,
        control: _react.default.createElement(_Checkbox.default, {
          tabIndex: -1,
          checkedIcon: _react.default.createElement(_Check.default, {
            className: classes.checkedIcon
          }),
          icon: _react.default.createElement(_Check.default, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked
          }
        }),
        classes: {
          label: classes.label,
          disabled: classes.disabledCheckboxAndRadio
        },
        label: "Disabled Unchecked"
      })), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        disabled: true,
        control: _react.default.createElement(_Checkbox.default, {
          tabIndex: -1,
          checked: this.state.checked.indexOf(24) !== -1 ? true : false,
          checkedIcon: _react.default.createElement(_Check.default, {
            className: classes.checkedIcon
          }),
          icon: _react.default.createElement(_Check.default, {
            className: classes.uncheckedIcon
          }),
          classes: {
            checked: classes.checked
          }
        }),
        classes: {
          label: classes.label,
          disabled: classes.disabledCheckboxAndRadio
        },
        label: "Disabled Checked"
      }))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Radio Buttons")), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Radio.default, {
          checked: this.state.selectedEnabled === "a",
          onChange: this.handleChangeEnabled,
          value: "a",
          name: "radio button enabled",
          "aria-label": "A",
          icon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioUnchecked
          }),
          checkedIcon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioChecked
          }),
          classes: {
            checked: classes.radio
          }
        }),
        classes: {
          label: classes.label
        },
        label: "First Radio"
      })), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Radio.default, {
          checked: this.state.selectedEnabled === "b",
          onChange: this.handleChangeEnabled,
          value: "b",
          name: "radio button enabled",
          "aria-label": "B",
          icon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioUnchecked
          }),
          checkedIcon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioChecked
          }),
          classes: {
            checked: classes.radio
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Second Radio"
      })), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        disabled: true,
        control: _react.default.createElement(_Radio.default, {
          checked: false,
          value: "a",
          name: "radio button disabled",
          "aria-label": "B",
          icon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioUnchecked
          }),
          checkedIcon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioChecked
          }),
          classes: {
            checked: classes.radio,
            disabled: classes.disabledCheckboxAndRadio
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Disabled Unchecked Radio"
      })), _react.default.createElement("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
      }, _react.default.createElement(_FormControlLabel.default, {
        disabled: true,
        control: _react.default.createElement(_Radio.default, {
          checked: true,
          value: "b",
          name: "radio button disabled",
          "aria-label": "B",
          icon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioUnchecked
          }),
          checkedIcon: _react.default.createElement(_FiberManualRecord.default, {
            className: classes.radioChecked
          }),
          classes: {
            checked: classes.radio,
            disabled: classes.disabledCheckboxAndRadio
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Disabled Checked Radio"
      }))), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Toggle Buttons")), _react.default.createElement("div", null, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Switch.default, {
          checked: this.state.checkedA,
          onChange: this.handleChange("checkedA"),
          value: "checkedA",
          classes: {
            switchBase: classes.switchBase,
            checked: classes.switchChecked,
            icon: classes.switchIcon,
            iconChecked: classes.switchIconChecked,
            bar: classes.switchBar
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Toggle is on"
      })), _react.default.createElement("div", null, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Switch.default, {
          checked: this.state.checkedB,
          onChange: this.handleChange("checkedB"),
          value: "checkedB",
          classes: {
            switchBase: classes.switchBase,
            checked: classes.switchChecked,
            icon: classes.switchIcon,
            iconChecked: classes.switchIconChecked,
            bar: classes.switchBar
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Toggle is off"
      }))))), _react.default.createElement("div", {
        className: classes.space70
      }), _react.default.createElement("div", {
        id: "progress"
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Progress Bars")), _react.default.createElement(_CustomLinearProgress.default, {
        variant: "determinate",
        color: "primary",
        value: 30
      }), _react.default.createElement(_CustomLinearProgress.default, {
        variant: "determinate",
        color: "info",
        value: 60
      }), _react.default.createElement(_CustomLinearProgress.default, {
        variant: "determinate",
        color: "success",
        value: 100,
        style: {
          width: "35%",
          display: "inline-block"
        }
      }), _react.default.createElement(_CustomLinearProgress.default, {
        variant: "determinate",
        color: "warning",
        value: 100,
        style: {
          width: "20%",
          display: "inline-block"
        }
      }), _react.default.createElement(_CustomLinearProgress.default, {
        variant: "determinate",
        color: "danger",
        value: 25,
        style: {
          width: "45%",
          display: "inline-block"
        }
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Pagination")), _react.default.createElement(_Pagination.default, {
        pages: [{
          text: 1
        }, {
          text: "..."
        }, {
          text: 5
        }, {
          text: 6
        }, {
          active: true,
          text: 7
        }, {
          text: 8
        }, {
          text: 9
        }, {
          text: "..."
        }, {
          text: 12
        }]
      }), _react.default.createElement(_Pagination.default, {
        pages: [{
          text: "PREV"
        }, {
          text: 1
        }, {
          text: 2
        }, {
          active: true,
          text: 3
        }, {
          text: 4
        }, {
          text: 5
        }, {
          text: "NEXT"
        }],
        color: "info"
      })))), _react.default.createElement("div", {
        id: "sliders"
      }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Sliders")), _react.default.createElement("div", {
        ref: "slider1",
        className: "slider-primary"
      }), _react.default.createElement("br", null), _react.default.createElement("div", {
        ref: "slider2",
        className: "slider-info"
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Badges")), _react.default.createElement(_Badge.default, null, "default"), _react.default.createElement(_Badge.default, {
        color: "primary"
      }, "primary"), _react.default.createElement(_Badge.default, {
        color: "info"
      }, "info"), _react.default.createElement(_Badge.default, {
        color: "success"
      }, "success"), _react.default.createElement(_Badge.default, {
        color: "warning"
      }, "warning"), _react.default.createElement(_Badge.default, {
        color: "danger"
      }, "danger"), _react.default.createElement(_Badge.default, {
        color: "rose"
      }, "rose"))))));
    }
  }]);

  return SectionBasics;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_basicsStyle.default)(SectionBasics);

exports.default = _default;