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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importStar(require("styled-components"));
const styled_components_2 = require("styled-components");
//@ts-ignore
const Global_Styled_1 = __importDefault(require("./Styles/Global.Styled"));
//@ts-ignore
const Themes_1 = require("./Styles/Themes");
const Themes_2 = require("./Styles/Themes");
const react_query_1 = require("react-query");
//@ts-ignore
const atoms_1 = require("./Atoms/atoms");
const recoil_1 = require("recoil");
const Header_1 = __importDefault(require("./Components/Header"));
const Popup_1 = __importDefault(require("./Components/Popup"));
const Explain_1 = __importDefault(require("./Components/Explain"));
const Board_1 = __importDefault(require("./Components/Board"));
const Controller_1 = __importDefault(require("./Components/Controller"));
exports.queryClient = new react_query_1.QueryClient();
const App = () => {
    const [theme, setTheme] = (0, react_1.useState)(Themes_1.DarkTheme);
    const [isExplainActive, setIsExplainActive] = (0, recoil_1.useRecoilState)(atoms_1.ExplainAtom);
    const handleThemeClick = (themeId) => {
        themeId === 'dark' ? setTheme(Themes_1.DarkTheme) : setTheme(Themes_2.LightTheme);
    };
    const handleExplainClick = () => {
        setIsExplainActive(prev => !prev);
    };
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, Object.assign({ client: exports.queryClient }, { children: (0, jsx_runtime_1.jsxs)(styled_components_2.ThemeProvider, Object.assign({ theme: theme }, { children: [(0, jsx_runtime_1.jsx)(Global_Styled_1.default, {}), (0, jsx_runtime_1.jsxs)(StyledApp, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, { handleThemeClick: handleThemeClick, handleExplainClick: handleExplainClick, theme: theme }), (0, jsx_runtime_1.jsx)(Board_1.default, {}), (0, jsx_runtime_1.jsx)(Controller_1.default, {}), isExplainActive &&
                            (0, jsx_runtime_1.jsx)(Popup_1.default, { children: (0, jsx_runtime_1.jsx)(Explain_1.default, {}) })] })] })) })));
};
const StyledApp = styled_components_1.default.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.App.backgroundColor.main};
    color: ${props => props.theme.App.fontColor.main};
`;
exports.default = (0, styled_components_1.withTheme)(App);
