import styled from "styled-components";

import { useRecoilState } from "recoil"
import { DiedAtom } from "../Atoms/atoms"

import { AiOutlineClose } from 'react-icons/ai'
import { useEffect } from "react";

const Died: React.FC = () => {
    const [isDiedActive, setIsDiedctive] = useRecoilState(DiedAtom)

    useEffect(() => {
        if(isDiedActive) {
            setTimeout(() => {
                setIsDiedctive(false)
            }, 2000)
        }
    }, [isDiedActive])

    return (
        <StyledDied>
            <Text>
                <h1>Game Over!</h1>
                <span>Hope you had fun.</span>
            </Text>
            
            <Icon onClick={() => setIsDiedctive(false)}>
                    <AiOutlineClose />
                </Icon>
        </StyledDied>
    )
}

const StyledDied = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    >h1 {
        font-size: 3rem;
    }
`

const Icon = styled.div`
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
` 

export default Died