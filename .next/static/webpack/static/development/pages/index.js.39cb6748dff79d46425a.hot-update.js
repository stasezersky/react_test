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
        className: "jsx-3955909679",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3955909679",
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
        className: "jsx-3955909679",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.state.score), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3955909679",
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
        className: "jsx-3955909679",
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
        id: "3955909679",
        __self: this
      }, "body{font-family:'Arial';margin:auto;}ul{padding:0;}li{list-style:none;margin:5px 0;}button{background-color: padding:15px 32px;margin:5px;border:none;text-align:center;-webkit-text-decoration:none;text-decoration:none;display:inline-block;font-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFzZXplcnNreS9Eb2N1bWVudHMvcmVzdW1lL3Rlc3RzL0NvbW0taXQvY29udGFpbmVycy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEbUMsQUFHeUMsQUFLVixBQUlNLEFBTU0sVUFUdEIsTUFJYSxJQVRELFNBVVosR0FUQSxJQWNlLFdBQ0MsWUFDTSxrQkFDRyxrREFDQSxxQkFDTixlQUNqQiIsImZpbGUiOiIvVXNlcnMvc3Rhc2V6ZXJza3kvRG9jdW1lbnRzL3Jlc3VtZS90ZXN0cy9Db21tLWl0L2NvbnRhaW5lcnMvTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvcXVlc3Rpb25zXCJcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvblwiXG5pbXBvcnQgQW5zd2VycyBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnN3ZXJzXCJcbmltcG9ydCBDYWxjQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0NhbGNCdG5cIlxuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmlnaHRBcnJvd1wiXG5pbXBvcnQgTGVmdEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL0xlZnRBcnJvd1wiXG5cbmltcG9ydCBjYWxjU2NvcmUgZnJvbSBcIi4uL2xpYi9jYWxjU2NvcmVcIlxuXG5cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uczogZGF0YSxcbiAgICAgICAgICAgIGN1cnJlbnRJZHg6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2luYXRpb24gPSB0aGlzLmhhbmRsZVBhZ2luYXRpb24uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoZWNrID0gdGhpcy5oYW5kbGVDaGVjay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlU2NvcmUgPSB0aGlzLkNhbGN1bGF0ZVNjb3JlLmJpbmQodGhpcylcbiAgICB9XG4gICAgQ2FsY3VsYXRlU2NvcmUoKSB7XG4gICAgICAgIGxldCBzY29yZSA9IGNhbGNTY29yZSh0aGlzLnN0YXRlLnF1ZXN0aW9ucylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjb3JlIH0pXG4gICAgfVxuICAgIGhhbmRsZVBhZ2luYXRpb24odmFsKSB7XG4gICAgICAgIGxldCBuZXh0SWR4ID0gdGhpcy5zdGF0ZS5jdXJyZW50SWR4ICsgdmFsXG4gICAgICAgIGlmIChuZXh0SWR4IDwgdGhpcy5zdGF0ZS5xdWVzdGlvbnMubGVuZ3RoICYmIG5leHRJZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRJZHg6IG5leHRJZHggfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGVjayh2YWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHN0YXRlLnF1ZXN0aW9uc1tzdGF0ZS5jdXJyZW50SWR4XS5jaGVja2VkID0gcGFyc2VJbnQodmFsKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjaGVja2VkQW5zID0gdGhpcy5zdGF0ZS5xdWVzdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SWR4XS5jaGVja2VkXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uIGFzaz17dGhpcy5zdGF0ZS5xdWVzdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SWR4XS5xdWVzdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEFuc3dlcnMgYW5zbGlzdD17dGhpcy5zdGF0ZS5xdWVzdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SWR4XS5hbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2s9e3RoaXMuaGFuZGxlQ2hlY2t9IGNoZWNrZWRBbnM9e2NoZWNrZWRBbnN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5zY29yZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2FsY0J0biBjbGlja2VkPXt0aGlzLkNhbGN1bGF0ZVNjb3JlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMZWZ0QXJyb3cgY2xpY2tlZD17dGhpcy5oYW5kbGVQYWdpbmF0aW9ufSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXJyZW50SWR4ID09PSAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmlnaHRBcnJvdyBjbGlja2VkPXt0aGlzLmhhbmRsZVBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXJyZW50SWR4ID09PSB0aGlzLnN0YXRlLnF1ZXN0aW9ucy5sZW5ndGggLSAxfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjsiXX0= */\n/*@ sourceURL=/Users/stasezersky/Documents/resume/tests/Comm-it/containers/Main.js */"));
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ })

})
//# sourceMappingURL=index.js.39cb6748dff79d46425a.hot-update.js.map