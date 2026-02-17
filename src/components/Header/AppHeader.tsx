import {Group, Image, Text, ThemeIcon} from "@mantine/core";
import {AboutUser} from "./AboutUser/AboutUser.tsx";
import logo from '../../images/headHunterLogo.png'

export function AppHeader() {
    return (
        <Group h={'100%'} px={'md'} pos={'relative'} align="center">
            <Group align="center" gap={10}>
                <Image w={30} h={30} src={logo}/>
                <Text fw={600}>.FrontEnd</Text>
            </Group>
            <Group pos={'absolute'} left={'50%'} style={{transform: 'translateX(-50%)'}} align="center">
                <Group gap={8}>
                    <Text fw={500}>Вакансии FE</Text>
                    <ThemeIcon  size={6}/>
                </Group>
                <AboutUser/>
            </Group>
        </Group>
    )
}