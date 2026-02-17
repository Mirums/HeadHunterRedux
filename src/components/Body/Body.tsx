import {TextOfBody} from "./SearchSector/TextOfBody/TextOfBody.tsx";
import {SearchOfBody} from "./SearchSector/SearchOfBody/SearchOfBody.tsx";
import { Divider, Group} from "@mantine/core";

export function Body() {
    return <>
        <Group justify={'space-between'}>
            <TextOfBody/>
            <SearchOfBody/>
        </Group>
        <Divider mt={24}/>
    </>
}