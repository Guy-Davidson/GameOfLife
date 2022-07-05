import styled from "styled-components"
//@ts-ignore
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";


interface Props {
    handleThemeClick: (themeId: string) => void,
    handleExplainClick: () => void,
    theme: { id: string},
}

const Header: React.FC<Props> = (props) => {
    const { handleExplainClick, handleThemeClick, theme } = props

    return (
        <StyledHeader>
            <h1>Game of Life</h1>
            <IconsWrapper>
                <Icon>
                    {theme.id === 'dark' ?
                        <BsFillSunFill 
                            onClick={() => handleThemeClick(theme.id === 'dark' ? 'light' : 'dark')}
                        />
                    :
                        <BsFillMoonFill 
                            onClick={() => handleThemeClick(theme.id === 'dark' ? 'light' : 'dark')}
                        />
                    }

                </Icon>    
                <Icon>
                    <AiOutlineQuestionCircle 
                        onClick={handleExplainClick}
                    />
                </Icon>             
            </IconsWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: 10vh;
    >h1 {
        font-size: 3rem;
    }
`

const IconsWrapper = styled.div`
    display: flex;
    padding: 1rem;
    height: fit-content;
    position: absolute;
    right: 0;
    top: 0;
`

const Icon = styled.div`
    display: flex;
    margin-left: 1rem;
    height: fit-content;
    padding: .5rem;
    font-size: 3rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: ${props => props.theme.Icon.backgroundColor.hover.main};
    }
`

export default Header