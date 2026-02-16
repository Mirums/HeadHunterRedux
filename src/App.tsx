import './App.css'
import {Text} from "@mantine/core";
import {useDispatch} from "react-redux";
import type { AppDispatch} from "./store/store.ts";
import {useEffect} from "react";
import {fetchVacancies} from "./store/vacanciesSlice.ts";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch])
  return <>
      <Text>Mantine rulez</Text>
  </>
}

export default App
