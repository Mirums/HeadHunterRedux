import {Button, Group, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../../store/store.ts";
import { setSearchText} from "../../../../store/vacancies/vacanciesSlice.ts";
import { useSearchParams } from "react-router-dom";
import {useEffect} from "react";

export function SearchOfBody() {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') ?? '';
    const handleChange = (value: string) => {
        const next = new URLSearchParams(searchParams);

        if (value) {
            next.set("search", value);
        } else {
            next.delete("search");
        }

        setSearchParams(next);
    };
    useEffect(() => {
        if (search) {
            dispatch(setSearchText(search))
        }
    }, [])
    return<>
    <Group mt={36} mr={220} ml={126}>
        <TextInput
            placeholder={'Должность или название компании'}
            leftSection={<IconSearch size={16}/>}
            w={350}
            value={search}
            onChange={(e) => handleChange(e.currentTarget.value)}
        />
        <Button
            type="button"
            onClick={() => dispatch(setSearchText(search))}>
            Найти
        </Button>
    </Group>
    </>
}