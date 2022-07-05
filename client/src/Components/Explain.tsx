import styled from "styled-components"

import { useRecoilState } from "recoil"
import { ExplainAtom } from "../Atoms/atoms"

import { AiOutlineClose } from 'react-icons/ai'

const Explain: React.FC = () => {
    const [isExplainActive, setIsExplainActive] = useRecoilState(ExplainAtom)

    return (
        <StyledExplain>
            <Title>
                <h1>Rules</h1>
                <Icon onClick={() => setIsExplainActive(false)}>
                    <AiOutlineClose />
                </Icon>
            </Title>
            <Body>
            The universe of the Game of Life is an 50x50, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). <br />
            Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur: <br /><br />

                    {'\t'}1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.<br />
                    {'\t'}2. Any live cell with two or three live neighbours lives on to the next generation.<br />
                    {'\t'}3. Any live cell with more than three live neighbours dies, as if by overpopulation.<br />
                    {'\t'}4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.<br /><br />
            These rules, which compare the behavior of the automaton to real life, can be condensed into the following:<br />

            {'\t'}1. Any live cell with two or three live neighbours survives.<br />
            {'\t'}2. Any dead cell with three live neighbours becomes a live cell.<br />
            {'\t'}3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.<br /><br />    

            The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick.[nb 1] Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.<br />
            </Body>
        </StyledExplain>
    )
}

const StyledExplain = styled.div`
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
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;

`

const Body = styled.div`
    white-space: pre-wrap;
    font-size: 1.6rem;
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
  

export default Explain