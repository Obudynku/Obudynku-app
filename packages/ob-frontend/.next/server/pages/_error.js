"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "../../node_modules/next/dist/pages/_error.js":
/*!****************************************************!*\
  !*** ../../node_modules/next/dist/pages/_error.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                @media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nexports[\"default\"] = Error;\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"10px 23px 10px 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"inherit\",\n        margin: 0,\n        padding: 0\n    }\n}; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNIRCxrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUlDLEtBQUssR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOENBQW9CLENBQUMsQ0FBQztBQUNqRSxTQUFTRCxzQkFBc0IsQ0FBQ0csR0FBRyxFQUFFO0lBQ2pDLE9BQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRztRQUNqQ0wsT0FBTyxFQUFFSyxHQUFHO0tBQ2YsQ0FBQztDQUNMO0FBQ0QsTUFBTUUsV0FBVyxHQUFHO0FBQ2hCLE9BQUcsRUFBRSxhQUFhO0FBQ2xCLE9BQUcsRUFBRSw4QkFBOEI7QUFDbkMsT0FBRyxFQUFFLG9CQUFvQjtBQUN6QixPQUFHLEVBQUUsdUJBQXVCO0NBQy9CO0FBQ0QsU0FBU0MsZ0JBQWdCLENBQUMsRUFBRUMsR0FBRyxHQUFHQyxHQUFHLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFVLEdBQUdGLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7SUFDdEYsT0FBTztRQUNIQSxVQUFVO0tBQ2IsQ0FBQztDQUNMO0FBQ0QsTUFBTUMsS0FBSyxTQUFTWCxNQUFNLENBQUNELE9BQU8sQ0FBQ2EsU0FBUztJQUN4Q0MsTUFBTSxHQUFHO1FBQ0wsTUFBTSxFQUFFSCxVQUFVLEdBQUcsR0FBRyxJQUFJLENBQUNJLEtBQUs7UUFDbEMsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0QsS0FBSyxD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dkI7SUFDRGIsRUFBRSxFQUFFO1FBQ0FpQixRQUFRLEVBQUUsTUFBTTtRQUNoQkMsVUFBVSxFQUFFLFFBQVE7UUFDcEJOLFVBQVUsRUFBRSxTQUFTO1FBQ3JCRSxNQUFNLEVBQUUsQ0FBQztRQUNURSxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0osRUFFRCxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYi1mcm9udGVuZC8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz9mMWMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzdGF0dXNDb2RlcyA9IHtcbiAgICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gICAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXG4gICAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InXG59O1xuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7IHJlcyAsIGVyciAgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGVcbiAgICB9O1xufVxuY2xhc3MgRXJyb3IgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgY29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgICAgICAgICAgYm9keSB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjMDAwOyB9XG4gICAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5leHQtZXJyb3ItaDFcIixcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yO1xuRXJyb3IuZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJztcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG5FcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwib2JqIiwiX19lc01vZHVsZSIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2xhc3NOYW1lIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../../node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();