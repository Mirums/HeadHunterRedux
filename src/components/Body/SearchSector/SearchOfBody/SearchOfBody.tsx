import {Button, Group, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

export function SearchOfBody() {
    return<>
    <Group mt={36} mr={220}>
        <TextInput
            placeholder={'Должность или название компании'}
            leftSection={<IconSearch size={16}/>}
            w={350}
        />
        <Button>Найти</Button>
    </Group>
    </>
}