import {Center, Loader, Stack, Text} from "@mantine/core";

type Props = {
    isLoading: boolean;
}

export function VacanciesLoader({isLoading}: Props) {
    if (!isLoading) return null;
    return (
        <Center ml={180} mt={50}>
            <Stack align={'center'}>
                <Loader variant={'oval'}/>
                <Text>Данные загружаются...</Text>
            </Stack>
        </Center>
    )
}