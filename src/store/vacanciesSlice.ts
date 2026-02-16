import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ky from "ky";

type Vacancy = {
    name: string
    salary: {
        from: number | null
        to: number | null
    } | null
    employer: {
        name: string
    }
    schedule: {
        name: string
    }
    area: {
        name: string
    }
}

type VacanciesResponse = {
    items: Vacancy[]
    found: number
    pages: number
    page: number
    per_page: number
}
type VacanciesState = {
    vacancies: Vacancy[]
    found: number
    pages: number
    page: number
    perPage: number
    loading: boolean
}
const initialVacancies: VacanciesState = {
  vacancies: [],
  found: 0,
  pages: 0,
  page: 0,
  perPage: 0,
  loading: false
}
export const fetchVacancies = createAsyncThunk<VacanciesResponse, void>(
    'vacancies/fetchVacancies',
    async () => {
        const data = await ky
            .get('https://api.hh.ru/vacancies?industry=7&professional_role=96')
            .json<VacanciesResponse>()
        return data
    }
)

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState: initialVacancies,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVacancies.pending, state => {
                state.loading = true
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.loading = false
                state.vacancies = action.payload.items
                state.page = action.payload.page
                state.pages = action.payload.pages
                state.found = action.payload.found
                state.perPage = action.payload.per_page
            })
            .addCase(fetchVacancies.rejected, state => {
                state.loading = false
            })
    }
})