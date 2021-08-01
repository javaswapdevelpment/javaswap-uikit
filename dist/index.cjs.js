'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_8311", "data-name": "Grupo 8311", transform: "translate(-4957.904 -9951.03)" },
            React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_2794", "data-name": "Rect\u00E1ngulo 2794", width: "15.425", height: "17.583", transform: "translate(4958.504 9951.63)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
            React__default['default'].createElement("g", { id: "Grupo_8310", "data-name": "Grupo 8310" },
                React__default['default'].createElement("line", { id: "L\u00EDnea_463", "data-name": "L\u00EDnea 463", y2: "3.875", transform: "translate(4963.008 9954.807)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("line", { id: "L\u00EDnea_464", "data-name": "L\u00EDnea 464", x1: "3.875", transform: "translate(4961.07 9956.744)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("line", { id: "L\u00EDnea_465", "data-name": "L\u00EDnea 465", x1: "2.74", y2: "2.74", transform: "translate(4968.055 9955.374)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("line", { id: "L\u00EDnea_466", "data-name": "L\u00EDnea 466", x1: "2.74", y1: "2.74", transform: "translate(4968.055 9955.374)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("line", { id: "L\u00EDnea_467", "data-name": "L\u00EDnea 467", x1: "3.875", transform: "translate(4967.487 9964.807)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("g", { id: "Grupo_8309", "data-name": "Grupo 8309" },
                    React__default['default'].createElement("line", { id: "L\u00EDnea_468", "data-name": "L\u00EDnea 468", x1: "3.875", transform: "translate(4961.07 9966.036)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                    React__default['default'].createElement("line", { id: "L\u00EDnea_469", "data-name": "L\u00EDnea 469", x1: "3.875", transform: "translate(4961.07 9963.578)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }))))));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 70.507 66.967" },
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-path" },
                React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_5950", "data-name": "Rect\u00E1ngulo 5950", width: "65.273", height: "40.045", transform: "translate(9352.848 2104.395)", fill: "none" })),
            React__default['default'].createElement("clipPath", { id: "clip-path-2" },
                React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_5951", "data-name": "Rect\u00E1ngulo 5951", width: "63.94", height: "20.218", transform: "translate(9353.189 2090.474)", fill: "none" }))),
        React__default['default'].createElement("g", { id: "Grupo_19130", "data-name": "Grupo 19130", transform: "translate(-9350.233 -2080.066)" },
            React__default['default'].createElement("path", { id: "Trazado_12828", "data-name": "Trazado 12828", d: "M9352.97,2115.249c-1.48-11.015,11.754-21.892,29.567-24.293,16.954-2.285,31.945,3.926,34.632,14.036a12.9,12.9,0,0,1,.315,1.566c.037.211.074.424.105.639,7.123,42.025-58.493,53.508-64.62,8.052", fill: "#986529" }),
            React__default['default'].createElement("g", { id: "Grupo_19126", "data-name": "Grupo 19126", opacity: "0.3" },
                React__default['default'].createElement("g", { id: "Grupo_19125", "data-name": "Grupo 19125" },
                    React__default['default'].createElement("g", { id: "Grupo_19124", "data-name": "Grupo 19124", "clip-path": "url(#clip-path)" },
                        React__default['default'].createElement("path", { id: "Trazado_12829", "data-name": "Trazado 12829", d: "M9352.967,2115.369a14.868,14.868,0,0,1,3.238-10.972c7.595,33.776,50.7,31.517,61.852,6.941,2.3,38.491-59.017,47.894-65.09,4.031", fill: "#570000" })))),
            React__default['default'].createElement("g", { id: "Grupo_19129", "data-name": "Grupo 19129", opacity: "0.6" },
                React__default['default'].createElement("g", { id: "Grupo_19128", "data-name": "Grupo 19128" },
                    React__default['default'].createElement("g", { id: "Grupo_19127", "data-name": "Grupo 19127", "clip-path": "url(#clip-path-2)" },
                        React__default['default'].createElement("path", { id: "Trazado_12830", "data-name": "Trazado 12830", d: "M9417.13,2104.886l-4.289.509c-5.345-7.353-18.244-11.412-32.508-9.436-12.458,1.727-22.664,7.593-27.143,14.734,2.107-9.277,13.988-17.61,29.259-19.721,16.945-2.343,31.957,3.814,34.681,13.914", fill: "#fff" })))),
            React__default['default'].createElement("path", { id: "Trazado_12831", "data-name": "Trazado 12831", d: "M9350.256,2114.429c-.656-12.146,12.98-23.434,31.834-26.043,9.086-1.258,17.974-.233,25.021,2.883,7.443,3.292,12.028,8.531,12.916,14.76,2.443,13.031-1.429,24.548-10.911,32.438a38.412,38.412,0,0,1-37.409,6.186c-11.8-4.572-19.377-14.846-21.325-28.926h0c-.061-.432-.1-.866-.125-1.3m2.71.941v0Zm62.5-3.724a35.8,35.8,0,0,0-.577-4.708c-.008-.043-.015-.085-.021-.129-.607-4.4-4.111-8.22-9.864-10.763-6.174-2.731-14.054-3.615-22.192-2.488-16.068,2.223-28.552,12.021-27.254,21.454,1.679,12.118,8.083,20.915,18.039,24.772a33.049,33.049,0,0,0,32.184-5.331c6.826-5.68,10.18-13.658,9.686-22.807", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12832", "data-name": "Trazado 12832", d: "M9350.362,2115.506a2.61,2.61,0,0,1,5.192-.5c1.3,9.4,15.98,15.473,32.055,13.249s28.56-12.077,27.254-21.452a2.611,2.611,0,0,1,5.173-.717c1.752,12.621-12.184,24.639-31.712,27.341s-36.194-5.075-37.942-17.7c-.009-.074-.017-.147-.02-.221", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12833", "data-name": "Trazado 12833", d: "M9379.015,2103.816c.3,2.149-.67,4.061-2.17,4.272s-2.959-1.36-3.261-3.508.668-4.061,2.169-4.271,2.96,1.359,3.262,3.507", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12834", "data-name": "Trazado 12834", d: "M9393.473,2100.986c.3,2.148-.67,4.06-2.17,4.271s-2.96-1.36-3.262-3.509.669-4.059,2.169-4.27,2.961,1.36,3.263,3.508", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12835", "data-name": "Trazado 12835", d: "M9363.649,2092.38a2.047,2.047,0,0,1-1.691-3.2,13.852,13.852,0,0,1,11.6-6.015,2.049,2.049,0,0,1-.023,4.1h-.019c-.014,0-.059,0-.072,0a9.684,9.684,0,0,0-8.1,4.227,2.045,2.045,0,0,1-1.7.895", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12836", "data-name": "Trazado 12836", d: "M9395.728,2086.123a2.032,2.032,0,0,1-1.134-.343,9.669,9.669,0,0,0-9.095-.871l-.069.029a2.05,2.05,0,0,1-1.588-3.779,13.863,13.863,0,0,1,13.025,1.209,2.05,2.05,0,0,1-1.14,3.755", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12837", "data-name": "Trazado 12837", d: "M9392.706,2100.284c0,.807-.472,1.461-1.056,1.461s-1.054-.654-1.054-1.461.473-1.462,1.054-1.462,1.056.655,1.056,1.462", fill: "#fff" }),
            React__default['default'].createElement("path", { id: "Trazado_12838", "data-name": "Trazado 12838", d: "M9378.409,2102.828c0,.807-.473,1.461-1.056,1.461s-1.054-.654-1.054-1.461.473-1.461,1.054-1.461,1.056.655,1.056,1.461", fill: "#fff" }),
            React__default['default'].createElement("path", { id: "Trazado_12839", "data-name": "Trazado 12839", d: "M9381.867,2119.647c-7.849,0-14.568-2.425-16.149-3.884a2.391,2.391,0,0,1,3.2-3.554c.771.544,5.923,2.591,12.634,2.655,5.621.058,13.55-1.318,19.558-8.148a2.39,2.39,0,1,1,3.589,3.158,29.093,29.093,0,0,1-20.888,9.723c-.653.033-1.3.05-1.941.05m-12.931-7.419.022.02-.022-.02", fill: "#570000" }),
            React__default['default'].createElement("path", { id: "Trazado_12840", "data-name": "Trazado 12840", d: "M9365.925,2118.119h-.057a2.05,2.05,0,0,1-1.992-2.1c.069-2.515,2.241-4.45,2.675-4.812a2.049,2.049,0,0,1,2.631,3.142,3.609,3.609,0,0,0-1.209,1.783,2.047,2.047,0,0,1-2.048,1.992", fill: "#570000" }))));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "10 10 90 90" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "linear-gradient", x1: "0.497", y1: "-0.01", x2: "0.503", y2: "1.013", gradientUnits: "objectBoundingBox" },
                React__default['default'].createElement("stop", { offset: "0", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.01", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.069", "stop-color": "#f5d485" }),
                React__default['default'].createElement("stop", { offset: "0.246", "stop-color": "#da9e72" }),
                React__default['default'].createElement("stop", { offset: "0.42", "stop-color": "#c37261" }),
                React__default['default'].createElement("stop", { offset: "0.586", "stop-color": "#b14f54" }),
                React__default['default'].createElement("stop", { offset: "0.742", "stop-color": "#a5364b" }),
                React__default['default'].createElement("stop", { offset: "0.884", "stop-color": "#9d2745" }),
                React__default['default'].createElement("stop", { offset: "1", "stop-color": "#9b2244" })),
            React__default['default'].createElement("filter", { id: "Elipse_1140", x: "0", y: "0", width: "104", height: "104", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feOffset", null),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "8", result: "blur" }),
                React__default['default'].createElement("feFlood", { "flood-color": "#ffc2c2" }),
                React__default['default'].createElement("feComposite", { operator: "in", in2: "blur" }),
                React__default['default'].createElement("feComposite", { in: "SourceGraphic" })),
            React__default['default'].createElement("clipPath", { id: "clip-path" },
                React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_5933", "data-name": "Rect\u00E1ngulo 5933", width: "33.661", height: "20.651", transform: "translate(8414.82 2320.23)", fill: "none" })),
            React__default['default'].createElement("clipPath", { id: "clip-path-2" },
                React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_5934", "data-name": "Rect\u00E1ngulo 5934", width: "32.974", height: "10.426", transform: "translate(8414.997 2313.051)", fill: "none" }))),
        React__default['default'].createElement("g", { id: "Grupo_19088", "data-name": "Grupo 19088", transform: "translate(-8379.652 -2272.95)" },
            React__default['default'].createElement("g", { transform: "matrix(1, 0, 0, 1, 8379.65, 2272.95)", filter: "url(#Elipse_1140)" },
                React__default['default'].createElement("circle", { id: "Elipse_1140-2", "data-name": "Elipse 1140", cx: "28", cy: "28", r: "28", transform: "translate(24 24)", fill: "url(#linear-gradient)" })),
            React__default['default'].createElement("g", { id: "Grupo_19087", "data-name": "Grupo 19087" },
                React__default['default'].createElement("path", { id: "Trazado_12787", "data-name": "Trazado 12787", d: "M8414.884,2325.827c-.764-5.68,6.062-11.289,15.247-12.528,8.743-1.178,16.475,2.025,17.86,7.239a6.851,6.851,0,0,1,.163.807c.019.109.038.219.054.33,3.673,21.672-30.165,27.593-33.324,4.152", fill: "#986529" }),
                React__default['default'].createElement("g", { id: "Grupo_19083", "data-name": "Grupo 19083", opacity: "0.3" },
                    React__default['default'].createElement("g", { id: "Grupo_19082", "data-name": "Grupo 19082" },
                        React__default['default'].createElement("g", { id: "Grupo_19081", "data-name": "Grupo 19081", "clip-path": "url(#clip-path)" },
                            React__default['default'].createElement("path", { id: "Trazado_12788", "data-name": "Trazado 12788", d: "M8414.882,2325.889a7.677,7.677,0,0,1,1.67-5.659c3.917,17.419,26.148,16.254,31.9,3.58,1.188,19.85-30.436,24.7-33.567,2.079", fill: "#570000" })))),
                React__default['default'].createElement("g", { id: "Grupo_19086", "data-name": "Grupo 19086", opacity: "0.6" },
                    React__default['default'].createElement("g", { id: "Grupo_19085", "data-name": "Grupo 19085" },
                        React__default['default'].createElement("g", { id: "Grupo_19084", "data-name": "Grupo 19084", "clip-path": "url(#clip-path-2)" },
                            React__default['default'].createElement("path", { id: "Trazado_12789", "data-name": "Trazado 12789", d: "M8447.971,2320.483l-2.212.262c-2.756-3.791-9.408-5.885-16.764-4.866-6.425.891-11.688,3.916-14,7.6,1.087-4.784,7.214-9.082,15.089-10.171,8.739-1.208,16.48,1.968,17.885,7.176", fill: "#fff" })))),
                React__default['default'].createElement("path", { id: "Trazado_12790", "data-name": "Trazado 12790", d: "M8413.484,2325.4c-.338-6.264,6.693-12.085,16.417-13.43a24.2,24.2,0,0,1,12.9,1.487c3.839,1.7,6.2,4.4,6.661,7.611,1.26,6.72-.737,12.66-5.627,16.728a19.81,19.81,0,0,1-19.292,3.191c-6.087-2.358-9.993-7.656-11-14.917h0c-.031-.223-.052-.446-.063-.669m1.4.485v0Zm32.229-1.92a18.726,18.726,0,0,0-.3-2.428q-.007-.033-.012-.066c-.312-2.268-2.12-4.239-5.087-5.551a21.5,21.5,0,0,0-11.445-1.283c-8.285,1.146-14.723,6.2-14.054,11.064.865,6.249,4.169,10.786,9.3,12.775a17.045,17.045,0,0,0,16.6-2.749,13.826,13.826,0,0,0,5-11.762", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12791", "data-name": "Trazado 12791", d: "M8413.539,2325.959a1.346,1.346,0,0,1,2.678-.255c.671,4.85,8.241,7.98,16.53,6.833s14.728-6.228,14.055-11.063a1.347,1.347,0,0,1,2.668-.37c.9,6.509-6.283,12.707-16.354,14.1s-18.665-2.617-19.567-9.131c0-.038-.008-.075-.01-.114", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12792", "data-name": "Trazado 12792", d: "M8428.315,2319.931c.155,1.108-.346,2.094-1.119,2.2s-1.526-.7-1.683-1.809.346-2.094,1.119-2.2,1.526.7,1.683,1.809", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12793", "data-name": "Trazado 12793", d: "M8435.771,2318.471c.155,1.108-.346,2.095-1.119,2.2s-1.527-.7-1.683-1.809.346-2.094,1.119-2.2,1.526.7,1.683,1.809", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12794", "data-name": "Trazado 12794", d: "M8420.391,2314.033a1.055,1.055,0,0,1-.872-1.651,7.145,7.145,0,0,1,5.984-3.1,1.057,1.057,0,0,1-.012,2.114h-.01l-.037,0a4.994,4.994,0,0,0-4.179,2.18,1.057,1.057,0,0,1-.875.461", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12795", "data-name": "Trazado 12795", d: "M8436.934,2310.807a1.057,1.057,0,0,1-.585-.177,4.984,4.984,0,0,0-4.689-.449l-.035.015a1.057,1.057,0,0,1-.819-1.949,7.148,7.148,0,0,1,6.717.624,1.056,1.056,0,0,1-.588,1.936", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12796", "data-name": "Trazado 12796", d: "M8435.375,2318.109c0,.417-.243.754-.544.754s-.543-.337-.543-.754.243-.753.543-.753.544.337.544.753", fill: "#fff" }),
                React__default['default'].createElement("path", { id: "Trazado_12797", "data-name": "Trazado 12797", d: "M8428,2319.422c0,.416-.244.753-.544.753s-.544-.337-.544-.753.243-.754.544-.754.544.338.544.754", fill: "#fff" }),
                React__default['default'].createElement("path", { id: "Trazado_12798", "data-name": "Trazado 12798", d: "M8429.786,2328.095c-4.047,0-7.512-1.25-8.328-2a1.233,1.233,0,0,1,1.649-1.833,15.254,15.254,0,0,0,6.516,1.369,12.893,12.893,0,0,0,10.085-4.2,1.232,1.232,0,1,1,1.851,1.628,15,15,0,0,1-10.771,5.014q-.507.025-1,.026m-6.668-3.826.011.01-.011-.01", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12799", "data-name": "Trazado 12799", d: "M8421.565,2327.307h-.03a1.057,1.057,0,0,1-1.027-1.085,3.76,3.76,0,0,1,1.38-2.482,1.057,1.057,0,0,1,1.357,1.62,1.851,1.851,0,0,0-.624.92,1.057,1.057,0,0,1-1.056,1.027", fill: "#570000" })))));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("image", { id: "home", width: "64", height: "64", href: "data:image/png;base64,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" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "90", viewBox: "10 10 90 90" },
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "linear-gradient", x1: "0.497", y1: "-0.01", x2: "0.503", y2: "1.013", gradientUnits: "objectBoundingBox" },
                React__default['default'].createElement("stop", { offset: "0", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.01", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.069", "stop-color": "#f5d485" }),
                React__default['default'].createElement("stop", { offset: "0.246", "stop-color": "#da9e72" }),
                React__default['default'].createElement("stop", { offset: "0.42", "stop-color": "#c37261" }),
                React__default['default'].createElement("stop", { offset: "0.586", "stop-color": "#b14f54" }),
                React__default['default'].createElement("stop", { offset: "0.742", "stop-color": "#a5364b" }),
                React__default['default'].createElement("stop", { offset: "0.884", "stop-color": "#9d2745" }),
                React__default['default'].createElement("stop", { offset: "1", "stop-color": "#9b2244" })),
            React__default['default'].createElement("filter", { id: "Elipse_1140", x: "0", y: "0", width: "104", height: "104", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "8", result: "blur" }),
                React__default['default'].createElement("feFlood", { "flood-color": "#ffc2c2" }),
                React__default['default'].createElement("feComposite", { operator: "in", in2: "blur" }),
                React__default['default'].createElement("feComposite", { in: "SourceGraphic" })),
            React__default['default'].createElement("clipPath", { id: "clip-path" },
                React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_5933", "data-name": "Rect\u00E1ngulo 5933", width: "33.661", height: "20.651", transform: "translate(8414.82 2320.23)", fill: "none" })),
            React__default['default'].createElement("clipPath", { id: "clip-path-2" },
                React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_5934", "data-name": "Rect\u00E1ngulo 5934", width: "32.974", height: "10.426", transform: "translate(8414.997 2313.051)", fill: "none" }))),
        React__default['default'].createElement("g", { id: "Grupo_19088", "data-name": "Grupo 19088", transform: "translate(-8379.652 -2272.95)" },
            React__default['default'].createElement("g", { transform: "matrix(1, 0, 0, 1, 8379.65, 2272.95)", filter: "url(#Elipse_1140)" },
                React__default['default'].createElement("circle", { id: "Elipse_1140-2", "data-name": "Elipse 1140", cx: "28", cy: "28", r: "28", transform: "translate(24 24)", fill: "url(#linear-gradient)" })),
            React__default['default'].createElement("g", { id: "Grupo_19087", "data-name": "Grupo 19087" },
                React__default['default'].createElement("path", { id: "Trazado_12787", "data-name": "Trazado 12787", d: "M8414.884,2325.827c-.764-5.68,6.062-11.289,15.247-12.528,8.743-1.178,16.475,2.025,17.86,7.239a6.851,6.851,0,0,1,.163.807c.019.109.038.219.054.33,3.673,21.672-30.165,27.593-33.324,4.152", fill: "#986529" }),
                React__default['default'].createElement("g", { id: "Grupo_19083", "data-name": "Grupo 19083", opacity: "0.3" },
                    React__default['default'].createElement("g", { id: "Grupo_19082", "data-name": "Grupo 19082" },
                        React__default['default'].createElement("g", { id: "Grupo_19081", "data-name": "Grupo 19081", "clip-path": "url(#clip-path)" },
                            React__default['default'].createElement("path", { id: "Trazado_12788", "data-name": "Trazado 12788", d: "M8414.882,2325.889a7.677,7.677,0,0,1,1.67-5.659c3.917,17.419,26.148,16.254,31.9,3.58,1.188,19.85-30.436,24.7-33.567,2.079", fill: "#570000" })))),
                React__default['default'].createElement("g", { id: "Grupo_19086", "data-name": "Grupo 19086", opacity: "0.6" },
                    React__default['default'].createElement("g", { id: "Grupo_19085", "data-name": "Grupo 19085" },
                        React__default['default'].createElement("g", { id: "Grupo_19084", "data-name": "Grupo 19084", "clip-path": "url(#clip-path-2)" },
                            React__default['default'].createElement("path", { id: "Trazado_12789", "data-name": "Trazado 12789", d: "M8447.971,2320.483l-2.212.262c-2.756-3.791-9.408-5.885-16.764-4.866-6.425.891-11.688,3.916-14,7.6,1.087-4.784,7.214-9.082,15.089-10.171,8.739-1.208,16.48,1.968,17.885,7.176", fill: "#fff" })))),
                React__default['default'].createElement("path", { id: "Trazado_12790", "data-name": "Trazado 12790", d: "M8413.484,2325.4c-.338-6.264,6.693-12.085,16.417-13.43a24.2,24.2,0,0,1,12.9,1.487c3.839,1.7,6.2,4.4,6.661,7.611,1.26,6.72-.737,12.66-5.627,16.728a19.81,19.81,0,0,1-19.292,3.191c-6.087-2.358-9.993-7.656-11-14.917h0c-.031-.223-.052-.446-.063-.669m1.4.485v0Zm32.229-1.92a18.726,18.726,0,0,0-.3-2.428q-.007-.033-.012-.066c-.312-2.268-2.12-4.239-5.087-5.551a21.5,21.5,0,0,0-11.445-1.283c-8.285,1.146-14.723,6.2-14.054,11.064.865,6.249,4.169,10.786,9.3,12.775a17.045,17.045,0,0,0,16.6-2.749,13.826,13.826,0,0,0,5-11.762", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12791", "data-name": "Trazado 12791", d: "M8413.539,2325.959a1.346,1.346,0,0,1,2.678-.255c.671,4.85,8.241,7.98,16.53,6.833s14.728-6.228,14.055-11.063a1.347,1.347,0,0,1,2.668-.37c.9,6.509-6.283,12.707-16.354,14.1s-18.665-2.617-19.567-9.131c0-.038-.008-.075-.01-.114", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12792", "data-name": "Trazado 12792", d: "M8428.315,2319.931c.155,1.108-.346,2.094-1.119,2.2s-1.526-.7-1.683-1.809.346-2.094,1.119-2.2,1.526.7,1.683,1.809", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12793", "data-name": "Trazado 12793", d: "M8435.771,2318.471c.155,1.108-.346,2.095-1.119,2.2s-1.527-.7-1.683-1.809.346-2.094,1.119-2.2,1.526.7,1.683,1.809", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12794", "data-name": "Trazado 12794", d: "M8420.391,2314.033a1.055,1.055,0,0,1-.872-1.651,7.145,7.145,0,0,1,5.984-3.1,1.057,1.057,0,0,1-.012,2.114h-.01l-.037,0a4.994,4.994,0,0,0-4.179,2.18,1.057,1.057,0,0,1-.875.461", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12795", "data-name": "Trazado 12795", d: "M8436.934,2310.807a1.057,1.057,0,0,1-.585-.177,4.984,4.984,0,0,0-4.689-.449l-.035.015a1.057,1.057,0,0,1-.819-1.949,7.148,7.148,0,0,1,6.717.624,1.056,1.056,0,0,1-.588,1.936", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12796", "data-name": "Trazado 12796", d: "M8435.375,2318.109c0,.417-.243.754-.544.754s-.543-.337-.543-.754.243-.753.543-.753.544.337.544.753", fill: "#fff" }),
                React__default['default'].createElement("path", { id: "Trazado_12797", "data-name": "Trazado 12797", d: "M8428,2319.422c0,.416-.244.753-.544.753s-.544-.337-.544-.753.243-.754.544-.754.544.338.544.754", fill: "#fff" }),
                React__default['default'].createElement("path", { id: "Trazado_12798", "data-name": "Trazado 12798", d: "M8429.786,2328.095c-4.047,0-7.512-1.25-8.328-2a1.233,1.233,0,0,1,1.649-1.833,15.254,15.254,0,0,0,6.516,1.369,12.893,12.893,0,0,0,10.085-4.2,1.232,1.232,0,1,1,1.851,1.628,15,15,0,0,1-10.771,5.014q-.507.025-1,.026m-6.668-3.826.011.01-.011-.01", fill: "#570000" }),
                React__default['default'].createElement("path", { id: "Trazado_12799", "data-name": "Trazado 12799", d: "M8421.565,2327.307h-.03a1.057,1.057,0,0,1-1.027-1.085,3.76,3.76,0,0,1,1.38-2.482,1.057,1.057,0,0,1,1.357,1.62,1.851,1.851,0,0,0-.624.92,1.057,1.057,0,0,1-1.056,1.027", fill: "#570000" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "90", viewBox: "0 0 90 90" },
        React__default['default'].createElement("image", { id: "home", width: "90", height: "90", href: "data:image/png;base64,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" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "linear-gradient", x1: "0.497", y1: "-0.01", x2: "0.503", y2: "1.013", gradientUnits: "objectBoundingBox" },
                React__default['default'].createElement("stop", { offset: "0", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.01", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.069", "stop-color": "#f5d485" }),
                React__default['default'].createElement("stop", { offset: "0.246", "stop-color": "#da9e72" }),
                React__default['default'].createElement("stop", { offset: "0.42", "stop-color": "#c37261" }),
                React__default['default'].createElement("stop", { offset: "0.586", "stop-color": "#b14f54" }),
                React__default['default'].createElement("stop", { offset: "0.742", "stop-color": "#a5364b" }),
                React__default['default'].createElement("stop", { offset: "0.884", "stop-color": "#9d2745" }),
                React__default['default'].createElement("stop", { offset: "1", "stop-color": "#9b2244" })),
            React__default['default'].createElement("filter", { id: "Elipse_73", x: "0", y: "0", width: "104", height: "104", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "8", result: "blur" }),
                React__default['default'].createElement("feFlood", { "flood-color": "#ffc2c2", "flood-opacity": "0.502" }),
                React__default['default'].createElement("feComposite", { operator: "in", in2: "blur" }),
                React__default['default'].createElement("feComposite", { in: "SourceGraphic" }))),
        React__default['default'].createElement("g", { id: "Grupo_1780", "data-name": "Grupo 1780", transform: "translate(-2888.973 -14080.129)" },
            React__default['default'].createElement("g", { transform: "matrix(1, 0, 0, 1, 2888.97, 14080.13)", filter: "url(#Elipse_73)" },
                React__default['default'].createElement("circle", { id: "Elipse_73-2", "data-name": "Elipse 73", cx: "28", cy: "28", r: "28", transform: "translate(24 24)", fill: "url(#linear-gradient)" }))),
        React__default['default'].createElement("g", { id: "Grupo_1784", "data-name": "Grupo 1784", transform: "translate(-2888.973 -14080.129)" },
            React__default['default'].createElement("image", { id: "Rect\u00E1ngulo_589", "data-name": "Rect\u00E1ngulo 589", width: "34", height: "56", transform: "translate(2923.911 14106.036)", opacity: "0.55", href: "data:image/png;base64,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" }),
            React__default['default'].createElement("g", { id: "Grupo_1783", "data-name": "Grupo 1783" },
                React__default['default'].createElement("path", { id: "Trazado_1039", "data-name": "Trazado 1039", d: "M2945.155,14112.886a.98.98,0,0,0-.713,1.085c.447,3.031-1.207,5.713-3.7,6.143a5.515,5.515,0,0,1-5.861-3.539.978.978,0,0,0-1.16-.562l-2.128.583a.98.98,0,0,0-.688,1.2,63.7,63.7,0,0,1,0,31.738.98.98,0,0,0,.688,1.2l2.212.605a.977.977,0,0,0,1.16-.562,5.507,5.507,0,0,1,5.863-3.545c2.495.435,4.145,3.116,3.7,6.149a.979.979,0,0,0,.712,1.085q1.087.3,2.176.595a1,1,0,0,0,1.226-.705,82.059,82.059,0,0,0,0-41.376,1,1,0,0,0-1.226-.705Zm2.211,19.913q-1.021,1.211-2.082,2.356a.753.753,0,0,0-.181.613q.225,1.682.375,3.385c.05.572-.477.96-.869.652q-.919-.722-1.852-1.415a1.492,1.492,0,0,0-1.6-.1q-1.011.552-2.029,1.073a.574.574,0,0,1-.765-.717q.378-1.509.691-3.039a.658.658,0,0,0-.154-.573q-1.017-1.087-2.066-2.11a.613.613,0,0,1,.292-1.038c.936-.15,1.868-.3,2.8-.464a.56.56,0,0,0,.425-.373q.544-1.469,1.027-2.988a.53.53,0,0,1,1.008-.078q.714,1.444,1.371,2.938a.57.57,0,0,0,.451.361q1.413.16,2.825.335A.733.733,0,0,1,2947.366,14132.8Z", fill: "#fff" })))));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "linear-gradient", x1: "0.497", y1: "-0.01", x2: "0.503", y2: "1.013", gradientUnits: "objectBoundingBox" },
                React__default['default'].createElement("stop", { offset: "0", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.01", "stop-color": "#ffe88d" }),
                React__default['default'].createElement("stop", { offset: "0.069", "stop-color": "#f5d485" }),
                React__default['default'].createElement("stop", { offset: "0.246", "stop-color": "#da9e72" }),
                React__default['default'].createElement("stop", { offset: "0.42", "stop-color": "#c37261" }),
                React__default['default'].createElement("stop", { offset: "0.586", "stop-color": "#b14f54" }),
                React__default['default'].createElement("stop", { offset: "0.742", "stop-color": "#a5364b" }),
                React__default['default'].createElement("stop", { offset: "0.884", "stop-color": "#9d2745" }),
                React__default['default'].createElement("stop", { offset: "1", "stop-color": "#9b2244" })),
            React__default['default'].createElement("filter", { id: "Elipse_73", x: "0", y: "0", width: "104", height: "104", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "8", result: "blur" }),
                React__default['default'].createElement("feFlood", { "flood-color": "#ffc2c2", "flood-opacity": "0.502" }),
                React__default['default'].createElement("feComposite", { operator: "in", in2: "blur" }),
                React__default['default'].createElement("feComposite", { in: "SourceGraphic" }))),
        React__default['default'].createElement("g", { id: "Grupo_1780", "data-name": "Grupo 1780", transform: "translate(-2888.973 -14080.129)" },
            React__default['default'].createElement("g", { transform: "matrix(1, 0, 0, 1, 2888.97, 14080.13)", filter: "url(#Elipse_73)" },
                React__default['default'].createElement("circle", { id: "Elipse_73-2", "data-name": "Elipse 73", cx: "28", cy: "28", r: "28", transform: "translate(24 24)", fill: "url(#linear-gradient)" }))),
        React__default['default'].createElement("g", { id: "Grupo_1784", "data-name": "Grupo 1784", transform: "translate(-2888.973 -14080.129)" },
            React__default['default'].createElement("image", { id: "Rect\u00E1ngulo_589", "data-name": "Rect\u00E1ngulo 589", width: "34", height: "56", transform: "translate(2923.911 14106.036)", opacity: "0.55", href: "data:image/png;base64,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" }),
            React__default['default'].createElement("g", { id: "Grupo_1783", "data-name": "Grupo 1783" },
                React__default['default'].createElement("path", { id: "Trazado_1039", "data-name": "Trazado 1039", d: "M2945.155,14112.886a.98.98,0,0,0-.713,1.085c.447,3.031-1.207,5.713-3.7,6.143a5.515,5.515,0,0,1-5.861-3.539.978.978,0,0,0-1.16-.562l-2.128.583a.98.98,0,0,0-.688,1.2,63.7,63.7,0,0,1,0,31.738.98.98,0,0,0,.688,1.2l2.212.605a.977.977,0,0,0,1.16-.562,5.507,5.507,0,0,1,5.863-3.545c2.495.435,4.145,3.116,3.7,6.149a.979.979,0,0,0,.712,1.085q1.087.3,2.176.595a1,1,0,0,0,1.226-.705,82.059,82.059,0,0,0,0-41.376,1,1,0,0,0-1.226-.705Zm2.211,19.913q-1.021,1.211-2.082,2.356a.753.753,0,0,0-.181.613q.225,1.682.375,3.385c.05.572-.477.96-.869.652q-.919-.722-1.852-1.415a1.492,1.492,0,0,0-1.6-.1q-1.011.552-2.029,1.073a.574.574,0,0,1-.765-.717q.378-1.509.691-3.039a.658.658,0,0,0-.154-.573q-1.017-1.087-2.066-2.11a.613.613,0,0,1,.292-1.038c.936-.15,1.868-.3,2.8-.464a.56.56,0,0,0,.425-.373q.544-1.469,1.027-2.988a.53.53,0,0,1,1.008-.078q.714,1.444,1.371,2.938a.57.57,0,0,0,.451.361q1.413.16,2.825.335A.733.733,0,0,1,2947.366,14132.8Z", fill: "#fff" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_8325", "data-name": "Grupo 8325", transform: "translate(-5003.416 -10164.223)" },
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_2801", "data-name": "Rect\u00E1ngulo 2801", d: "M0,0H3.611a0,0,0,0,1,0,0V8.286a1.75,1.75,0,0,1-1.75,1.75H1.75A1.75,1.75,0,0,1,0,8.286V0A0,0,0,0,1,0,0Z", transform: "matrix(0.721, 0.693, -0.693, 0.721, 5011.075, 10174.059)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1" }),
            React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_2802", "data-name": "Rect\u00E1ngulo 2802", width: "5.33", height: "2.149", rx: "1.042", transform: "matrix(0.721, 0.693, -0.693, 0.721, 5011.944, 10171.912)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1" }),
            React__default['default'].createElement("line", { id: "L\u00EDnea_471", "data-name": "L\u00EDnea 471", x1: "5.628", y2: "5.859", transform: "translate(5013.854 10167.913)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1" }),
            React__default['default'].createElement("path", { id: "Trazado_4597", "data-name": "Trazado 4597", d: "M5021.252,10164.755c-3.2.764-6.368,1.5-9.893,2.626a.949.949,0,0,0-.352,1.7,40.875,40.875,0,0,1,7.676,7.374.949.949,0,0,0,1.689-.421c.982-3.566,1.592-6.763,2.226-9.99A1.146,1.146,0,0,0,5021.252,10164.755Z", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1" }))));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("circle", { id: "Elipse_921", "data-name": "Elipse 921", cx: "24", cy: "24", r: "24", fill: "#fff2e4" }),
        React__default['default'].createElement("g", { id: "Grupo_14534", "data-name": "Grupo 14534", transform: "translate(-6213 -2920)" },
            React__default['default'].createElement("path", { id: "Trazado_9570", "data-name": "Trazado 9570", d: "M6253.169,2938.754c-.409-2.873-2.523-5.289-5.956-6.807a21.651,21.651,0,0,0-11.538-1.33c-8.7,1.2-14.984,6.409-14.682,12.011.011.2.03.4.058.6h0c.9,6.494,4.391,11.231,9.835,13.34a17.717,17.717,0,0,0,17.252-2.853C6252.51,2950.075,6254.3,2944.763,6253.169,2938.754Zm-6.572,13.108a15.245,15.245,0,0,1-14.842,2.459,12.335,12.335,0,0,1-5.937-4.836,20.692,20.692,0,0,0,12.732,1.906c5.151-.712,9.45-2.833,12.042-5.605A12.128,12.128,0,0,1,6246.6,2951.862Zm-.358-17.712c2.654,1.173,4.269,2.936,4.549,4.964h0c.6,4.323-5.156,8.866-12.568,9.892s-14.182-1.773-14.783-6.11v0c-.593-4.349,5.161-8.865,12.569-9.889A19.207,19.207,0,0,1,6246.239,2934.15Z", fill: "#e2d5c7" }),
            React__default['default'].createElement("path", { id: "Trazado_9571", "data-name": "Trazado 9571", d: "M6227.17,2932.459a.943.943,0,0,0,.782-.413,4.466,4.466,0,0,1,3.737-1.949l.033,0h.009a.946.946,0,0,0,.011-1.891,6.39,6.39,0,0,0-5.352,2.774.944.944,0,0,0,.78,1.477Z", fill: "#e2d5c7" }),
            React__default['default'].createElement("path", { id: "Trazado_9572", "data-name": "Trazado 9572", d: "M6237.215,2929.027l.031-.013a4.459,4.459,0,0,1,4.195.4.945.945,0,1,0,1.048-1.573,6.393,6.393,0,0,0-6.007-.557.945.945,0,0,0,.733,1.742Z", fill: "#e2d5c7" }),
            React__default['default'].createElement("path", { id: "Trazado_9573", "data-name": "Trazado 9573", d: "M6233.256,2939.7c.691-.1,1.139-.979,1-1.97s-.813-1.714-1.5-1.617-1.14.979-1,1.97S6232.564,2939.8,6233.256,2939.7Zm.234-3.1c.269,0,.487.3.487.674s-.218.673-.487.673-.486-.3-.486-.673S6233.222,2936.6,6233.49,2936.6Z", fill: "#e2d5c7" }),
            React__default['default'].createElement("path", { id: "Trazado_9574", "data-name": "Trazado 9574", d: "M6239.923,2938.4c.692-.1,1.14-.979,1-1.97s-.813-1.715-1.5-1.618-1.139.979-1,1.97S6239.232,2938.5,6239.923,2938.4Zm.16-2.968c.269,0,.487.3.487.674s-.218.674-.487.674-.486-.3-.486-.674S6239.815,2935.43,6240.083,2935.43Z", fill: "#e2d5c7" }),
            React__default['default'].createElement("path", { id: "Trazado_9575", "data-name": "Trazado 9575", d: "M6230.041,2941.819a.915.915,0,0,0-.2-.559.944.944,0,0,0-1.33-.121,3.362,3.362,0,0,0-1.234,2.22.944.944,0,0,0,.918.97h.027a.943.943,0,0,0,.845-.534,17.026,17.026,0,0,0,6.506,1.238q.445,0,.9-.023a13.418,13.418,0,0,0,9.633-4.484,1.1,1.1,0,0,0-1.656-1.456,11.531,11.531,0,0,1-9.018,3.757A15.089,15.089,0,0,1,6230.041,2941.819Z", fill: "#e2d5c7" }))));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 58 58" }, props),
        React__default['default'].createElement("title", null, "TOKEN"),
        React__default['default'].createElement("path", { style: { fill: "#9b2244" }, d: "M27.768,56h0A28,28,0,1,1,56,28.233,28,28,0,0,1,27.768,56" }),
        React__default['default'].createElement("path", { style: { fill: "#fff2e4" }, d: "M37.723,18.412c-3.16-4.321-8.042-6.312-13.748-5.616h-.009a.065.065,0,0,1-.024,0c-2.728.218-5.126,2.066-6.755,5.208a20.433,20.433,0,0,0-1.929,10.779c.624,8.256,5.155,14.479,10.444,14.522.189,0,.376-.005.565-.019,6.165-.466,10.826-3.475,13.132-8.473a16.7,16.7,0,0,0-1.676-16.4M26.1,41.022l0,0s-.006,0-.011,0a15.668,15.668,0,0,0,1-2.085,12.739,12.739,0,0,0,.778-3.817,13.746,13.746,0,0,0-.413-3.905,25.084,25.084,0,0,0-1.262-3.595,42.577,42.577,0,0,1-2.595-6.6,12.283,12.283,0,0,1-.359-3.377,14.184,14.184,0,0,1,.3-2.437,4.636,4.636,0,0,1,.607-.15c4.1-.31,8.043,5.374,8.572,12.41s-2.5,13.244-6.616,13.553M17.522,28.615A18.107,18.107,0,0,1,19.2,19.051a7.864,7.864,0,0,1,3-3.322,12.361,12.361,0,0,0-.468,1.753,12.156,12.156,0,0,0-.046,3.906A17.967,17.967,0,0,0,22.693,25.1c.438,1.18.938,2.3,1.4,3.407a30.927,30.927,0,0,1,1.216,3.284,14.034,14.034,0,0,1,.571,3.324c0,.282.022.565.011.847s-.02.566-.043.848l-.1.854-.154.85a21.191,21.191,0,0,1-.675,2.423c-3.672-.718-6.924-5.958-7.4-12.321m19.815,5.249a11.623,11.623,0,0,1-4.9,5.305A19.493,19.493,0,0,0,34.977,27.3c-.369-4.888-2.111-9.06-4.57-11.66a11.428,11.428,0,0,1,5.486,4.114,14.375,14.375,0,0,1,1.444,14.112" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$j, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$h, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$s, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressJavaWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressJava, showProgressJava = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressJava && (React__default['default'].createElement(ProgressJavaWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$I, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React__default['default'].createElement(Icon$I, __assign({ viewBox: "0 0 58 58" }, props)));
};
var Container$1 = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$j, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1423", "data-name": "Grupo 1423", transform: "translate(-4507.644 -13684.898)" },
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_479", "data-name": "Rect\u00E1ngulo 479", d: "M0,0H3.611a0,0,0,0,1,0,0V8.286a1.75,1.75,0,0,1-1.75,1.75H1.75A1.75,1.75,0,0,1,0,8.286V0A0,0,0,0,1,0,0Z", transform: "matrix(0.721, 0.693, -0.693, 0.721, 4515.445, 13694.834)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_480", "data-name": "Rect\u00E1ngulo 480", width: "5.33", height: "2.149", rx: "1.042", transform: "matrix(0.721, 0.693, -0.693, 0.721, 4516.313, 13692.689)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("line", { id: "L\u00EDnea_89", "data-name": "L\u00EDnea 89", x1: "5.628", y2: "5.859", transform: "translate(4518.223 13688.688)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_809", "data-name": "Trazado 809", d: "M4525.621,13685.531c-3.2.764-6.368,1.5-9.892,2.626a.949.949,0,0,0-.353,1.7,40.85,40.85,0,0,1,7.677,7.374.949.949,0,0,0,1.688-.421c.983-3.566,1.592-6.764,2.227-9.99A1.147,1.147,0,0,0,4525.621,13685.531Z", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }))));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { id: "Trazado_808", "data-name": "Trazado 808", d: "M4526.785,13515.412h0a.1.1,0,0,1-.1-.1l0-1.776a.513.513,0,0,0-.228-.415,5.648,5.648,0,0,0-2.448-.736,47.7,47.7,0,0,0-12.084-.034c-2.4.362-2.681.822-2.682,1.137l-.029,10.058a7.562,7.562,0,0,0,1.979,5.5.224.224,0,0,0-.009.043c0,1.779,1.847,2.85,4.1,3.309a.105.105,0,0,0,.127-.1v-7.508a.1.1,0,0,1,.1-.1h4.794a.1.1,0,0,1,.1.1v7.529a.107.107,0,0,0,.126.1c2.257-.447,4.109-1.514,4.114-3.291a.2.2,0,0,0-.008-.043,6.569,6.569,0,0,0,1.317-1.941.1.1,0,0,1,.09-.06l.7,0a5.211,5.211,0,0,0,5.226-5.2l0-1.248A5.21,5.21,0,0,0,4526.785,13515.412Zm2.608,6.57a2.529,2.529,0,0,1-2.531,2.518h-.245c.026-.295.04-.6.041-.91l.016-5.593h.206a2.527,2.527,0,0,1,2.517,2.532Z", transform: "translate(-4508.616 -13511.379)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1432", "data-name": "Grupo 1432", transform: "translate(-4508.616 -14156.282)" },
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_482", "data-name": "Rect\u00E1ngulo 482", d: "M1.568,0H4.875a0,0,0,0,1,0,0V8.188a2.437,2.437,0,0,1-2.437,2.437h0A2.437,2.437,0,0,1,0,8.188V1.568A1.568,1.568,0,0,1,1.568,0Z", transform: "translate(4509.216 14156.882)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_483", "data-name": "Rect\u00E1ngulo 483", d: "M0,0H4.875a0,0,0,0,1,0,0V8.188a2.437,2.437,0,0,1-2.437,2.437h0A2.437,2.437,0,0,1,0,8.188V0A0,0,0,0,1,0,0Z", transform: "translate(4514.091 14156.882)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_484", "data-name": "Rect\u00E1ngulo 484", d: "M0,0H4.875a0,0,0,0,1,0,0V8.188a2.437,2.437,0,0,1-2.437,2.437h0A2.437,2.437,0,0,1,0,8.188V0A0,0,0,0,1,0,0Z", transform: "translate(4518.966 14156.882)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_485", "data-name": "Rect\u00E1ngulo 485", d: "M0,0H3.307A1.568,1.568,0,0,1,4.875,1.568V8.188a2.437,2.437,0,0,1-2.437,2.437h0A2.437,2.437,0,0,1,0,8.188V0A0,0,0,0,1,0,0Z", transform: "translate(4523.841 14156.882)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Rect\u00E1ngulo_486", "data-name": "Rect\u00E1ngulo 486", d: "M2.318,0H17.182A2.318,2.318,0,0,1,19.5,2.318V16.073a2.3,2.3,0,0,1-2.3,2.3H2.3a2.3,2.3,0,0,1-2.3-2.3V2.318A2.318,2.318,0,0,1,2.318,0Z", transform: "translate(4509.216 14156.882)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }))));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    _a.isDark; __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "118.217", height: "20.534", viewBox: "0 0 118.217 20.534" },
        React__default['default'].createElement("g", { id: "Grupo_19067", "data-name": "Grupo 19067", transform: "translate(-8502.728 -1405.261)" },
            React__default['default'].createElement("path", { id: "Trazado_12759", "data-name": "Trazado 12759", d: "M8509.045,1405.472h2.979v10.351a4.227,4.227,0,0,1-4.584,4.542,4.354,4.354,0,0,1-4.712-4.647h2.957c.021,1.246.593,2.007,1.712,2.007,1.1,0,1.648-.739,1.648-1.9Z", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12760", "data-name": "Trazado 12760", d: "M8520.049,1408.324a4.629,4.629,0,0,1,3.867,1.859v-1.669h2.978v11.7h-2.978v-1.712a4.618,4.618,0,0,1-3.888,1.9c-2.957,0-5.323-2.43-5.323-6.084s2.366-6,5.344-6m.761,2.6a3.122,3.122,0,0,0-3.084,3.4,3.2,3.2,0,0,0,3.084,3.485,3.462,3.462,0,0,0,0-6.887", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12761", "data-name": "Trazado 12761", d: "M8531.71,1408.514l2.957,8.978,2.958-8.978h3.147l-4.33,11.7h-3.592l-4.31-11.7Z", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12762", "data-name": "Trazado 12762", d: "M8547.025,1408.324a4.624,4.624,0,0,1,3.864,1.859v-1.669h2.979v11.7h-2.979v-1.712a4.612,4.612,0,0,1-3.886,1.9c-2.958,0-5.324-2.43-5.324-6.084s2.366-6,5.346-6m.76,2.6a3.122,3.122,0,0,0-3.084,3.4,3.2,3.2,0,0,0,3.084,3.485,3.462,3.462,0,0,0,0-6.887", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12763", "data-name": "Trazado 12763", d: "M8561.853,1420.365c-3.062,0-5.429-1.6-5.472-4.394h3.17a2.024,2.024,0,0,0,2.239,1.965c1.394,0,2.218-.739,2.218-1.8,0-3.19-7.6-1.268-7.584-6.613,0-2.662,2.155-4.267,5.2-4.267,3.021,0,5.092,1.542,5.282,4.2h-3.253a1.948,1.948,0,0,0-2.113-1.754c-1.162-.042-2.028.529-2.028,1.733,0,2.957,7.563,1.31,7.563,6.506,0,2.324-1.859,4.415-5.219,4.415", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12764", "data-name": "Trazado 12764", d: "M8568.316,1408.514h3l2.07,8.915,2.239-8.915h3.126l2.2,8.894,2.069-8.894h2.831l-3.423,11.7h-3.189l-2.134-8.176-2.134,8.176h-3.211Z", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12765", "data-name": "Trazado 12765", d: "M8592.038,1408.324a4.629,4.629,0,0,1,3.867,1.859v-1.669h2.978v11.7h-2.978v-1.712a4.619,4.619,0,0,1-3.889,1.9c-2.957,0-5.322-2.43-5.322-6.084s2.365-6,5.344-6m.761,2.6a3.122,3.122,0,0,0-3.084,3.4,3.2,3.2,0,0,0,3.084,3.485,3.462,3.462,0,0,0,0-6.887", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12766", "data-name": "Trazado 12766", d: "M8608.6,1408.324c3,0,5.347,2.345,5.347,6s-2.347,6.084-5.347,6.084a4.777,4.777,0,0,1-3.864-1.859v7.246h-2.958v-17.281h2.958v1.69a4.674,4.674,0,0,1,3.864-1.88m-.78,2.6a3.464,3.464,0,0,0,0,6.887,3.2,3.2,0,0,0,3.1-3.485,3.126,3.126,0,0,0-3.1-3.4", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_12767", "data-name": "Trazado 12767", d: "M8620.944,1417.343A2.946,2.946,0,1,1,8618,1414.4a2.948,2.948,0,0,1,2.946,2.945m-5.5,0a2.556,2.556,0,1,0,2.557-2.557,2.554,2.554,0,0,0-2.557,2.557m1.414-1.508a6,6,0,0,1,1.024-.083c.931,0,1.355.342,1.355.884a.826.826,0,0,1-.624.766v.035a.9.9,0,0,1,.471.554,8.406,8.406,0,0,0,.283.9h-.59a3.312,3.312,0,0,1-.225-.718.625.625,0,0,0-.646-.566h-.53v1.284h-.519Zm.554,1.343h.554c.459,0,.718-.188.718-.495,0-.365-.33-.495-.729-.495a2.23,2.23,0,0,0-.542.047Z", fill: "#9b2244" }))));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 -4 24 10" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1041", "data-name": "Grupo 1041", transform: "translate(-6550.028 -14341.396)" },
            React__default['default'].createElement("circle", { id: "Elipse_42", "data-name": "Elipse 42", cx: "1.75", cy: "1.75", r: "1.75", transform: "translate(6550.628 14341.995)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("circle", { id: "Elipse_43", "data-name": "Elipse 43", cx: "1.75", cy: "1.75", r: "1.75", transform: "translate(6558.412 14341.995)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("circle", { id: "Elipse_44", "data-name": "Elipse 44", cx: "1.75", cy: "1.75", r: "1.75", transform: "translate(6566.196 14341.995)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }))));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1441", "data-name": "Grupo 1441", transform: "translate(-4502.291 -14097.238)" },
            React__default['default'].createElement("g", { id: "Grupo_1439", "data-name": "Grupo 1439" },
                React__default['default'].createElement("path", { id: "Trazado_821", "data-name": "Trazado 821", d: "M4528.327,14108.811c-.314-2.2-1.936-4.058-4.57-5.223a16.615,16.615,0,0,0-8.852-1.02c-6.671.923-11.5,4.917-11.264,9.215.008.151.023.306.044.458h0c.69,4.981,3.369,8.617,7.546,10.233a13.587,13.587,0,0,0,13.236-2.187A11.53,11.53,0,0,0,4528.327,14108.811Zm-5.042,10.058a11.694,11.694,0,0,1-11.387,1.886,9.474,9.474,0,0,1-4.556-3.71,15.877,15.877,0,0,0,9.768,1.462,15.64,15.64,0,0,0,9.24-4.3A9.322,9.322,0,0,1,4523.285,14118.868Zm-.275-13.59c2.036.9,3.275,2.253,3.49,3.809h0c.461,3.317-3.956,6.8-9.643,7.589s-10.88-1.359-11.341-4.687v0c-.455-3.336,3.96-6.8,9.643-7.587A14.731,14.731,0,0,1,4523.01,14105.278Z", fill: "#9b2244" }),
                React__default['default'].createElement("path", { id: "Trazado_822", "data-name": "Trazado 822", d: "M4513.049,14109.539c.531-.075.874-.751.768-1.511s-.624-1.316-1.154-1.241-.875.751-.768,1.511S4512.519,14109.614,4513.049,14109.539Zm.18-2.378c.206,0,.373.231.373.517s-.167.518-.373.518-.373-.231-.373-.518S4513.023,14107.161,4513.229,14107.161Z", fill: "#9b2244" }),
                React__default['default'].createElement("path", { id: "Trazado_823", "data-name": "Trazado 823", d: "M4518.164,14108.537c.531-.074.875-.751.768-1.511s-.624-1.316-1.154-1.241-.875.751-.768,1.511S4517.634,14108.612,4518.164,14108.537Zm.123-2.276c.206,0,.374.231.374.518s-.168.517-.374.517-.373-.231-.373-.517S4518.081,14106.261,4518.287,14106.261Z", fill: "#9b2244" }),
                React__default['default'].createElement("path", { id: "Trazado_824", "data-name": "Trazado 824", d: "M4510.583,14111.162a.7.7,0,0,0-.155-.429.724.724,0,0,0-1.021-.093,2.576,2.576,0,0,0-.947,1.7.725.725,0,0,0,.705.745h.02a.721.721,0,0,0,.648-.409,13.075,13.075,0,0,0,4.992.95c.227,0,.457-.006.688-.018a10.3,10.3,0,0,0,7.39-3.44.846.846,0,1,0-1.27-1.117,8.846,8.846,0,0,1-6.919,2.882A11.565,11.565,0,0,1,4510.583,14111.162Z", fill: "#9b2244" })),
            React__default['default'].createElement("path", { id: "Trazado_825", "data-name": "Trazado 825", d: "M4516.051,14097.292a12.723,12.723,0,0,0-6.024,3.316c-3.274,2.934-8.546,3.826-7.631,7.024.439,1.535,5.123,1.866,7.631-1.282,1.414-1.774,4.8-1.661,7.351-2.148a5.689,5.689,0,0,0,3.622-1.979C4522.073,14100.048,4521.588,14096.778,4516.051,14097.292Z", fill: "#9b2244" }),
            React__default['default'].createElement("path", { id: "Trazado_826", "data-name": "Trazado 826", d: "M4508.46,14101.235s-.7-2.888-2.362-2.945c-1.01-.036-1.072.975-.117,1.749C4506.6,14100.54,4508.128,14100.7,4508.46,14101.235Z", fill: "#9b2244" }),
            React__default['default'].createElement("g", { id: "Grupo_1440", "data-name": "Grupo 1440" },
                React__default['default'].createElement("path", { id: "Trazado_827", "data-name": "Trazado 827", d: "M4527.584,14109.374c1.276-2.426,2.535-3.4,3.463-3.059,1.242.453,1.422,3.086-.253,7.669s-4.039,7.931-5.281,7.477c-.636-.232-.855-1.414-.692-3.128", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
                React__default['default'].createElement("line", { id: "L\u00EDnea_90", "data-name": "L\u00EDnea 90", x2: "3.956", y2: "1.445", transform: "translate(4528.012 14108.485)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
                React__default['default'].createElement("path", { id: "Trazado_828", "data-name": "Trazado 828", d: "M4530.012,14107.105a3.668,3.668,0,0,1-.393-4.445c1.552-2.392,3.639-1.952,4.1-3.169.018.007,2.169,6.424-2.029,8.454", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" })))));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1424", "data-name": "Grupo 1424", transform: "translate(-4509.216 -13743.62)" },
            React__default['default'].createElement("path", { id: "Trazado_810", "data-name": "Trazado 810", d: "M4511.952,13754.677v-7.457a3,3,0,0,1,3-3h8.356a3,3,0,0,1,3,3v7.832", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_811", "data-name": "Trazado 811", d: "M4509.216,13756.259c3.27,0,3.27,2,6.539,2s3.271-2,6.543-2,3.272,2,6.543,2", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_812", "data-name": "Trazado 812", d: "M4509.216,13759.534c3.27,0,3.27,2,6.539,2s3.271-2,6.543-2,3.272,2,6.543,2", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }))));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 -5 22 22" }, props),
        React__default['default'].createElement("path", { id: "Trazado_788", "data-name": "Trazado 788", d: "M4662.86,14962.912a2.38,2.38,0,0,1-.953-.321c-.414-.229-.817-.479-1.208-.747-1.257-.858-2.507-1.728-3.758-2.6a4.5,4.5,0,0,1-.351-.287.846.846,0,0,1-.042-1.4c.457-.441.919-.878,1.379-1.316,1.111-1.058,2.224-2.111,3.328-3.176a3.417,3.417,0,0,0,.435-.576.633.633,0,0,0,.083-.271.138.138,0,0,0-.17-.172,1.01,1.01,0,0,0-.333.087,10.9,10.9,0,0,0-.984.561q-3.1,2.089-6.187,4.194a2.138,2.138,0,0,1-1.321.342,5.07,5.07,0,0,1-1.37-.292q-1.178-.366-2.356-.726a.6.6,0,0,1-.445-.449.5.5,0,0,1,.244-.531,2.663,2.663,0,0,1,.49-.294c1.686-.751,3.364-1.522,5.066-2.236,3.059-1.283,6.133-2.533,9.2-3.793.405-.166.816-.321,1.229-.465a1.3,1.3,0,0,1,.418-.052.724.724,0,0,1,.8.788,10.205,10.205,0,0,1-.128,1.216c-.2,1.4-.415,2.791-.625,4.186q-.261,1.711-.524,3.421c-.188,1.225-.369,2.452-.57,3.674a2.357,2.357,0,0,1-.249.724c-.2.363-.513.516-1.1.511", transform: "translate(-4648.593 -14948.394)", fill: "#9b2244" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 28 36" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1452", "data-name": "Grupo 1452", transform: "translate(-4506.165 -13902.402)" },
            React__default['default'].createElement("g", { id: "Grupo_1450", "data-name": "Grupo 1450" },
                React__default['default'].createElement("path", { id: "Trazado_833", "data-name": "Trazado 833", d: "M4516.345,13935.42l-.8-1.428c.271-.191.538-.387.812-.572a11.281,11.281,0,0,0,4.857-5.886,9.857,9.857,0,0,0-.13-6.047c-.471,1.307-.892,2.507-2.379,2.709a3.079,3.079,0,0,1-3.192-1.456,7.81,7.81,0,0,1-1.277.429,2.844,2.844,0,0,1-3-1.182,2.942,2.942,0,0,1,.029-3.291,12.57,12.57,0,0,1,1.712-1.9,2.033,2.033,0,0,0,.426-.508c-.641.281-1.282.564-1.924.843a3.69,3.69,0,0,1-2.867.071,2.856,2.856,0,0,1-.82-4.874c.164-.132.324-.271.295-.417a8.823,8.823,0,0,1-.221-2.357,2.848,2.848,0,0,1,4.6-1.777,13.049,13.049,0,0,1,1.6,1.476,2.668,2.668,0,0,0,.657.555c-.252-.551-.514-1.1-.753-1.654a3.683,3.683,0,0,1-.233-2.87,3.424,3.424,0,0,1,1.688-2.067c2.1-.605,3.464.193,3.781,1.488.142-.07.351-.173.56-.273,1.466-.7,4.184.275,4,2.726a3.8,3.8,0,0,1-1.134,2.513c-.484.487-1,.948-1.5,1.421.755-.242,1.455-.554,2.165-.843a3.343,3.343,0,0,1,2.623.009,2.835,2.835,0,0,1,.82,4.888c-.158.137-.318.27-.51.433a2.989,2.989,0,0,1-.132,3.686c-.964,1.281-2.324,1-3.708.715,2.394,6.81-.026,11.74-5.979,15.447", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" })),
            React__default['default'].createElement("g", { id: "Grupo_1451", "data-name": "Grupo 1451" },
                React__default['default'].createElement("path", { id: "Trazado_834", "data-name": "Trazado 834", d: "M4516.827,13920.192v-1.385a4,4,0,0,1-2.1-.6l.329-.919a3.653,3.653,0,0,0,1.974.59c.974,0,1.632-.562,1.632-1.344,0-.754-.535-1.221-1.549-1.631-1.4-.55-2.262-1.18-2.262-2.372a2.247,2.247,0,0,1,2.07-2.207v-1.386h.85v1.33a3.654,3.654,0,0,1,1.782.48l-.343.9a3.317,3.317,0,0,0-1.727-.467c-1.056,0-1.454.632-1.454,1.18,0,.713.508,1.069,1.7,1.563,1.413.576,2.125,1.289,2.125,2.509a2.384,2.384,0,0,1-2.166,2.331v1.426Z", fill: "#9b2244", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "0.5" })))));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React__default['default'].createElement("g", { id: "Grupo_545", "data-name": "Grupo 545", transform: "translate(-8956.301 -14269.929)" },
            React__default['default'].createElement("g", { id: "Grupo_542", "data-name": "Grupo 542" },
                React__default['default'].createElement("path", { id: "Trazado_301", "data-name": "Trazado 301", d: "M8972.755,14283.587l0,0-.01,0Z", fill: "#9b2244" }),
                React__default['default'].createElement("path", { id: "Trazado_302", "data-name": "Trazado 302", d: "M8977.213,14288.045l-2.19-2.191c0,.026.007.051.007.076l0,1.351a2.347,2.347,0,0,1-2.351,2.336h-.227c.023-.274.038-.555.038-.844l.015-5.131a7.732,7.732,0,0,1-9.657-5.624,34.272,34.272,0,0,0-4.027.321c-2.23.335-2.488.762-2.489,1.053l-.027,9.334a7.013,7.013,0,0,0,1.836,5.107.19.19,0,0,0-.008.041c0,1.586,1.583,2.566,3.567,3.018l5.115.071c2.1-.414,3.814-1.4,3.819-3.054a.242.242,0,0,0-.008-.04,6.111,6.111,0,0,0,1.222-1.8.091.091,0,0,1,.084-.056l.646,0a4.837,4.837,0,0,0,4.752-3.876C8977.29,14288.1,8977.248,14288.08,8977.213,14288.045Zm-13.926,2.654-3.354-2.914.931-1.071,2.363,2.058,4.6-4.513.992,1.011Z", fill: "#9b2244" })),
            React__default['default'].createElement("g", { id: "Grupo_544", "data-name": "Grupo 544" },
                React__default['default'].createElement("g", { id: "Grupo_543", "data-name": "Grupo 543" },
                    React__default['default'].createElement("circle", { id: "Elipse_25", "data-name": "Elipse 25", cx: "5.285", cy: "5.285", r: "5.285", transform: "translate(8964.86 14270.528)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
                    React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_197", "data-name": "Rect\u00E1ngulo 197", width: "2.202", height: "8.956", rx: "0.767", transform: "matrix(-0.707, 0.707, -0.707, -0.707, 8980.994, 14285.105)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }))))));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React__default['default'].createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\r\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\r\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\r\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\r\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\r\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\r\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\r\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\r\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\r\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\r\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\r\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\r\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\r\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\r\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\r\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\r\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\r\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\r\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\r\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\r\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\r\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\r\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\r\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\r\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\r\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\r\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\r\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\r\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\r\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\r\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\r\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\r\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\r\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\r\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React__default['default'].createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React__default['default'].createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React__default['default'].createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React__default['default'].createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React__default['default'].createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React__default['default'].createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React__default['default'].createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React__default['default'].createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React__default['default'].createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React__default['default'].createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React__default['default'].createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React__default['default'].createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React__default['default'].createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React__default['default'].createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React__default['default'].createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React__default['default'].createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React__default['default'].createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React__default['default'].createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React__default['default'].createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React__default['default'].createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\r\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React__default['default'].createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React__default['default'].createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\r\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\r\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\r\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\r\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\r\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\r\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\r\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\r\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\r\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\r\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\r\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\r\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\r\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\r\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\r\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\r\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\r\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\r\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\r\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\r\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\r\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\r\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\r\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\r\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\r\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\r\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\r\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\r\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\r\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React__default['default'].createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\r\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\r\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\r\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React__default['default'].createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React__default['default'].createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React__default['default'].createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React__default['default'].createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React__default['default'].createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React__default['default'].createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React__default['default'].createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React__default['default'].createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React__default['default'].createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React__default['default'].createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React__default['default'].createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React__default['default'].createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React__default['default'].createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React__default['default'].createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\r\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\r\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\r\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\r\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\r\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\r\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\r\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\r\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\r\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\r\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\r\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\r\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\r\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\r\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\r\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\r\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\r\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\r\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\r\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\r\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 56 56" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { id: "Shape", d: "m54.89 19.33c-1.65-3.16-4.39-5.33-7.89-5.33 1.9387753 4.8214002 2.9563558 9.9635739 3 15.16.1921013 6.0688357-2.3831761 11.8963206-7 15.84 5.82.28 10.9-2.58 12.85-8.55 1.83-5.66 1.45-12.53-.96-17.12z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m18.16 44.81c3.2315917 2.0831812 6.9951556 3.1907245 10.84 3.19 3.83925-.0374554 7.5924307-1.1419431 10.84-3.19 5.22-3.34 8.16-8.69 8.16-15.64 0-11.67-7.36-29.17-19-29.17-11.1 0-18.22 15.8-18.92 27-.48 7.47 1.67 13.7 8.08 17.81zm6.36-41.71c1.3871963-.71080538 2.9213462-1.08749398 4.48-1.1.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-1.2497589.01216582-2.4792834.31697831-3.59.89-.4916536.2469243-1.0904244.05031299-1.34-.44-.1210697-.23840257-.1416226-.51536113-.0570687-.76902291.0845539-.25366177.2671714-.46289687.5070687-.58097709zm4.36 25.9c-2.88-.37-6.88-.87-6.88-5.5 0-3.22 2.93-5.1 6-5.44v-2.06c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2.05c4.27.37 5.81 3.07 5.88 3.19.1786328.3126074.1769222.696768-.0044873 1.0077722-.1814095.3110043-.5149577.5016032-.875.5-.3600423-.0016031-.6918799-.1951648-.8705127-.5077722-.06-.13-1.35-2.24-5.13-2.24-2.08 0-5 1.09-5 3.5 0 2.73 1.85 3.1 5.12 3.51 2.88.36 6.88.86 6.88 5.49 0 2.5-1.6 5.11-6 5.5v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c-4-.2-5.54-1.59-5.71-1.76-.3921222-.3921222-.3921222-1.0278778 0-1.42s1.0278778-.3921222 1.42 0c1.54 1.33 10.29 2.6 10.29-2.32 0-2.73-1.85-3.1-5.12-3.5zm-12.28-17.48c1.0099054-1.85917744 2.2422964-3.58855444 3.67-5.15.3783151-.40316784 1.0118321-.42331501 1.415-.04499997.4031678.37831504.423315 1.0118321.045 1.41499997-1.3167051 1.43547667-2.4518907 3.0274234-3.38 4.74-.2761424.4832492-.8917508.6511424-1.375.375s-.6511424-.8917508-.375-1.375z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m15 45c-8.88-7.41-8.36-20.14-4-31-3.55 0-6.26 2.19-7.89 5.33-2.41 4.59-2.79 11.46-1 17.09 2.02 6.08 7.13 8.82 12.89 8.58z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m51.37 50.82 5.18-.49c-2.69-2-2.54-1.91-2.62-2-.3695814-.3660786-.5548165-.8790296-.5043991-1.3967767.0504173-.5177471.3311345-.9853244.7643991-1.2732233l.33-.18-2.79-.63c-3.3740505 1.9352367-7.3317613 2.5918972-11.15 1.85-7.0998733 4.3760158-16.0601267 4.3760158-23.16 0-3.823751.72837-7.78190651.0763551-11.17-1.84l-2.77.63.25.13c.459298.2749348.76648497.7459757.8328805 1.2771399.06639553.5311643-.11539102 1.0633268-.4928805 1.4428601-.08.08 0 0-2.62 2l5.15.49c.64038677.0713049 1.18894097.490663 1.42571345 1.0899279.23677249.5992649.12299447 1.2803137-.29571345 1.7700721l-.56.86 6.55-2.17c.9183874-.2960905 1.9231368-.1323536 2.7.44l2.51 1.88c.1137149.0896251.2677225.108876.4.05 6.09-2.89 5.67-2.75 6.15-2.75.4614024.000194.9038362.1836422 1.23.51.13.13 0 0 2.29 3.4 2.27-3.39 2.16-3.26 2.29-3.4.5872385-.5903148 1.5116873-.6785576 2.2-.21l5.18 2.44c.1322775.058876.2862851.0396251.4-.05l2.51-1.88c.7768632-.5723536 1.7816126-.7360905 2.7-.44l6.55 2.17-.56-.86c-.4172055-.4855792-.5340677-1.1610366-.3042517-1.7585583.2298161-.5975217.7691853-1.0205824 1.4042517-1.1014417z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m46.71 5.71 1-1c.2536586-.25365856.3527236-.62337399.2598781-.96987806-.0928455-.34650406-.363496-.61715454-.71-.71000002-.3465041-.09284548-.7162195.00621949-.9698781.25987808l-1 1c-.3921221.39212218-.3921221 1.02787781 0 1.41999996.3921222.39212216 1.0278778.39212218 1.42.00000004z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m48.32 9 3-1c.3394023-.11432499.5920313-.40103461.6627241-.75212813s-.0512905-.71323147-.32-.95-.6433218-.31219686-.9827241-.19787187l-3 1c-.3394023.11432498-.5920313.40103461-.6627241.75212813-.0706929.35109352.0512905.71323148.32.95000001s.6433218.31219685.9827241.19787186z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m12.71 4.29-1-1c-.2536586-.25365857-.623374-.35272352-.969878-.25987804-.3465041.09284548-.6171546.36349595-.71.71-.09284552.34650405.0062194.71621947.259878.96987804l1 1c.3921222.39212215 1.0278778.39212214 1.42-.00000002.3921221-.39212217.3921222-1.0278778 0-1.41999998z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m6.05 6.68c-.10156011.25804893-.09140308.54668422.02804477.7969559.11944785.25027169.33745932.43970373.60195523.5230441 3.14 1 3.04 1 3.32 1 .4927375.00386501.9148502-.35178371.9946449-.83803264.0797947-.48624892-.2065147-.95815151-.6746449-1.11196736l-3-1c-.25193645-.08555066-.52757913-.06717426-.76592958.05106258-.23835046.11823684-.41975528.32658479-.50407042.57893742z" }))));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 -6 23 23" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1368", "data-name": "Grupo 1368", transform: "translate(-4720.52 -14949.632)" },
            React__default['default'].createElement("g", { id: "Grupo_1367", "data-name": "Grupo 1367" },
                React__default['default'].createElement("circle", { id: "Elipse_53", "data-name": "Elipse 53", cx: "6.021", cy: "6.021", r: "6.021", transform: "translate(4720.52 14949.632)", fill: "#9b2244" }),
                React__default['default'].createElement("ellipse", { id: "Elipse_54", "data-name": "Elipse 54", cx: "2.969", cy: "6.021", rx: "2.969", ry: "6.021", transform: "translate(4733.138 14949.632)", fill: "#9b2244" }),
                React__default['default'].createElement("ellipse", { id: "Elipse_55", "data-name": "Elipse 55", cx: "0.979", cy: "6.021", rx: "0.979", ry: "6.021", transform: "translate(4739.815 14949.632)", fill: "#9b2244" })))));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { id: "Trazado_832", "data-name": "Trazado 832", d: "M4531.981,13574.473l-2.855-2.636.156-3.884-3.86-.454-2.157-3.233-3.389,1.9-3.646-1.348-1.623,3.53-3.743,1.052.762,3.811-2.41,3.051,2.857,2.636-.157,3.884,3.861.454,2.155,3.233,3.391-1.9,3.644,1.349,1.625-3.531,3.742-1.052-.761-3.811Zm-13.364,6.033-5.111-4.444,1.417-1.631,3.6,3.137,7.006-6.881,1.513,1.542Z", transform: "translate(-4509.216 -13564.266)", fill: "#d86d25" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1425", "data-name": "Grupo 1425", transform: "translate(-4508.616 -13800.334)" },
            React__default['default'].createElement("circle", { id: "Elipse_56", "data-name": "Elipse 56", cx: "9.075", cy: "9.075", r: "9.075", transform: "translate(4509.216 13800.934)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_813", "data-name": "Trazado 813", d: "M4518.822,13806.048l.6,1.845a.558.558,0,0,0,.531.387h1.94a.559.559,0,0,1,.328,1.011l-1.569,1.14a.558.558,0,0,0-.2.624l.6,1.847a.558.558,0,0,1-.859.624l-1.57-1.141a.557.557,0,0,0-.656,0l-1.57,1.141a.559.559,0,0,1-.86-.624l.6-1.847a.558.558,0,0,0-.2-.624l-1.57-1.14a.559.559,0,0,1,.329-1.011h1.94a.559.559,0,0,0,.531-.387l.6-1.845A.558.558,0,0,1,4518.822,13806.048Z", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }))));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 36 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1447", "data-name": "Grupo 1447", transform: "translate(-4503.132 -14039.21)" },
            React__default['default'].createElement("g", { id: "Grupo_1445", "data-name": "Grupo 1445" },
                React__default['default'].createElement("circle", { id: "Elipse_61", "data-name": "Elipse 61", cx: "3.915", cy: "3.915", r: "3.915", transform: "translate(4527.522 14039.81)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("path", { id: "Trazado_829", "data-name": "Trazado 829", d: "M4530.057,14062.408l-.451-2.823s-1.621,2.355-6.164,2.622a2.426,2.426,0,0,0,0-3.508c0,.051,4.076.217,6.631-5.261a3.91,3.91,0,0,1,7.784.049v.035l.936,8.685", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("circle", { id: "Elipse_62", "data-name": "Elipse 62", cx: "3.915", cy: "3.915", r: "3.915", transform: "translate(4507.234 14039.81)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("path", { id: "Trazado_830", "data-name": "Trazado 830", d: "M4512.529,14062.408l.451-2.823s1.62,2.355,6.163,2.622a.871.871,0,0,0,.1,0,1.764,1.764,0,0,0,0-3.527c-.034,0-.062.019-.1.021h0c0,.051-4.075.217-6.631-5.261a3.91,3.91,0,0,0-7.784.049v.035l-.935,8.685", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" })),
            React__default['default'].createElement("g", { id: "Grupo_1446", "data-name": "Grupo 1446" },
                React__default['default'].createElement("path", { id: "Trazado_831", "data-name": "Trazado 831", d: "M4520.73,14053.068v-1.672a4.822,4.822,0,0,1-2.532-.728l.4-1.109a4.409,4.409,0,0,0,2.383.712c1.175,0,1.97-.679,1.97-1.622,0-.909-.646-1.473-1.87-1.97-1.688-.662-2.731-1.423-2.731-2.861a2.715,2.715,0,0,1,2.5-2.665v-1.671h1.026v1.6a4.414,4.414,0,0,1,2.151.579l-.414,1.092a4,4,0,0,0-2.085-.562c-1.274,0-1.754.761-1.754,1.423,0,.859.613,1.291,2.052,1.887,1.705.694,2.565,1.555,2.565,3.028a2.877,2.877,0,0,1-2.614,2.813v1.722Z", fill: "#9b2244", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "0.5" })))));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 32" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1454", "data-name": "Grupo 1454", transform: "translate(-4508.512 -13847.523)" },
            React__default['default'].createElement("g", { id: "Grupo_1453", "data-name": "Grupo 1453" },
                React__default['default'].createElement("path", { id: "Trazado_835", "data-name": "Trazado 835", d: "M4520.464,13859.323v-1.082a3.114,3.114,0,0,1-1.64-.473l.257-.718a2.863,2.863,0,0,0,1.544.461c.761,0,1.275-.438,1.275-1.05,0-.59-.418-.954-1.211-1.276-1.093-.428-1.768-.921-1.768-1.854a1.757,1.757,0,0,1,1.618-1.725v-1.082h.664v1.039a2.859,2.859,0,0,1,1.394.375l-.268.707a2.591,2.591,0,0,0-1.351-.364c-.825,0-1.136.493-1.136.922,0,.557.4.836,1.329,1.222,1.1.45,1.661,1.007,1.661,1.961a1.863,1.863,0,0,1-1.693,1.821v1.115Z", fill: "#9b2244", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "0.5" })),
            React__default['default'].createElement("circle", { id: "Elipse_63", "data-name": "Elipse 63", cx: "6.818", cy: "6.818", r: "6.818", transform: "translate(4513.837 13848.123)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_836", "data-name": "Trazado 836", d: "M4509.112,13870.057c.311.312,2.207,2.38,2.345,7.726a11.268,11.268,0,0,0,1.966-.862s1.035-5.173-1-7.828C4512.457,13869.126,4509.112,13870.057,4509.112,13870.057Z", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_837", "data-name": "Trazado 837", d: "M4513.147,13869.712a11.932,11.932,0,0,0,3.311-2.207c.793-1.034,2.532-2.966,4.2-2.689-.2.1.173,1.413.173,1.413s2.872-.827,2.769,1.828c.138.139,1.655,1.346.172,3.587-.172.1.809,2.9-2.941,3.139s-3.611.034-4.681-.276a4.21,4.21,0,0,0-2.488.381", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
            React__default['default'].createElement("line", { id: "L\u00EDnea_91", "data-name": "L\u00EDnea 91", y2: "4.477", transform: "translate(4520.946 13861.752)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }))));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 26 32" }, props),
        React__default['default'].createElement("g", { id: "Grupo_1456", "data-name": "Grupo 1456", transform: "translate(-4506.15 -13957.409)" },
            React__default['default'].createElement("g", { id: "Grupo_1455", "data-name": "Grupo 1455" },
                React__default['default'].createElement("path", { id: "Trazado_838", "data-name": "Trazado 838", d: "M4521.794,13976.765h4.721a1.5,1.5,0,0,0,.537-.9,2.072,2.072,0,0,0-.673-2.109c-1.2-.647-5.952-.083-5.952-.083s.485-5.956-.883-7.544-3.441-1.588-3.132,1.544-6.088,7.368-6.088,7.368h-3.574v10.191a12.005,12.005,0,0,1,4.809.4c1.809.75,8.029,2.073,10.324,1.191s1.779-1.354,1.808-2.162-1.9-1.191-1.9-1.191,2.662.06,3.1-1.015.941-2.794-2.956-2.411", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
                React__default['default'].createElement("path", { id: "Trazado_839", "data-name": "Trazado 839", d: "M4525.412,13976.765a2.06,2.06,0,0,1,1.559,1.972c0,1.6-3.427,1.279-3.427,1.279", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" })),
            React__default['default'].createElement("ellipse", { id: "Elipse_64", "data-name": "Elipse 64", cx: "4.037", cy: "2.581", rx: "4.037", ry: "2.581", transform: "translate(4521.64 13964.626) rotate(-52.146)", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_840", "data-name": "Trazado 840", d: "M4530.441,13966.376s-1.61,4.654-7.323,3.595", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_841", "data-name": "Trazado 841", d: "M4532.691,13964.236s3.726,5.991-3.308,7.632", fill: "none", stroke: "#9b2244", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.2" }))));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 28 24" }, props),
        React__default['default'].createElement("g", { id: "Grupo_551", "data-name": "Grupo 551", transform: "translate(-8954.615 -14215.117)" },
            React__default['default'].createElement("path", { id: "Trazado_303", "data-name": "Trazado 303", d: "M8968.1,14238.974c2.569-.508,4.678-1.722,4.683-3.745a.2.2,0,0,0-.009-.049,7.475,7.475,0,0,0,1.5-2.209.109.109,0,0,1,.1-.066l.791,0a5.932,5.932,0,0,0,5.948-5.914l0-1.42a5.932,5.932,0,0,0-5.914-5.948.117.117,0,0,1-.117-.118l.006-2.021a.583.583,0,0,0-.259-.473,6.419,6.419,0,0,0-2.786-.838,54.244,54.244,0,0,0-13.751-.039c-2.733.412-3.051.936-3.053,1.293l-.032,11.446a8.6,8.6,0,0,0,2.251,6.262.309.309,0,0,0-.01.049c0,1.946,1.942,3.147,4.374,3.7Zm10.072-11.874a2.876,2.876,0,0,1-2.881,2.866h-.278c.029-.336.045-.68.047-1.035l.018-6.365h.235a2.874,2.874,0,0,1,2.863,2.881Z", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_203", "data-name": "Rect\u00E1ngulo 203", width: "3.058", height: "6.064", transform: "translate(8960.208 14228.518)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("rect", { id: "Rect\u00E1ngulo_204", "data-name": "Rect\u00E1ngulo 204", width: "3.058", height: "10.171", transform: "translate(8966.639 14224.411)", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_304", "data-name": "Trazado 304", d: "M8958.217,14224.98s4.658,0,9.317-4.409", fill: "none", stroke: "#9b2244", "stroke-miterlimit": "10", "stroke-width": "1.2" }),
            React__default['default'].createElement("path", { id: "Trazado_305", "data-name": "Trazado 305", d: "M8966.254,14219.29l2.489,2.963.569-3.674Z", fill: "#9b2244" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$J,
    GroupsIcon: Icon$K,
    HamburgerIcon: Icon$L,
    HamburgerCloseIcon: Icon$M,
    HomeIcon: Icon$N,
    IfoIcon: Icon$O,
    InfoIcon: Icon$P,
    LanguageIcon: Icon$Q,
    LogoIcon: Logo,
    MoonIcon: Icon$R,
    MoreIcon: Icon$S,
    NftIcon: Icon$T,
    PoolIcon: Icon$U,
    SunIcon: Icon$V,
    TelegramIcon: Icon$W,
    TicketIcon: Icon$X,
    TradeIcon: Icon$Y,
    TwitterIcon: Icon$Z,
    RedditIcon: Icon$_,
    AuditIcon: Icon$$,
    GooseIcon: Icon$10,
    HandshakeIcon: Icon$11,
    LayerIcon: Icon$12,
    RoadmapIcon: Icon$13,
    BondsIcon: Icon$14,
    VaultsIcon: Icon$15,
    EggHouseIcon: Icon$16,
    MediumIcon: Icon$17,
    PresaleIcon: Icon$18,
    GameIcon: Icon$19,
    ReferralIcon: Icon$1a,
    JavaBidIcon: Icon$1b,
    FlipCoinIcon: Icon$1c,
    AnalyticIcon: Icon$1d
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$p, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$M, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$L, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "Cooming soon",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Presale",
        icon: "PresaleIcon",
        href: "https://presale.javaswap.io/",
    },
    {
        label: "Swap",
        icon: "TradeIcon",
        href: "https://exchange.javaswap.io",
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Games",
        icon: "GameIcon",
        items: [
            {
                label: "JavaBid",
                href: "/javabid",
                icon: "JavaBidIcon"
            },
            {
                label: "Lucky Lotto",
                href: "/lottery",
                icon: "TicketIcon"
            },
            {
                label: "Flip Coin",
                href: "/flip",
                icon: "FlipCoinIcon"
            },
        ],
    },
    {
        label: "Referrals",
        icon: "ReferralIcon",
        href: "/referral",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
        status: status.SOON,
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        href: "/ifo",
        status: status.SOON,
    },
    {
        label: "Analytics",
        icon: "AnalyticIcon",
        href: "/analytic",
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "https://github.com/goosedefi/",
            },
            {
                label: "Docs",
                href: "https://goosedefi.gitbook.io/goose-finance/",
            },
            {
                label: "Blog",
                href: "https://goosefinance.medium.com/",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/goosedefi",
            },
            // {
            //   label: "Bahasa Indonesia",
            //   href: "https://t.me/PancakeSwapIndonesia",
            // },
            {
                label: "中文",
                href: "https://t.me/goosefinancechinese",
            },
            // {
            //   label: "Tiếng Việt",
            //   href: "https://t.me/PancakeSwapVN",
            // },
            {
                label: "Italiano",
                href: "https://t.me/goosefinanceitalian",
            },
            {
                label: "русский",
                href: "https://t.me/goosefinancerussian",
            },
            {
                label: "Türkiye",
                href: "https://t.me/GooseFinanceTurkey",
            },
            // {
            //   label: "Português",
            //   href: "https://t.me/PancakeSwapPortuguese",
            // },
            {
                label: "Español",
                href: "https://t.me/goosefinancespanish",
            },
            {
                label: "日本語",
                href: "https://t.me/goosefinancejapanese",
            },
            {
                label: "Français",
                href: "https://t.me/goosefinancefrench",
            },
            {
                label: "Announcements",
                href: "https://t.me/goosefinanceann",
            },
            {
                label: "Price Bot",
                href: "https://t.me/BinanceRocketEGG",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/goosedefi",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://www.reddit.com/r/GooseFinanceofficial",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.text : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  background: ", ";\n  background-size: 6px 50px !important;\n  background-repeat: no-repeat;\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  background: ", ";\n  background-size: 6px 50px !important;\n  background-repeat: no-repeat;\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "" + theme.colors.gradients.menuBorder : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled__default['default'](Text)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  background: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  background: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var templateObject_1$z, templateObject_2$a, templateObject_3$6, templateObject_4$2;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var IconSub = function (child) {
    var IconSub = Icons[!child.icon ? "entry.icon" : child.icon];
    return (React__default['default'].createElement(IconSub, { width: "24px", mr: "8px" }));
};
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    item.icon && (IconSub(item)),
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label),
                    item.status && (React__default['default'].createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text)))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label),
                entry.status && (React__default['default'].createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: block;\n  align-items: center;\n  padding: 0 16px;\n"], ["\n  display: block;\n  align-items: center;\n  padding: 0 16px;\n"])));
var SocialIcons = styled__default['default'].div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$k, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement("div", null, cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: priceLink, target: "_blank" },
                React__default['default'].createElement(Icon$u, { width: "24px", mr: "8px" }),
                React__default['default'].createElement(Text, { fontSize: "20px", color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }))),
            React__default['default'].createElement(SocialIcons, null,
                React__default['default'].createElement(Flex, null,
                    React__default['default'].createElement(Text, { color: "text", fontSize: "14px" }, "Find us in media")),
                React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                    var Icon = Icons$1[social.icon];
                    var iconProps = { width: "24px", color: "title", style: { cursor: "pointer" } };
                    var mr = index < socials.length - 1 ? "8px" : 0;
                    if (social.items) {
                        return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                    }
                    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                        React__default['default'].createElement(Icon, __assign({}, iconProps))));
                })))),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$3, templateObject_5$1;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1e,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$1h,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$1f,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$1g,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1i,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1j,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$m, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1k = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$1k, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$4, templateObject_5$2;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = styled.createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#9B2244",
    primaryBright: "#9B2244",
    primaryDark: "#aa8929",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#D8CACA", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#816C73", textDisabled: "#BDC2C4", textSubtle: "#D86D25", title: "#9B2244", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        menuBorder: "linear-gradient(#ffe88d 0%, #ffe88d 1.01%, #f5d485 6.85%, #da9e72 24.63%, #c37261 42.02%, #b14f54 58.61%, #a5364b 74.2%, #9d2745 88.42%, #9b2244 100%)",
        buttonGradient: "linear-gradient(to right, #ffe88d 0%, #ffe88d 1.01%, #b75b59 69.72%, #9b2244 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", title: "#FFFFFF", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        menuBorder: "linear-gradient(#ffe88d 0%, #ffe88d 1.01%, #f5d485 6.85%, #da9e72 24.63%, #c37261 42.02%, #b14f54 58.61%, #a5364b 74.2%, #9d2745 88.42%, #9b2244 100%)",
        buttonGradient: "linear-gradient(to right, #ffe88d 0%, #ffe88d 1.01%, #b75b59 69.72%, #9b2244 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.ArrowIcon = Icon$G;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$d;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$c;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$e;
exports.ChevronDownIcon = Icon$f;
exports.ChevronLeftIcon = Icon$g;
exports.ChevronRightIcon = Icon$h;
exports.ChevronUpIcon = Icon$i;
exports.CloseIcon = Icon$j;
exports.CogIcon = Icon$k;
exports.CommunityIcon = Icon$l;
exports.CopyIcon = Icon$m;
exports.CopyToClipboard = CopyToClipboard;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$n;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.JavaPlaceholder = Icon$H;
exports.JavaRoundIcon = Icon$v;
exports.JavasIcon = Icon$t;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$o;
exports.LogoIcon = Icon$p;
exports.LogoRoundIcon = Icon$q;
exports.Menu = Menu;
exports.MinusIcon = Icon$r;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$s;
exports.PancakeRoundIcon = Icon$u;
exports.PrizeIcon = Icon$w;
exports.Progress = Progress;
exports.ProgressJava = Icon$I;
exports.Radio = Radio;
exports.RemoveIcon = Icon$x;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$C;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$D;
exports.SyncAltIcon = Icon$E;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$A;
exports.TicketRound = Icon$B;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$y;
exports.WarningIcon = Icon$F;
exports.Won = Icon$z;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
