"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const recoil_1 = require("recoil");
const atoms_1 = require("../Atoms/atoms");
const ai_1 = require("react-icons/ai");
const react_1 = require("react");
const Died = () => {
    const [isDiedActive, setIsDiedctive] = (0, recoil_1.useRecoilState)(atoms_1.DiedAtom);
    (0, react_1.useEffect)(() => {
        if (isDiedActive) {
            setTimeout(() => {
                setIsDiedctive(false);
            }, 2000);
        }
    }, [isDiedActive]);
    return ((0, jsx_runtime_1.jsxs)(StyledDied, { children: [(0, jsx_runtime_1.jsxs)(Text, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Game Over!" }), (0, jsx_runtime_1.jsx)("span", { children: "Hope you had fun." })] }), (0, jsx_runtime_1.jsx)(Icon, Object.assign({ onClick: () => setIsDiedctive(false) }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineClose, {}) }))] }));
};
const StyledDied = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
`;
const Text = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    >h1 {
        font-size: 3rem;
    }
`;
const Icon = styled_components_1.default.div `
    display: flex;
    margin-left: 1rem;
    height: fit-content;
    padding: .5rem;
    cursor: pointer;
    font-size: 3rem;
    border-radius: 4px;

    &:hover {
        background-color: ${props => props.theme.Icon.backgroundColor.hover.main};
    }
`;
exports.default = Died;
