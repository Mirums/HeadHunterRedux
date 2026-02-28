import {Group, Pagination} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import {setPage} from "../../../store/vacancies/vacanciesSlice.ts";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export function PaginationBody() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const page = useSelector((state: RootState) => state.vacancies.page);
    const pages = useSelector((state: RootState) => state.vacancies.pages)
    const totalPages = Math.max(1, pages)
    const currentPage = page + 1
    const pageUrl = Number(searchParams.get('page'))
    useEffect(() => {
        if (!Number.isNaN(pageUrl) && pageUrl > 0) {
            dispatch(setPage(pageUrl - 1))
        } else {
            dispatch(setPage(0))
        }
    }, [searchParams]);

    function setPaginationUrl(value: number) {
        const next = new URLSearchParams(searchParams)
        if (value || value === 0) {
            next.set('page', value.toString())
        } else {
            next.delete('page')
        }
        setSearchParams(next)
    }

    return (
        <Group justify="center" mt={24} pb={84}>
            <Pagination
                withEdges
                total={totalPages}
                value={currentPage}
                onChange={(newPage) => {
                    setPaginationUrl(newPage)
                }}
            />
        </Group>
    )
}