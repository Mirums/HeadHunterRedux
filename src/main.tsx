import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import {createTheme, MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

const theme = createTheme({
    primaryColor: 'indigoCustom',

    colors: {
        indigoCustom: [
            "#EEF2FF",
            "#E0E7FF",
            "#C7D2FE",
            "#A5B4FC",
            "#818CF8",
            "#6366F1",
            "#4F46E5",
            "#4623EB", //7 primary
            "#364FC7", //8 DarkPrimary
            "#2B3A99",
        ],
        dark: [
            "#F6F6F7", // 0 background
            "#FFFFFF", // 1 white
            "#B3B3B3", // 2 ultra light (10%)
            "#999999", // 3 pre light (20%)
            "#808080", // 4 light gray (30%)
            "#4D4D4D", // 5 gray (50%)
            "#1A1A1A",
            "#0F0F10", // 7 black1
            "#0F0F10",
            "#0F0F10",
        ],
    },
    black: '#0F0F10',
    white: '#FFFFFF',

    fontFamily: "Open Sans, system-ui, sans-serif",
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MantineProvider>
    </StrictMode>,
)
