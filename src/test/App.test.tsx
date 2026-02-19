import {render, screen} from '@testing-library/react'
import {test, expect, vi} from 'vitest'
import App from '../App'
import {Provider} from "react-redux";
import {store} from "../store/store.ts";
import {MantineProvider} from "@mantine/core";

vi.mock('../store/vacanciesSlice', async () => {
    const actual = await vi.importActual('../store/vacanciesSlice')
    return {
        ...actual,
        fetchVacancies: () => () => {
        },
    }
})
test('renders App component', () => {
    render(
        <Provider store={store}>
            <MantineProvider>
                <App/>
            </MantineProvider>
        </Provider>
    )
    expect(screen.getByText('Список вакансий')).toBeInTheDocument()
})

