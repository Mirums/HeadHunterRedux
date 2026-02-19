import {Button, Group, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "../../../../store/store.ts";
import { setSearchText} from "../../../../store/vacanciesSlice.ts";
import { useState } from "react";

export function SearchOfBody() {
    const dispatch = useDispatch<AppDispatch>();
    const globalSearchText = useSelector(
        (state: RootState) => state.vacancies.searchText
    );
    const [inputValue, setInputValue] = useState(globalSearchText);
    return<>
    <Group mt={36} mr={220} ml={126}>
        <TextInput
            placeholder={'Должность или название компании'}
            leftSection={<IconSearch size={16}/>}
            w={350}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
            type="button"
            onClick={() => dispatch(setSearchText(inputValue))}>
            Найти
        </Button>
    </Group>
    </>
}