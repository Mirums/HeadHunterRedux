import {createAsyncThunk} from "@reduxjs/toolkit";
import type {CurrentVacancyResponse, VacanciesResponse, VacanciesState} from "./vacancies.types.ts";
import {buildVacanciesQuery} from "./vacancies.query.ts";
import ky from "ky";
export const fetchVacancies = createAsyncThunk<VacanciesResponse, void, { state: { vacancies: VacanciesState } }>
("vacancies/fetchVacancies", async (_, { getState }) => {
        const state = getState().vacancies;

        const queryString = buildVacanciesQuery({
            searchText: state.searchText,
            area: state.area,
            page: state.page,
        });

        const url = `https://api.hh.ru/vacancies?${queryString}`;

        const data = await ky
            .get(url)
            .json<VacanciesResponse>();

        return data;
    }
);

export const fetchVacancyById = createAsyncThunk<CurrentVacancyResponse, number>(
    'vacancies/fetchVacancyById', async (id) => {
        return ky
            .get(`https://api.hh.ru/vacancies/${id}`)
            .json<CurrentVacancyResponse>()
    })