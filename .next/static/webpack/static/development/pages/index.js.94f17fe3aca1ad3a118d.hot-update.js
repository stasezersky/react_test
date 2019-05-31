webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Main.js":
/*!****************************!*\
  !*** ./containers/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/questions */ "./data/questions.js");
/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_questions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Answers */ "./components/Answers.js");
/* harmony import */ var _components_CalcBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CalcBtn */ "./components/CalcBtn.js");
/* harmony import */ var _components_RightArrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/RightArrow */ "./components/RightArrow.js");
/* harmony import */ var _components_LeftArrow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/LeftArrow */ "./components/LeftArrow.js");
/* harmony import */ var _lib_calcScore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/calcScore */ "./lib/calcScore.js");







var _jsxFileName = "/Users/stasezersky/Documents/resume/tests/Comm-it/containers/Main.js";











var MainContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MainContainer, _Component);

  function MainContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MainContainer).call(this, props));
    _this.state = {
      questions: _data_questions__WEBPACK_IMPORTED_MODULE_9___default.a,
      currentIdx: 0
    };
    _this.handlePagination = _this.handlePagination.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleCheck = _this.handleCheck.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.CalculateScore = _this.CalculateScore.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MainContainer, [{
    key: "CalculateScore",
    value: function CalculateScore() {
      var score = Object(_lib_calcScore__WEBPACK_IMPORTED_MODULE_15__["default"])(this.state.questions);
      this.setState({
        score: score
      });
    }
  }, {
    key: "handlePagination",
    value: function handlePagination(val) {
      var nextIdx = this.state.currentIdx + val;

      if (nextIdx < this.state.questions.length && nextIdx >= 0) {
        this.setState({
          currentIdx: nextIdx
        });
      }
    }
  }, {
    key: "handleCheck",
    value: function handleCheck(val) {
      this.setState(function (state) {
        return state.questions[state.currentIdx].checked = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(val);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var checkedAns = this.state.questions[this.state.currentIdx].checked;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2705020164",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2705020164",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Question__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ask: this.state.questions[this.state.currentIdx].question,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Answers__WEBPACK_IMPORTED_MODULE_11__["default"], {
        anslist: this.state.questions[this.state.currentIdx].answers,
        handleCheck: this.handleCheck,
        checkedAns: checkedAns,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2705020164",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.state.score), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2705020164",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CalcBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
        clicked: this.CalculateScore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2705020164",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LeftArrow__WEBPACK_IMPORTED_MODULE_14__["default"], {
        clicked: this.handlePagination,
        disabled: this.state.currentIdx === 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_RightArrow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        clicked: this.handlePagination,
        disabled: this.state.currentIdx === this.state.questions.length - 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2705020164",
        __self: this
      }, "body{font-family:'Arial';}ul{padding:0;}li{list-style:none;margin:5px 0;}button{background-color: padding:15px 32px;margin:5px;border:none;text-align:center;-webkit-text-decoration:none;text-decoration:none;display:inline-block;font-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFzZXplcnNreS9Eb2N1bWVudHMvcmVzdW1lL3Rlc3RzL0NvbW0taXQvY29udGFpbmVycy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEbUMsQUFHeUMsQUFJVixBQUlNLEFBTU0sVUFUdEIsTUFJYSxJQVJiLFNBU0EsT0FLZSxXQUNDLFlBQ00sa0JBQ0csa0RBQ0EscUJBQ04sZUFDakIiLCJmaWxlIjoiL1VzZXJzL3N0YXNlemVyc2t5L0RvY3VtZW50cy9yZXN1bWUvdGVzdHMvQ29tbS1pdC9jb250YWluZXJzL01haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhL3F1ZXN0aW9uc1wiXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIlxuaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zd2Vyc1wiXG5pbXBvcnQgQ2FsY0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWxjQnRuXCJcbmltcG9ydCBSaWdodEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL1JpZ2h0QXJyb3dcIlxuaW1wb3J0IExlZnRBcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9MZWZ0QXJyb3dcIlxuXG5pbXBvcnQgY2FsY1Njb3JlIGZyb20gXCIuLi9saWIvY2FsY1Njb3JlXCJcblxuXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBxdWVzdGlvbnM6IGRhdGEsXG4gICAgICAgICAgICBjdXJyZW50SWR4OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQYWdpbmF0aW9uID0gdGhpcy5oYW5kbGVQYWdpbmF0aW9uLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVDaGVjayA9IHRoaXMuaGFuZGxlQ2hlY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLkNhbGN1bGF0ZVNjb3JlID0gdGhpcy5DYWxjdWxhdGVTY29yZS5iaW5kKHRoaXMpXG4gICAgfVxuICAgIENhbGN1bGF0ZVNjb3JlKCkge1xuICAgICAgICBsZXQgc2NvcmUgPSBjYWxjU2NvcmUodGhpcy5zdGF0ZS5xdWVzdGlvbnMpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY29yZSB9KVxuICAgIH1cbiAgICBoYW5kbGVQYWdpbmF0aW9uKHZhbCkge1xuICAgICAgICBsZXQgbmV4dElkeCA9IHRoaXMuc3RhdGUuY3VycmVudElkeCArIHZhbFxuICAgICAgICBpZiAobmV4dElkeCA8IHRoaXMuc3RhdGUucXVlc3Rpb25zLmxlbmd0aCAmJiBuZXh0SWR4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50SWR4OiBuZXh0SWR4IH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2hlY2sodmFsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiBzdGF0ZS5xdWVzdGlvbnNbc3RhdGUuY3VycmVudElkeF0uY2hlY2tlZCA9IHBhcnNlSW50KHZhbCkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2hlY2tlZEFucyA9IHRoaXMuc3RhdGUucXVlc3Rpb25zW3RoaXMuc3RhdGUuY3VycmVudElkeF0uY2hlY2tlZFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbiBhc2s9e3RoaXMuc3RhdGUucXVlc3Rpb25zW3RoaXMuc3RhdGUuY3VycmVudElkeF0ucXVlc3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJzIGFuc2xpc3Q9e3RoaXMuc3RhdGUucXVlc3Rpb25zW3RoaXMuc3RhdGUuY3VycmVudElkeF0uYW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrPXt0aGlzLmhhbmRsZUNoZWNrfSBjaGVja2VkQW5zPXtjaGVja2VkQW5zfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUuc2NvcmV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPENhbGNCdG4gY2xpY2tlZD17dGhpcy5DYWxjdWxhdGVTY29yZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGVmdEFycm93IGNsaWNrZWQ9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbn0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VycmVudElkeCA9PT0gMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QXJyb3cgY2xpY2tlZD17dGhpcy5oYW5kbGVQYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VycmVudElkeCA9PT0gdGhpcy5zdGF0ZS5xdWVzdGlvbnMubGVuZ3RoIC0gMX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/stasezersky/Documents/resume/tests/Comm-it/containers/Main.js */"));
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ })

})
//# sourceMappingURL=index.js.94f17fe3aca1ad3a118d.hot-update.js.map