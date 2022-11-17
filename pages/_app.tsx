import type {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '@/styles'

const theme = {
    fs: '2.125rem'
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
