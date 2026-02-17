import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
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

    //Фильтры
    searchText: string
    area: string | null
    skills: string[]

    //Пагинация
    found: number
    pages: number
    page: number
    perPage: number

    loading: boolean
}

function buildVacanciesQuery(params: {
    searchText: string
    area: string | null
    skills: string[]
    page: number
}) {
    const query = new URLSearchParams()

    query.set('industry', '7')
    query.set('professional_role', '96')

    if (params.searchText) {
        query.set('text', params.searchText)
        query.set('search_field', 'name,company_name')
    }

    if (params.area) {
        query.set('area', params.area)
    }

    if (params.skills.length > 0) {
        query.set('skill_set', params.skills.join(','))
    }

    query.set('page', String(params.page))
    query.set('per_page', '10')

    return query.toString()
}

const initialVacancies: VacanciesState = {
    vacancies: [],
    searchText: '',
    area: null,
    skills: ['TypeScript', 'React', 'Redux'],
    found: 0,
    pages: 0,
    page: 0,
    perPage: 0,
    loading: false
}
export const fetchVacancies = createAsyncThunk<
    VacanciesResponse,
    void,
    {state: {vacancies: VacanciesState}}
>(
    'vacancies/fetchVacancies',
    async (_, {getState}) => {
        const state = getState().vacancies

        const queryString = buildVacanciesQuery({
            searchText: state.searchText,
            area: state.area,
            skills: state.skills,
            page: state.page,
        })

        const url = `https://api.hh.ru/vacancies?${queryString}`

        const data = await ky.get(url).json<VacanciesResponse>()
        return data
    }
)

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState: initialVacancies,
    reducers: {
        addSkill: (state, action: PayloadAction<string>) => {
            const skill = action.payload.trim()
            if (!skill) return
            if (!state.skills.includes(skill)) {
                state.skills.push(skill)
                state.page=0
            }
        },
        removeSkill: (state, action: PayloadAction<string>) => {
            state.skills = state.skills.filter(s => s !== action.payload)
            state.page=0
        }
    },
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
export const { addSkill, removeSkill } = vacanciesSlice.actions;
export default vacanciesSlice.reducer;