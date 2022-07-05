import styled from "styled-components"

interface Props {
    key: string
}

const Square: React.FC<Props> = (props) => {
    return (
        <StyledSquare>
            
        </StyledSquare>
    )
}

const StyledSquare = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.Board.dividerColor.main};
    width: 100%;
    height: 100%;
`

export default Square