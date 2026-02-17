import {Flex, Text} from "@mantine/core";

export function TextOfBody() {
    return <>
        <Flex direction={'column'} ml={220} mt={24}>
            <Text fw={700} fz={26} lh={1.35}>Список вакансий</Text>
            <Text fw={500} fz={20} c={'gray'} lh={1.35}>по профессии Frontend-разработчик</Text>
        </Flex>
    </>
}