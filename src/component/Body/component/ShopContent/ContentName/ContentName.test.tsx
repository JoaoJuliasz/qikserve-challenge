import { fireEvent, render, screen } from "@testing-library/react"
import ContentName from "./ContentName"

describe('ContentItem', () => {
    it('should render component correctly', () => {
        render(<ContentName name="mockName" show={true} setShow={jest.fn()} />)
        const itemName = screen.getByText(/mockName/i)
        expect(itemName).toBeInTheDocument()
    })

    it("should trigger setShow", () => {
        const mockSetShow = jest.fn()
        render(<ContentName name="mockName" show={true} setShow={mockSetShow} />)
        const icon = screen.getByRole("img")
        fireEvent.click(icon)
        expect(mockSetShow).toHaveBeenCalled()
    })
})