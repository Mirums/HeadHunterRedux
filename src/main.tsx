import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import {MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider
            theme={{
                fontFamily: "Open Sans, system-ui, sans-serif",
            }}
        >
            <Provider store={store}>
                <App/>
            </Provider>
        </MantineProvider>
    </StrictMode>,
)
