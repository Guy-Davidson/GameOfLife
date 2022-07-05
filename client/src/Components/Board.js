"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Square_1 = __importDefault(require("./Square"));
const Board = () => {
    return ((0, jsx_runtime_1.jsx)(StyledBoard, { children: (new Array(50).fill(0).map((e, i) => {
            return ((0, jsx_runtime_1.jsx)(Row, { children: new Array(50).fill(0).map((e, j) => {
                    return ((0, jsx_runtime_1.jsx)(Square_1.default, { i: i, j: j }, `${i},${j}`));
                }) }, `r${i}`));
        })) }));
};
const StyledBoard = styled_components_1.default.div `
    width: 80%;
    height: 100%;
    box-shadow: ${props => props.theme.App.shadow.l};
    margin: auto;
    display: flex;
    flex-direction: column;
`;
const Row = styled_components_1.default.div `
    display: grid;
    grid-template-columns: repeat(50, 1fr);
    height: 100%;
    width: 100%;
`;
exports.default = Board;
