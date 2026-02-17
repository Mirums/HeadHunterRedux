import {ActionIcon, Group, Paper, Pill, Text, TextInput} from "@mantine/core";
import { IconPlus, IconX} from "@tabler/icons-react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
import {useState} from "react";
import {addSkill, removeSkill} from "../../../store/vacanciesSlice.ts";

export function SkillsForSearch() {
    const dispatch = useDispatch();
    const skills = useSelector((state: RootState) => state.vacancies.skills)
    const [inputValue, setInputValue] = useState('')
    return <>
        <Paper w={317} h={206} ml={220} mt={24} mr={24} mb={10} radius={12}>
            <Text m={24} mb={12} fw={600} fz={14}>Ключевые навыки</Text>
            <Group ml={24} mb={12} gap={8}>
                <TextInput
                    placeholder={'Навык'}
                    w={227}
                    radius={'md'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                />
                <ActionIcon
                    bg={'#228BE6'}
                    radius={'md'}
                    w={34}
                    h={30}
                    onClick={() => {
                        if (!inputValue.trim()) return;
                        dispatch(addSkill(inputValue));
                        setInputValue('')
                    }}
                >
                    <IconPlus/>
                </ActionIcon>
            </Group>
            <Group ml={24} mb={24} gap={4}>
                {skills.map(skill => (
                    <Pill
                        key={skill}
                        radius={99}
                        mb={2}
                    >
                        <Group
                            ml={3}
                            w={'100%'}
                            h={'100%'}
                            gap={8}
                            wrap={'nowrap'}
                            align={'center'}
                            justify={'center'}
                        >
                            <Text fz={12} fw={400} lh={1}>{skill}</Text>
                            <IconX
                                color={'gray'}
                                stroke={3.5}
                                size={'12'}
                                onClick={() => dispatch(removeSkill(skill))}
                            />
                        </Group>
                    </Pill>
                ))}
            </Group>
        </Paper>
    </>
}