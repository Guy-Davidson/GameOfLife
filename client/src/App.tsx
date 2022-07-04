import { useEffect } from 'react'
import styled, { withTheme } from 'styled-components'

import GlobalStyles from './Styles/Global.Styled'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Styles/DarkTheme'

import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { GetTestQuery } from './API/MainAPI'

export const queryClient = new QueryClient()

const App: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={DarkTheme}>
                <GlobalStyles />
                    <StyledApp>
                        This is an App
                        <TestComp />
                    </StyledApp>           
            </ThemeProvider>        
        </QueryClientProvider>
        )
}

const TestComp: React.FC = () => {

    const test = GetTestQuery(99)

    useEffect(() => {
        console.log("initing App");
    }, [])

    return (
        <>
        {test.isSuccess &&
            <div>
                {`Test came back ok with number: ${test.data}`}
            </div>
        }
        </>
    )
}

const StyledApp = styled.div`
    background-color: ${props => props.theme.App.backgroundColor.main};
`

export default withTheme(App);
