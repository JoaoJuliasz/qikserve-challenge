import { fireEvent, render, screen } from "@testing-library/react"
import SearchBar from "./SearchBar"

describe('SearchBar', () => {
    it('should render it', () => {
        render(<SearchBar value="mockValue" setValue={jest.fn()}/>)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    })

    it('should trigger setValue', () => {
        const mockSetValue = jest.fn()
        render(<SearchBar value="mockValue" setValue={mockSetValue}/>)
        const input = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: '23'}})
        expect(mockSetValue).toHaveBeenCalled();
    })
})