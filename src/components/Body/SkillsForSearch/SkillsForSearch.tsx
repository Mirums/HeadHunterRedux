import {Group, Paper, Pill, Text, TextInput, ActionIcon} from "@mantine/core";
import {IconPlus, IconX} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

export function SkillsForSearch() {
    const [inputValue, setInputValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const skills = searchParams.getAll('skills')
    useEffect(() => {
        if (skills.length === 0) {
            const next = new URLSearchParams(searchParams);

            next.delete("skills");
            ["TypeScript", "React", "Redux"].forEach((s) =>
                next.append("skills", s)
            );

            setSearchParams(next, { replace: true });
        }
    }, [skills, searchParams, setSearchParams]);

    const handleAddSkill = () => {

        const trimmed = inputValue.trim();
        if (!trimmed) return;
        if (!skills.includes(trimmed)) {
            setSearchParams({skills: [...skills, trimmed]});
        }
        setInputValue("");
    };

    const handleRemoveSkill = (skillToRemove: string) => {
        const newSkills = skills.filter((s) => s !== skillToRemove);
        setSearchParams({skills: newSkills})
    };

    return (
        <Paper w={317} h={206} ml={220} mr={24} mb={10} radius={12}>
            <Text m={24} mb={12} fw={600} fz={14}>
                Ключевые навыки
            </Text>

            <Group ml={24} mb={12} gap={8}>
                <TextInput
                    placeholder={"Навык"}
                    w={227}
                    radius={"md"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddSkill();
                        }
                    }}
                />
                <ActionIcon
                    bg={"#228BE6"}
                    radius={"md"}
                    w={34}
                    h={30}
                    onClick={handleAddSkill}
                >
                    <IconPlus/>
                </ActionIcon>
            </Group>

            <Group ml={24} mb={24} gap={4}>
                {skills.map((skill) => (
                    <Pill key={skill} radius={99} mb={2}>
                        <Group
                            ml={3}
                            w={"100%"}
                            h={"100%"}
                            gap={8}
                            wrap={"nowrap"}
                            align={"center"}
                            justify={"center"}
                        >
                            <Text fz={12} fw={400} lh={1}>
                                {skill}
                            </Text>
                            <IconX
                                color={"gray"}
                                stroke={3.5}
                                size={12}
                                style={{cursor: "pointer"}}
                                onClick={() => handleRemoveSkill(skill)}
                            />
                        </Group>
                    </Pill>
                ))}
            </Group>
        </Paper>
    );
}
