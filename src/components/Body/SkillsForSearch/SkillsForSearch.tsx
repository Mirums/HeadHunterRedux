import {ActionIcon, Group, Paper, Pill, Text, TextInput} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";

export function SkillsForSearch() {
    return <>
        <Paper w={317} h={206} ml={220} mt={24} mr={24} mb={10} radius={12}>
            <Text m={24} mb={12} fw={600} fz={14}>Ключевые навыки</Text>
            <Group ml={24} mb={12} gap={8} >
                <TextInput placeholder={'Навык'} w={227} radius={'md'}/>
                <ActionIcon bg={'#228BE6'} radius={'md'} w={34} h={30}>
                    <IconPlus/>
                </ActionIcon>
            </Group>
            <Group ml={24} mb={24} gap={4}>
                <Pill>React</Pill>
                <Pill>Skibidi</Pill>
                <Pill>Gangnam</Pill>
                <Pill>Zhov</Pill>
                <Pill>Volga3110</Pill>
            </Group>
        </Paper>
    </>
}