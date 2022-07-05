"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Square = (props) => {
    return ((0, jsx_runtime_1.jsx)(StyledSquare, {}));
};
const StyledSquare = styled_components_1.default.div `
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.Board.dividerColor.main};
    width: 100%;
    height: 100%;
`;
exports.default = Square;
