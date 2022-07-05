import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
    children: ReactNode
}

const Popup: React.FC<Props> = (props) => {
    return (
        <StyledPopup>
            {props.children}
        </StyledPopup>
    )
}

const StyledPopup = styled.div`
    height: 80vh;
    width: 50vw;
    position: absolute;
    top: 10vh;
    right: 25vw;
    box-shadow: ${props => props.theme.App.shadow.l};
    background-color: ${props => props.theme.App.backgroundColor.sec};
    border-radius: 5px;
    padding: 1rem;

    animation: slideIn .35s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;

    @keyframes slideIn {
        0% {opacity: 0; transform: scale(.95)}                 
        100% {opacity: 1; transform: scale(1)}
    }
`

export default Popup