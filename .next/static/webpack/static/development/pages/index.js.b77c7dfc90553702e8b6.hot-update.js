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
        className: "jsx-1532045194" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1532045194",
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
        className: "jsx-1532045194",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.state.score), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1532045194",
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
        className: "jsx-1532045194",
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
        id: "1532045194",
        __self: this
      }, "body{font-family:'Arial';}.content{max-width:500px;margin:auto;}ul{padding:0;}li{list-style:none;margin:5px 0;}button{background-color: padding:15px 32px;margin:5px;border:none;text-align:center;-webkit-text-decoration:none;text-decoration:none;display:inline-block;font-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFzZXplcnNreS9Eb2N1bWVudHMvcmVzdW1lL3Rlc3RzL0NvbW0taXQvY29udGFpbmVycy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEbUMsQUFHeUMsQUFHQSxBQUlWLEFBSU0sQUFNTSxVQVR0QixNQUpnQixBQVFILElBWGIsUUFJRSxDQVFGLE9BS2UsV0FDQyxZQUNNLGtCQUNHLGtEQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zdGFzZXplcnNreS9Eb2N1bWVudHMvcmVzdW1lL3Rlc3RzL0NvbW0taXQvY29udGFpbmVycy9NYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9xdWVzdGlvbnNcIlxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCJcbmltcG9ydCBBbnN3ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlcnNcIlxuaW1wb3J0IENhbGNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FsY0J0blwiXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9SaWdodEFycm93XCJcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGVmdEFycm93XCJcblxuaW1wb3J0IGNhbGNTY29yZSBmcm9tIFwiLi4vbGliL2NhbGNTY29yZVwiXG5cblxuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25zOiBkYXRhLFxuICAgICAgICAgICAgY3VycmVudElkeDogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnaW5hdGlvbiA9IHRoaXMuaGFuZGxlUGFnaW5hdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2sgPSB0aGlzLmhhbmRsZUNoZWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVTY29yZSA9IHRoaXMuQ2FsY3VsYXRlU2NvcmUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBDYWxjdWxhdGVTY29yZSgpIHtcbiAgICAgICAgbGV0IHNjb3JlID0gY2FsY1Njb3JlKHRoaXMuc3RhdGUucXVlc3Rpb25zKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2NvcmUgfSlcbiAgICB9XG4gICAgaGFuZGxlUGFnaW5hdGlvbih2YWwpIHtcbiAgICAgICAgbGV0IG5leHRJZHggPSB0aGlzLnN0YXRlLmN1cnJlbnRJZHggKyB2YWxcbiAgICAgICAgaWYgKG5leHRJZHggPCB0aGlzLnN0YXRlLnF1ZXN0aW9ucy5sZW5ndGggJiYgbmV4dElkeCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudElkeDogbmV4dElkeCB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoZWNrKHZhbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gc3RhdGUucXVlc3Rpb25zW3N0YXRlLmN1cnJlbnRJZHhdLmNoZWNrZWQgPSBwYXJzZUludCh2YWwpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNoZWNrZWRBbnMgPSB0aGlzLnN0YXRlLnF1ZXN0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJZHhdLmNoZWNrZWRcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uIGFzaz17dGhpcy5zdGF0ZS5xdWVzdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SWR4XS5xdWVzdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEFuc3dlcnMgYW5zbGlzdD17dGhpcy5zdGF0ZS5xdWVzdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SWR4XS5hbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2s9e3RoaXMuaGFuZGxlQ2hlY2t9IGNoZWNrZWRBbnM9e2NoZWNrZWRBbnN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5zY29yZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2FsY0J0biBjbGlja2VkPXt0aGlzLkNhbGN1bGF0ZVNjb3JlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMZWZ0QXJyb3cgY2xpY2tlZD17dGhpcy5oYW5kbGVQYWdpbmF0aW9ufSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXJyZW50SWR4ID09PSAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmlnaHRBcnJvdyBjbGlja2VkPXt0aGlzLmhhbmRsZVBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXJyZW50SWR4ID09PSB0aGlzLnN0YXRlLnF1ZXN0aW9ucy5sZW5ndGggLSAxfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjsiXX0= */\n/*@ sourceURL=/Users/stasezersky/Documents/resume/tests/Comm-it/containers/Main.js */"));
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ })

})
//# sourceMappingURL=index.js.b77c7dfc90553702e8b6.hot-update.js.map