import {configureStore} from "@reduxjs/toolkit";
import {vacanciesSlice} from "./vacanciesSlice.ts";

export const store = configureStore({
    reducer: {
        vacancies: vacanciesSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;