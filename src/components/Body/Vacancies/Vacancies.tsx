import {Badge, Button, Card, Group,  Text} from "@mantine/core";
type Props = {
    name: string
    salary: {
        from: number | null
        to: number | null
    } | null
    employer: string
    schedule: string
    area: string
    experience: {
        id: string
        name: string
    }
}

export function Vacancies(props: Props) {
    function salaryExist() {
        if (props.salary !== null) {
            if (props.salary.from !== null && props.salary.to !== null) {
                return `${props.salary.from} - ${props.salary.to} ₽`
            }
            else if (props.salary.from !== null) {
                return `${props.salary.from} ₽`
            }
            else if(props.salary.to !== null) {
                return `${props.salary.to} ₽`
            }
        }
        else return `Не указано`
    }
    function vacancyExperience() {
        if (props.experience.id === 'noExperience') {
            return `Без опыта`
        }
        if (props.experience.id === 'between1And3') {
            return `Опыт 1-3 года`
        }
        if (props.experience.id === 'between3And6') {
            return ` Опыт 3-6 лет`
        }
        if (props.experience.id === 'moreThan6') {
            return `Опыт более 6 лет`
        }
    }
    return <Card w={659} h={248} ml={0}>
        <Text  c={'indigoCustom.8'} fz={20} fw={600}>{props.name}</Text>
        <Group mb={16}>
            <Text>{salaryExist()}</Text>
            <Text fz={14} c={'gray'}> {vacancyExperience()} </Text>
        </Group>
        <Text mb={8} fz={14} c={'gray'}>{props.employer}</Text>
        <Badge mb={10} radius={2} bg={'indigoCustom.7'} c={'white'}>
            <Text fw={700} fz={9}>{props.schedule}</Text>
        </Badge>
        <Text mb={16}>{props.area}</Text>
        <Group gap={12}>
            <Button bg={'black'}>
                <Text fw={400} fz={14}>Смотреть вакансию </Text>
            </Button>
            <Button bg={'dark.2'} c={'dark.7'}>
                <Text fw={400} fz={14}>Откликнуться</Text>
                </Button>
        </Group>
    </Card>
}