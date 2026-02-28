import {useParams} from "react-router-dom";
import {Vacancies} from "../Body/Vacancies/Vacancies.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "../../store/store.ts"
import {useEffect} from "react";
import {fetchVacancyById} from "../../store/vacancies/vacancies.thunk.ts";
import {Paper, Stack, Text} from "@mantine/core";

export function CurrentVacancy() {

    const dispatch = useDispatch<AppDispatch>()
    const {id} = useParams<{ id: string }>()

    const CurrentVacancy = useSelector(
        (state: RootState) => state.currentVacancie
    )

    useEffect(() => {
        if (!id) return
        dispatch(fetchVacancyById(Number(id)))
    }, [dispatch]);
    return <>
        <Stack mt={24}  w={'100%'} align="center" justify="center" h="100%" gap={29}>
            <Vacancies
                name={CurrentVacancy.name}
                url={CurrentVacancy.alternate_url}
                isCurrentVacancy={true}
                salary={CurrentVacancy.salary}
                employer={CurrentVacancy.employer.name}
                schedule={CurrentVacancy.schedule.name}
                area={CurrentVacancy.area.name}
                experience={CurrentVacancy.experience}/>
            <Paper w={658} h={'100%'} mb={24}>
                <Text
                    m={24}
                    dangerouslySetInnerHTML={{__html: CurrentVacancy.description ?? ""}}/>
            </Paper>


        </Stack>
    </>
}