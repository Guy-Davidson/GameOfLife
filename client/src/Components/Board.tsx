import styled from "styled-components"

import Square from "./Square"

const Board: React.FC = () => {
    return (
        <StyledBoard>
            {(new Array(50).fill(0).map((e, i) => {
                return (
                    <Row key={`r${i}`}>
                        {new Array(50).fill(0).map((e, j) => {
                            return (
                                <Square key={`${i},${j}`} />
                            )
                        })}
                    </Row>
                )
            }))}  
        </StyledBoard>
    )
}

const StyledBoard = styled.div`
    width: 80%;
    height: 100%;
    box-shadow: ${props => props.theme.App.shadow.l};
    margin: auto;
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(50, 1fr);
    height: 100%;
    width: 100%;
`

export default Board