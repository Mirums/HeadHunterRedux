import {Paper, Select} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {setArea} from '../../../store/vacanciesSlice.ts'
import {type RootState} from '../../../store/store.ts'
import { IconMapPin} from "@tabler/icons-react";
export function SearchRegion() {
    const dispatch = useDispatch();
    const area = useSelector((state: RootState) => state.vacancies.area)
    return (
        <Paper w={317} h={84} ml={220} radius={12}>
            <Select
                leftSection={<IconMapPin size={13}/>}
                m={24}
                c={'gray'}
                placeholder={'Все города'}
                value={area}
                onChange={(value)=>    dispatch(setArea(value === 'all' ? null : value))}
                data={[
                    { value: 'all', label: "Все города" },
                    { value: "1", label: "Москва" },
                    { value: "2", label: "Санкт-Петербург" },
                ]}
            />
        </Paper>
    )
}