import type {CurrentVacancy} from "./vacancies/vacancies.types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchVacancyById} from "./vacancies/vacancies.thunk.ts";

const initialCurrentVacancy: CurrentVacancy = {
    id: 0,
    name: '',
    alternate_url: '',
    salary: null,
    employer: {
        name: '',
    },
    schedule: {
        name: '',
    },
    area: {
        name: '',
    },
    experience: {
        id: '',
        name: '',
    },
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

                state.id = action.payload.id;
                state.name = action.payload.name;
                state.alternate_url = action.payload.alternate_url;
                state.salary = action.payload.salary;
                state.employer = action.payload.employer;
                state.schedule = action.payload.schedule;
                state.area = action.payload.area;
                state.experience = action.payload.experience;
                state.description = action.payload.description
            })
            .addCase(fetchVacancyById.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export default currentVacanciesSlice.reducer;