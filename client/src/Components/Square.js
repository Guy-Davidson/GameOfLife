"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const atoms_1 = require("../Atoms/atoms");
const recoil_1 = require("recoil");
const MainAPI_1 = require("../API/MainAPI");
const Square = (props) => {
    const { i, j } = props;
    const [isSettingUp, setIsSettingUp] = (0, recoil_1.useRecoilState)(atoms_1.IsSettingUpAtom);
    const [config, setConfig] = (0, recoil_1.useRecoilState)(atoms_1.ConfigAtom);
    const [gameID, setGameID] = (0, recoil_1.useRecoilState)(atoms_1.GameIDAtom);
    const boardState = (0, MainAPI_1.GetBoardStateQuery)(gameID, isSettingUp);
    return ((0, jsx_runtime_1.jsx)(StyledSquare, { onClick: () => {
            if (isSettingUp) {
                setConfig(prev => config.some(s => s[0] === i && s[1] === j) ?
                    prev.filter(([i1, j1]) => i1 !== i || j1 !== j)
                    :
                        [...prev, [i, j]]);
            }
        }, isActive: (isSettingUp && config.some(s => s[0] === i && s[1] === j)) ||
            (gameID && !isSettingUp && boardState.isSuccess && boardState.data[i][j]), isClickable: isSettingUp }));
};
const StyledSquare = styled_components_1.default.div `
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.Board.dividerColor.main};
    width: 100%;
    height: 100%;
    cursor: ${props => props.isClickable ? 'pointer' : 'default'};

    ${props => {
    if (props.isActive) {
        return (0, styled_components_1.css) `
                background-color: ${props => props.theme.Board.Square.backgroundColor.active};
            `;
    }
}}

    ${props => {
    if (props.isClickable && !props.isActive) {
        return (0, styled_components_1.css) `
                cursor: pointer;

                &:hover {
                    background-color: ${props => props.theme.Board.Square.backgroundColor.hover};
                }
            `;
    }
}}
`;
exports.default = Square;
