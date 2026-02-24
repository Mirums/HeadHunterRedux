import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
    VacanciesState
} from "./vacancies.types.ts";
import {fetchVacancies} from "./vacancies.thunk.ts";

const initialVacancies: VacanciesState = {
    vacancies: [],
    searchText: "",
    area: null,
    found: 0,
    pages: 0,
    page: 0,
    perPage: 0,
    loading: false,
};

export const vacanciesSlice = createSlice({
    name: "vacancies",
    initialState: initialVacancies,
    reducers: {
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
            state.page = 0;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setArea: (state, action: PayloadAction<string | null>) => {
            state.area = action.payload;
            state.page = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.loading = false;
                state.vacancies = action.payload.items;
                state.page = action.payload.page;
                state.pages = action.payload.pages;
                state.found = action.payload.found;
                state.perPage = action.payload.per_page;
            })
            .addCase(fetchVacancies.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setSearchText, setPage, setArea } = vacanciesSlice.actions;
export default vacanciesSlice.reducer;
