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
const Explain = () => {
    const [isExplainActive, setIsExplainActive] = (0, recoil_1.useRecoilState)(atoms_1.ExplainAtom);
    return ((0, jsx_runtime_1.jsxs)(StyledExplain, { children: [(0, jsx_runtime_1.jsxs)(Title, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Rules" }), (0, jsx_runtime_1.jsx)(Icon, Object.assign({ onClick: () => setIsExplainActive(false) }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineClose, {}) }))] }), (0, jsx_runtime_1.jsxs)(Body, { children: ["The universe of the Game of Life is an 50x50, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). ", (0, jsx_runtime_1.jsx)("br", {}), "Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur: ", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), '\t', "1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.", (0, jsx_runtime_1.jsx)("br", {}), '\t', "2. Any live cell with two or three live neighbours lives on to the next generation.", (0, jsx_runtime_1.jsx)("br", {}), '\t', "3. Any live cell with more than three live neighbours dies, as if by overpopulation.", (0, jsx_runtime_1.jsx)("br", {}), '\t', "4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "These rules, which compare the behavior of the automaton to real life, can be condensed into the following:", (0, jsx_runtime_1.jsx)("br", {}), '\t', "1. Any live cell with two or three live neighbours survives.", (0, jsx_runtime_1.jsx)("br", {}), '\t', "2. Any dead cell with three live neighbours becomes a live cell.", (0, jsx_runtime_1.jsx)("br", {}), '\t', "3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick.[nb 1] Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.", (0, jsx_runtime_1.jsx)("br", {})] })] }));
};
const StyledExplain = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    height: 100%;

    overflow-y: auto;

    ::-webkit-scrollbar {            
                width: 7px;                
                height: 7px;

                &:hover {
                    cursor: pointer;
                }
        }

        ::-webkit-scrollbar-track {
                background-color: transparent;                
                border-radius: 10px;                
        }

        ::-webkit-scrollbar-thumb {                
                background-color: ${props => props.theme.App.scroll.main};
                border-radius: 10px;
        }
`;
const Title = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;

`;
const Body = styled_components_1.default.div `
    white-space: pre-wrap;
    font-size: 1.6rem;
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
exports.default = Explain;
