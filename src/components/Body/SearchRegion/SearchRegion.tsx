import {Paper, Select} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {type RootState} from '../../../store/store.ts'
import {setArea} from '../../../store/vacancies/vacanciesSlice.ts'
import {IconMapPin} from "@tabler/icons-react";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export function SearchRegion() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const areaRedux = useSelector((state: RootState) => state.vacancies.area)
    const areaUrl = searchParams.get('area')
    useEffect(() => {
        if (areaUrl === 'all'){
                dispatch(setArea(null))
        }
        else{
            dispatch(setArea(areaUrl))
        }
    }, [searchParams]);

    function setRegionUrl(value: string | null) {
        const next = new URLSearchParams(searchParams)
        if (value) {
            next.set('area', value)
        } else {
            next.delete('area')
        }
        setSearchParams(next)
    }

    return (
        <Paper w={317} h={84} ml={220} radius={12}>
            <Select
                leftSection={<IconMapPin size={13}/>}
                m={24}
                c={'gray'}
                placeholder={'Все города'}
                value={areaRedux}
                onChange={(value) => setRegionUrl(value)}
                data={[
                    {value: 'all', label: "Все города"},
                    {value: "1", label: "Москва"},
                    {value: "2", label: "Санкт-Петербург"},
                ]}
            />
        </Paper>
    )
}