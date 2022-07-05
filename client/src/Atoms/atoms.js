"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigAtom = exports.IsSettingUpAtom = exports.GameIDAtom = exports.ExplainAtom = void 0;
const recoil_1 = require("recoil");
exports.ExplainAtom = (0, recoil_1.atom)({
    key: 'ExplainAtom',
    default: false
});
exports.GameIDAtom = (0, recoil_1.atom)({
    key: 'GameIDAtom',
    default: ''
});
exports.IsSettingUpAtom = (0, recoil_1.atom)({
    key: 'IsSettingUpAtom',
    default: false
});
exports.ConfigAtom = (0, recoil_1.atom)({
    key: 'ConfigAtom',
    default: new Array()
});
