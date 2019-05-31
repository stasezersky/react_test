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
        className: "jsx-1677073455",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1677073455",
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
        className: "jsx-1677073455",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.state.score), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1677073455",
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
        className: "jsx-1677073455",
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
        id: "1677073455",
        __self: this
      }, "body{font-family:'Arial';}div{margin:'auto';}ul{padding:0;}li{list-style:none;margin:5px 0;}button{background-color: padding:15px 32px;margin:5px;border:none;text-align:center;-webkit-text-decoration:none;text-decoration:none;display:inline-block;font-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFzZXplcnNreS9Eb2N1bWVudHMvcmVzdW1lL3Rlc3RzL0NvbW0taXQvY29udGFpbmVycy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEbUMsQUFHeUMsQUFHRixBQUdSLEFBSU0sQUFNTSxVQVR0QixJQUhBLEVBT2EsSUFWYixTQVdBLE9BS2UsV0FDQyxZQUNNLGtCQUNHLGtEQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zdGFzZXplcnNreS9Eb2N1bWVudHMvcmVzdW1lL3Rlc3RzL0NvbW0taXQvY29udGFpbmVycy9NYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9xdWVzdGlvbnNcIlxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCJcbmltcG9ydCBBbnN3ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlcnNcIlxuaW1wb3J0IENhbGNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FsY0J0blwiXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9SaWdodEFycm93XCJcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGVmdEFycm93XCJcblxuaW1wb3J0IGNhbGNTY29yZSBmcm9tIFwiLi4vbGliL2NhbGNTY29yZVwiXG5cblxuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25zOiBkYXRhLFxuICAgICAgICAgICAgY3VycmVudElkeDogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlUGFnaW5hdGlvbiA9IHRoaXMuaGFuZGxlUGFnaW5hdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2sgPSB0aGlzLmhhbmRsZUNoZWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVTY29yZSA9IHRoaXMuQ2FsY3VsYXRlU2NvcmUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBDYWxjdWxhdGVTY29yZSgpIHtcbiAgICAgICAgbGV0IHNjb3JlID0gY2FsY1Njb3JlKHRoaXMuc3RhdGUucXVlc3Rpb25zKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2NvcmUgfSlcbiAgICB9XG4gICAgaGFuZGxlUGFnaW5hdGlvbih2YWwpIHtcbiAgICAgICAgbGV0IG5leHRJZHggPSB0aGlzLnN0YXRlLmN1cnJlbnRJZHggKyB2YWxcbiAgICAgICAgaWYgKG5leHRJZHggPCB0aGlzLnN0YXRlLnF1ZXN0aW9ucy5sZW5ndGggJiYgbmV4dElkeCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudElkeDogbmV4dElkeCB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoZWNrKHZhbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gc3RhdGUucXVlc3Rpb25zW3N0YXRlLmN1cnJlbnRJZHhdLmNoZWNrZWQgPSBwYXJzZUludCh2YWwpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNoZWNrZWRBbnMgPSB0aGlzLnN0YXRlLnF1ZXN0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJZHhdLmNoZWNrZWRcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb24gYXNrPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJZHhdLnF1ZXN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8QW5zd2VycyBhbnNsaXN0PXt0aGlzLnN0YXRlLnF1ZXN0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJZHhdLmFuc3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVjaz17dGhpcy5oYW5kbGVDaGVja30gY2hlY2tlZEFucz17Y2hlY2tlZEFuc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLnNjb3JlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDYWxjQnRuIGNsaWNrZWQ9e3RoaXMuQ2FsY3VsYXRlU2NvcmV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPExlZnRBcnJvdyBjbGlja2VkPXt0aGlzLmhhbmRsZVBhZ2luYXRpb259IGRpc2FibGVkPXt0aGlzLnN0YXRlLmN1cnJlbnRJZHggPT09IDB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSaWdodEFycm93IGNsaWNrZWQ9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmN1cnJlbnRJZHggPT09IHRoaXMuc3RhdGUucXVlc3Rpb25zLmxlbmd0aCAtIDF9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/stasezersky/Documents/resume/tests/Comm-it/containers/Main.js */"));
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ })

})
//# sourceMappingURL=index.js.029f4fafa4670e9cb206.hot-update.js.map