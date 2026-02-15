import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from '../App'

test('renders App component', () => {
    render(<App />)
    expect(screen.getByText(/vite/i)).toBeInTheDocument()
})
