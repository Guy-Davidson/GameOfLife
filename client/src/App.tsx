import { useEffect, useState } from 'react'
import styled, { withTheme } from 'styled-components'

import { ThemeProvider } from 'styled-components'
//@ts-ignore
import GlobalStyles from './Styles/Global.Styled'
//@ts-ignore
import { DarkTheme } from './Styles/Themes'
import { LightTheme } from './Styles/Themes'

import { QueryClientProvider, QueryClient } from 'react-query'

//@ts-ignore
import { ExplainAtom, DiedAtom } from './Atoms/atoms'

import { useRecoilState } from 'recoil'

import Header from './Components/Header'
import Popup from './Components/Popup'
import Explain from './Components/Explain'
import Board from './Components/Board'
import Controller from './Components/Controller'
import Died from './Components/Died'

export const queryClient = new QueryClient()

const App: React.FC = () => {
    const [theme, setTheme] = useState(DarkTheme)
    const [isExplainActive, setIsExplainActive] = useRecoilState(ExplainAtom)
    const [isDiedActive, setIsDiedActive] = useRecoilState(DiedAtom)

    const handleThemeClick = (themeId: string) => {
        themeId === 'dark' ? setTheme(DarkTheme) : setTheme(LightTheme)
    }

    const handleExplainClick = () => {
        setIsExplainActive(prev => !prev)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                    <StyledApp>
                        <Header 
                            handleThemeClick={handleThemeClick}
                            handleExplainClick={handleExplainClick}
                            theme={theme}
                        />
                        <Board />
                        <Controller />
                        {isExplainActive && 
                            <Popup>
                                <Explain />
                            </Popup>
                        }
                        {isDiedActive && 
                            <Popup>
                                <Died />
                            </Popup>
                        }                        
                    </StyledApp>           
            </ThemeProvider>        
        </QueryClientProvider>
        )
}


const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.App.backgroundColor.main};
    color: ${props => props.theme.App.fontColor.main};
`

export default withTheme(App);
