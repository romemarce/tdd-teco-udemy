import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "./Counter"

test('Display zero initial counts', () => {
    render(<Counter />)
    const result = screen.getByText(/Clicked 0!/i)
    expect(result).toBeInTheDocument();
})


test('Display new counter after one click', () => {
    render(<Counter />)
    
    const button = screen.getByText(/click/i, { selector: 'button' })
    fireEvent.click( button )

    const result = screen.getByText(/Clicked 1!/i)
    expect(result).toBeInTheDocument();
})