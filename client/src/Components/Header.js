"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
//@ts-ignore
const ai_1 = require("react-icons/ai");
const bs_1 = require("react-icons/bs");
const bs_2 = require("react-icons/bs");
const Header = (props) => {
    const { handleExplainClick, handleThemeClick, theme } = props;
    return ((0, jsx_runtime_1.jsxs)(StyledHeader, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Game of Life" }), (0, jsx_runtime_1.jsxs)(IconsWrapper, { children: [(0, jsx_runtime_1.jsx)(Icon, { children: theme.id === 'dark' ?
                            (0, jsx_runtime_1.jsx)(bs_1.BsFillSunFill, { onClick: () => handleThemeClick(theme.id === 'dark' ? 'light' : 'dark') })
                            :
                                (0, jsx_runtime_1.jsx)(bs_2.BsFillMoonFill, { onClick: () => handleThemeClick(theme.id === 'dark' ? 'light' : 'dark') }) }), (0, jsx_runtime_1.jsx)(Icon, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineQuestionCircle, { onClick: handleExplainClick }) })] })] }));
};
const StyledHeader = styled_components_1.default.div `
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: 10vh;
    >h1 {
        font-size: 3rem;
    }
`;
const IconsWrapper = styled_components_1.default.div `
    display: flex;
    padding: 1rem;
    height: fit-content;
    position: absolute;
    right: 0;
    top: 0;
`;
const Icon = styled_components_1.default.div `
    display: flex;
    margin-left: 1rem;
    height: fit-content;
    padding: .5rem;
    font-size: 3rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: ${props => props.theme.Icon.backgroundColor.hover.main};
    }
`;
exports.default = Header;
