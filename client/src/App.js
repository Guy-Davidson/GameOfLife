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
const Global_Styled_1 = __importDefault(require("./Styles/Global.Styled"));
const styled_components_2 = require("styled-components");
const DarkTheme_1 = require("./Styles/DarkTheme");
const react_query_1 = require("react-query");
const MainAPI_1 = require("./API/MainAPI");
exports.queryClient = new react_query_1.QueryClient();
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, Object.assign({ client: exports.queryClient }, { children: (0, jsx_runtime_1.jsxs)(styled_components_2.ThemeProvider, Object.assign({ theme: DarkTheme_1.DarkTheme }, { children: [(0, jsx_runtime_1.jsx)(Global_Styled_1.default, {}), (0, jsx_runtime_1.jsxs)(StyledApp, { children: ["This is an App", (0, jsx_runtime_1.jsx)(TestComp, {})] })] })) })));
};
const TestComp = () => {
    const test = (0, MainAPI_1.GetTestQuery)(99);
    (0, react_1.useEffect)(() => {
        console.log("initing App");
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: test.isSuccess &&
            (0, jsx_runtime_1.jsx)("div", { children: `Test came back ok with number: ${test.data}` }) }));
};
const StyledApp = styled_components_1.default.div `
    background-color: ${props => props.theme.App.backgroundColor.main};
`;
exports.default = (0, styled_components_1.withTheme)(App);
