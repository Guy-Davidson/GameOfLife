import { atom } from 'recoil'

export const ExplainAtom = atom({
    key: 'ExplainAtom',
    default: false
})

export const DiedAtom = atom({
    key: 'DiedAtom',
    default: false
})

export const GameIDAtom = atom({
    key: 'GameIDAtom',
    default: ''
})

export const IsSettingUpAtom = atom({
    key: 'IsSettingUpAtom',
    default: false
})

export const IsRunningAtom = atom({
    key: 'IsRunningAtom',
    default: false
})

export const ConfigAtom = atom({
    key: 'ConfigAtom',
    default: new Array()
})