export type Vacancy = {
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

export type VacanciesResponse = {
    items: Vacancy[];
    found: number;
    pages: number;
    page: number;
    per_page: number;
};

export type VacanciesState = {
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
export type CurrentVacancyResponse = Vacancy &{
    description: string | null
}
export type CurrentVacancy = Vacancy & {
    description: string | null
    isLoading: boolean
}