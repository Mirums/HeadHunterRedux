import {Box, Button} from "@mantine/core";
import {IconUserCircle} from  '@tabler/icons-react'
export function AboutUser() {
    return <>
        <Button
            variant="subtle"
            color={'gray'}
            fw={500}
        >
            <Box mr={4} display="inline-flex">
                <IconUserCircle size={24} stroke={1.5} />
            </Box>
            Обо мне
        </Button>
    </>
}