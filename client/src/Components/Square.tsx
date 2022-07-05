import styled, { css } from "styled-components"

import { ConfigAtom, IsSettingUpAtom, GameIDAtom, IsRunningAtom } from '../Atoms/atoms'
import { useRecoilState } from 'recoil'

import { GetBoardStateQuery } from '../API/MainAPI'

interface Props {
    key: string,
    i: number,
    j: number
}

const Square: React.FC<Props> = (props) => {
    const { i, j } = props

    const [isSettingUp, setIsSettingUp] = useRecoilState(IsSettingUpAtom)
    const [isRunning, setIsRunning] = useRecoilState(IsRunningAtom)
    const [config, setConfig] = useRecoilState(ConfigAtom)
    const [gameID, setGameID] = useRecoilState(GameIDAtom)

    const boardState = GetBoardStateQuery(gameID, isSettingUp, isRunning)

    return (
        <StyledSquare
            onClick={() => {
                if(isSettingUp) {
                    setConfig(prev => config.some(s => s[0] === i && s[1] === j) ? 
                        prev.filter(([i1,j1]) => i1 !== i || j1 !== j) 
                        : 
                        [...prev, [i,j]])
                }
            }}
            isActive={
                    (isSettingUp && config.some(s => s[0] === i && s[1] === j)) ||
                    (gameID && !isSettingUp && boardState.isSuccess && boardState.data.board[i][j])
                }
            isClickable={isSettingUp}
        >
            
        </StyledSquare>
    )
}

interface SquareProps {
    isActive: boolean, 
    isClickable: boolean
}

const StyledSquare = styled.div<SquareProps>`
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.Board.dividerColor.main};
    width: 100%;
    height: 100%;
    cursor: ${props => props.isClickable ? 'pointer' : 'default'};

    ${props => {
        if(props.isActive) {            
            return css`
                background-color: ${props => props.theme.Board.Square.backgroundColor.active};
            `
        } 
    }}

    ${props => {
        if(props.isClickable && !props.isActive) {
            return css`
                cursor: pointer;

                &:hover {
                    background-color: ${props => props.theme.Board.Square.backgroundColor.hover};
                }
            `
        }
    }}
`

export default Square