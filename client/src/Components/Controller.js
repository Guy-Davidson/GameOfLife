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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const uuid_1 = require("uuid");
const recoil_1 = require("recoil");
const atoms_1 = require("../Atoms/atoms");
const MainAPI_1 = require("../API/MainAPI");
const App_1 = require("../App");
const Controller = () => {
    const [gameID, setGameID] = (0, recoil_1.useRecoilState)(atoms_1.GameIDAtom);
    const [isSettingUp, setIsSettingUp] = (0, recoil_1.useRecoilState)(atoms_1.IsSettingUpAtom);
    const [config, setConfig] = (0, recoil_1.useRecoilState)(atoms_1.ConfigAtom);
    const [isRunning, setIsRunning] = (0, recoil_1.useRecoilState)(atoms_1.IsRunningAtom);
    const handleInitClick = () => __awaiter(void 0, void 0, void 0, function* () {
        let gameID = (0, uuid_1.v4)();
        let res = yield (0, MainAPI_1.PostNewGame)(gameID);
        if (res === "ok") {
            setGameID(gameID);
            setIsSettingUp(true);
        }
    });
    const handleOKClick = () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield (0, MainAPI_1.PostGameConfig)(gameID, config);
        if (res === "ok") {
            setIsSettingUp(false);
        }
    });
    const handleNextClick = () => {
        if (isRunning)
            return;
        App_1.queryClient.refetchQueries(['BoardState', gameID]);
    };
    const handleStartClick = () => {
        setIsRunning(true);
    };
    const handleStopClick = () => {
        if (!isRunning)
            return;
        setIsRunning(false);
    };
    const handleResetClick = () => {
        if (isRunning)
            return;
        setIsRunning(false);
        setConfig(new Array());
        setGameID('');
        (0, MainAPI_1.DeleteGame)(gameID);
    };
    return ((0, jsx_runtime_1.jsx)(StyledController, { children: !gameID ?
            (0, jsx_runtime_1.jsx)(Button, Object.assign({ onClick: handleInitClick }, { children: "Setup a new Game" }))
            :
                (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isSettingUp ?
                        (0, jsx_runtime_1.jsxs)(SetupWrapper, { children: [(0, jsx_runtime_1.jsx)(Instraction, { children: "Click on the board to set the initial state" }), (0, jsx_runtime_1.jsx)(Button, Object.assign({ onClick: handleOKClick, isActive: config.length > 0 }, { children: "ok" }))] })
                        :
                            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button, Object.assign({ isActive: !isRunning, onClick: handleNextClick }, { children: "next" })), (0, jsx_runtime_1.jsx)(Button, Object.assign({ isActive: !isRunning, onClick: handleStartClick }, { children: "start" })), (0, jsx_runtime_1.jsx)(Button, Object.assign({ isActive: isRunning, onClick: handleStopClick }, { children: "stop" })), (0, jsx_runtime_1.jsx)(Button, Object.assign({ isActive: !isRunning, onClick: handleResetClick }, { children: "reset" }))] }) }) }));
};
const StyledController = styled_components_1.default.div `
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
`;
const Button = styled_components_1.default.div `
    border-radius: 4px;
    padding: .5rem 2rem;
    font-size: 1.6rem;
    user-select: none;
    
    box-shadow: ${props => props.theme.App.shadow.s};
    cursor: pointer;
    ${props => {
    if (typeof props.isActive === 'boolean' && !props.isActive) {
        return (0, styled_components_1.css) `
                background-color: ${props => props.theme.Button.backgroundColor.main};            
                filter: grayscale(1);
                cursor: not-allowed;
            `;
    }
    else {
        return (0, styled_components_1.css) `
                background-color: ${props => props.theme.Button.backgroundColor.main};
                cursor: pointer;
            `;
    }
}}
`;
const SetupWrapper = styled_components_1.default.div `
    display: flex;
`;
const Instraction = styled_components_1.default.div `
    font-size: 2rem;
    margin-right: 3rem;
`;
exports.default = Controller;
