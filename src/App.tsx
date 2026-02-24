import './App.css'
import {AppHeader} from "./components/Header/AppHeader.tsx";
import {AppShell} from "@mantine/core";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <AppShell header={{height: 60}}>
            <AppShell.Header withBorder>
                <AppHeader/>
            </AppShell.Header>
            <AppShell.Main bg={'dark.0'}>
                <Outlet/>
            </AppShell.Main>
        </AppShell>)
}

export default App
