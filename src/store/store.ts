import {configureStore} from "@reduxjs/toolkit";
import {vacanciesSlice} from "./vacancies/vacanciesSlice.ts";
import {currentVacanciesSlice} from "./currentVacancySlice.ts";

export const store = configureStore({
    reducer: {
        vacancies: vacanciesSlice.reducer,
        currentVacancie: currentVacanciesSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;