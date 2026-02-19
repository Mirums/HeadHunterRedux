import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import ky from "ky";

type Vacancy = {
    id: number;
    name: string;
    salary: {
        from: number | null;
        to: number | null;
    } | null;
    employer: {
        name: string;
    };
    schedule: {
        name: string;
    };
    area: {
        name: string;
    };
    experience: {
        id: string;
        name: string;
    };
};

type VacanciesResponse = {
    items: Vacancy[];
    found: number;
    pages: number;
    page: number;
    per_page: number;
};

type VacanciesState = {
    vacancies: Vacancy[];

    // Фильтры
    searchText: string;
    area: string | null;

    // Пагинация
    found: number;
    pages: number;
    page: number;
    perPage: number;

    loading: boolean;
};

function buildVacanciesQuery(params: {
    searchText: string;
    area: string | null;
    page: number;
}) {
    const query = new URLSearchParams();

    const baseText = "Frontend-разработчик";

    const finalText = [baseText, params.searchText].filter(Boolean).join(" ").trim();
    query.set("text", finalText);

    if (params.area) {
        query.set("area", params.area);
    }

    query.set("page", String(params.page));
    query.set("per_page", "10");

    return query.toString();
}

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

export const fetchVacancies = createAsyncThunk<
    VacanciesResponse,
    void,
    { state: { vacancies: VacanciesState } }
>(
    "vacancies/fetchVacancies",
    async (_, { getState }) => {
        const state = getState().vacancies;

        const queryString = buildVacanciesQuery({
            searchText: state.searchText,
            area: state.area,
            page: state.page,
        });

        const url = `https://api.hh.ru/vacancies?${queryString}`;

        const data = await ky
            .get(url, {
                headers: {
                    "User-Agent": "HH-Frontend-App",
                },
            })
            .json<VacanciesResponse>();

        console.log("FETCH with:", {
            searchText: state.searchText,
            area: state.area,
            page: state.page,
        });

        return data;
    }
);

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
