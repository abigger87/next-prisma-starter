import {ThemeProvider, CSSReset} from '@chakra-ui/core'
import {Global, css} from '@emotion/core'

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider>
            <CSSReset />
            <Component {...pageProps} />
            <Global styles={css`
            body {
                background-color: #f7fafc;
            }

            #__next {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                max-width: 600px;
                margin: 0 auto;
                padding: 16px;
            }
            `}/>
        </ThemeProvider>
    )
}

export default MyApp