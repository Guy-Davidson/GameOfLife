import styled from "styled-components"

const Controller: React.FC = () => {
    return (
        <StyledController>
            <div>init</div>
            <div>next</div>
            <div>start</div>
            <div>stop</div>
            <div>reset</div>
        </StyledController>
    )
}

const StyledController = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export default Controller