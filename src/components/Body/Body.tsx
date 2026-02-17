import {TextOfBody} from "./SearchSector/TextOfBody/TextOfBody.tsx";
import {SearchOfBody} from "./SearchSector/SearchOfBody/SearchOfBody.tsx";
import { Divider, Group} from "@mantine/core";
import {SkillsForSearch} from "./SkillsForSearch/SkillsForSearch.tsx";

export function Body() {
    return <>
        <Group justify={'space-between'}>
            <TextOfBody/>
            <SearchOfBody/>
        </Group>
        <Divider mt={24}/>
        <Group>
            <SkillsForSearch/>
        </Group>
    </>
}