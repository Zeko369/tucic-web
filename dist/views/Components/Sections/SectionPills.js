"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Dashboard = _interopRequireDefault(require("@material-ui/icons/Dashboard"));

var _Schedule = _interopRequireDefault(require("@material-ui/icons/Schedule"));

var _List = _interopRequireDefault(require("@material-ui/icons/List"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _NavPills = _interopRequireDefault(require("components/NavPills/NavPills.jsx"));

var _pillsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SectionPills =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionPills, _React$Component);

  function SectionPills() {
    _classCallCheck(this, SectionPills);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionPills).apply(this, arguments));
  }

  _createClass(SectionPills, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement("div", {
        className: classes.container
      }, _react.default.createElement("div", {
        id: "navigation-pills"
      }, _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, "Navigation Pills")), _react.default.createElement("div", {
        className: classes.title
      }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "With Icons"))), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8,
        lg: 6
      }, _react.default.createElement(_NavPills.default, {
        color: "primary",
        tabs: [{
          tabButton: "Dashboard",
          tabIcon: _Dashboard.default,
          tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
        }, {
          tabButton: "Schedule",
          tabIcon: _Schedule.default,
          tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
        }, {
          tabButton: "Tasks",
          tabIcon: _List.default,
          tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
        }]
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6
      }, _react.default.createElement(_NavPills.default, {
        color: "rose",
        horizontal: {
          tabsGrid: {
            xs: 12,
            sm: 4,
            md: 4
          },
          contentGrid: {
            xs: 12,
            sm: 8,
            md: 8
          }
        },
        tabs: [{
          tabButton: "Dashboard",
          tabIcon: _Dashboard.default,
          tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
        }, {
          tabButton: "Schedule",
          tabIcon: _Schedule.default,
          tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
        }]
      }))))));
    }
  }]);

  return SectionPills;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_pillsStyle.default)(SectionPills);

exports.default = _default;