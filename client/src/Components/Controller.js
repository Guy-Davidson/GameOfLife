"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Controller = () => {
    return ((0, jsx_runtime_1.jsxs)(StyledController, { children: [(0, jsx_runtime_1.jsx)("div", { children: "init" }), (0, jsx_runtime_1.jsx)("div", { children: "next" }), (0, jsx_runtime_1.jsx)("div", { children: "start" }), (0, jsx_runtime_1.jsx)("div", { children: "stop" }), (0, jsx_runtime_1.jsx)("div", { children: "reset" })] }));
};
const StyledController = styled_components_1.default.div `
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
exports.default = Controller;
