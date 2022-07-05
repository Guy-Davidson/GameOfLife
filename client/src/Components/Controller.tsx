import { useState } from "react";
import styled, { css } from "styled-components"
import { v4 as uuid } from 'uuid';

import { useRecoilState } from "recoil"
import { GameIDAtom, IsSettingUpAtom, ConfigAtom, IsRunningAtom } from "../Atoms/atoms"

import { PostNewGame, PostGameConfig, DeleteGame } from "../API/MainAPI";

import { queryClient } from "../App";

const Controller: React.FC = () => {
    const [gameID, setGameID] = useRecoilState(GameIDAtom)
    const [isSettingUp, setIsSettingUp] = useRecoilState(IsSettingUpAtom)
    const [config, setConfig] = useRecoilState(ConfigAtom)
    const [isRunning, setIsRunning] = useRecoilState(IsRunningAtom)

    const handleInitClick = async () => {
        let gameID = uuid()
        let res = await PostNewGame(gameID)
        if(res === "ok") {
            setGameID(gameID)
            setIsSettingUp(true)
        }
    }

    const handleOKClick = async () => {
        let res = await PostGameConfig(gameID, config)
        if(res === "ok") {
            setIsSettingUp(false)
        }
    }

    const handleNextClick = () => {
        if(isRunning) return 

        queryClient.refetchQueries(['BoardState', gameID])
    }

    const handleStartClick = () => {
        setIsRunning(true)
    }

    const handleStopClick = () => {
        if(!isRunning) return 
        setIsRunning(false)
    }

    const handleResetClick = () => {
        if(isRunning) return 
        setIsRunning(false)
        setConfig(new Array())
        setGameID('')
        DeleteGame(gameID)
    }

    return (
        <StyledController>
            {!gameID ?
                <Button onClick={handleInitClick}>Setup a new Game</Button>
            :
            <>
            {isSettingUp ? 
                <SetupWrapper>
                    <Instraction>Click on the board to set the initial state</Instraction>
                    <Button onClick={handleOKClick} isActive={config.length > 0}>ok</Button>
                </SetupWrapper>                
            :
                <>
                <Button isActive={!isRunning} onClick={handleNextClick}>next</Button>
                <Button isActive={!isRunning} onClick={handleStartClick}>start</Button>
                <Button isActive={isRunning} onClick={handleStopClick}>stop</Button>
                <Button isActive={!isRunning} onClick={handleResetClick}>reset</Button>
                </>
            }

            </>
            }
        </StyledController>
    )
}

const StyledController = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
`

interface ButtonProps {
    isActive?: boolean
}

const Button = styled.div<ButtonProps>`
    border-radius: 4px;
    padding: .5rem 2rem;
    font-size: 1.6rem;
    user-select: none;
    
    box-shadow: ${props => props.theme.App.shadow.s};
    cursor: pointer;
    ${props => {
        if(typeof props.isActive === 'boolean' && !props.isActive) {
            return css`
                background-color: ${props => props.theme.Button.backgroundColor.main};            
                filter: grayscale(1);
                cursor: not-allowed;
            `
        } else {
            return css`
                background-color: ${props => props.theme.Button.backgroundColor.main};
                cursor: pointer;
            `
        }
    }}
`

const SetupWrapper = styled.div`
    display: flex;
`

const Instraction = styled.div`
    font-size: 2rem;
    margin-right: 3rem;
`

export default Controller