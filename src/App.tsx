import './App.css'
import {useDispatch} from "react-redux";
import type {AppDispatch} from "./store/store.ts";
import {useEffect} from "react";
import {fetchVacancies} from "./store/vacanciesSlice.ts";
import {AppHeader} from "./components/Header/AppHeader.tsx";
import {AppShell} from "@mantine/core";
import {Body} from "./components/Body/Body.tsx";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch])
    return <AppShell header={{height: 60}}>
        <AppShell.Header withBorder>
                <AppHeader/>
        </AppShell.Header>
        <AppShell.Main>
            <Body/>
        </AppShell.Main>
    </AppShell>
}

export default App
