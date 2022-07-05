"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Popup = (props) => {
    return ((0, jsx_runtime_1.jsx)(StyledPopup, { children: props.children }));
};
const StyledPopup = styled_components_1.default.div `
    height: 70vh;
    width: 50vw;
    position: absolute;
    top: 10vh;
    right: 25vw;
    box-shadow: ${props => props.theme.App.shadow.l};
    background-color: ${props => props.theme.App.backgroundColor.sec};
    border-radius: 5px;
    padding: 1rem;

    animation: slideIn .35s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;

    @keyframes slideIn {
        0% {opacity: 0; transform: scale(.95)}                 
        100% {opacity: 1; transform: scale(1)}
    }
`;
exports.default = Popup;
