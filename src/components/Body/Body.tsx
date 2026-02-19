import {TextOfBody} from "./SearchSector/TextOfBody/TextOfBody.tsx";
import {SearchOfBody} from "./SearchSector/SearchOfBody/SearchOfBody.tsx";
import {Divider, Group, Stack} from "@mantine/core";
import {SkillsForSearch} from "./SkillsForSearch/SkillsForSearch.tsx";
import {Vacancies} from "./Vacancies/Vacancies.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "../../store/store.ts"
import {useEffect} from "react";
import {SearchRegion} from "./SearchRegion/SearchRegion.tsx";
import {PaginationBody} from "./PagintationBody/PaginationBody.tsx";
import { fetchVacancies } from "../../store/vacanciesSlice.ts";
import {VacanciesLoader} from "./VacanciesLoader/VacanciesLoader.tsx";

export function Body() {
    const dispatch = useDispatch<AppDispatch>();

    const {vacancies, loading, searchText, area, page} = useSelector(
        (state: RootState) => state.vacancies
    )

    useEffect(() => {
        dispatch(fetchVacancies());
    }, [dispatch, searchText, area, page]);
    return <>
        <Group justify={'space-between'}>
            <TextOfBody/>
            <SearchOfBody/>
        </Group>
        <Divider mt={24} mb={24}/>
        <Group align={'self-start'} gap={0}>
            <Stack gap={0}>
            <SkillsForSearch/>
            <SearchRegion/>
            </Stack>
            <Stack>
                <VacanciesLoader isLoading={loading}/>
                {vacancies.map((vacancy) => (
                    <Vacancies
                        key={vacancy.id}
                        name={vacancy.name}
                        salary={vacancy.salary}
                        employer={vacancy.employer.name}
                        schedule={vacancy.schedule.name}
                        area={vacancy.area.name}
                        experience={vacancy.experience}
                    />
                ))}
            </Stack>
        </Group>
        <PaginationBody/>
    </>
}