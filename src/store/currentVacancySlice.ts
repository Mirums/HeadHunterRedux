import type {CurrentVacancy} from "./vacancies/vacancies.types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchVacancyById} from "./vacancies/vacancies.thunk.ts";

const initialCurrentVacancy: CurrentVacancy = {
    description: null,
    isLoading: true,
}
export const currentVacanciesSlice = createSlice({
    name: "currentVacancie",
    initialState: initialCurrentVacancy,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancyById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchVacancyById.fulfilled, (state, action) => {
                state.isLoading = false
                state.description = action.payload.description
            })
            .addCase(fetchVacancyById.rejected, (state) => {
                state.isLoading = false
            })
    }
})