import {Group, Pagination} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import {setPage} from "../../../store/vacanciesSlice.ts";

export function PaginationBody() {
    const dispatch = useDispatch()

    const page = useSelector((state: RootState) => state.vacancies.page);
    const pages = useSelector((state: RootState) => state.vacancies.pages)
    const totalPages = Math.max(1, pages)
    const currentPage = page + 1
    return (
        <Group justify="center" mt={24} pb={84}>
            <Pagination
                withEdges
                total={totalPages}
                value={currentPage}
                onChange={(newPage) => {
                    dispatch(setPage(newPage-1))
                }}
            />
        </Group>
    )
}