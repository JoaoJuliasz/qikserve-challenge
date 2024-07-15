import { render, screen } from "@testing-library/react"
import ContentItem from "./ContentItem"

describe('ContentItem', () => {
    it('should render component correctly', () => {
        const mockItem = {
            id: 1234,
            name: "mockName",
            alcoholic: 0,
            price: 11,
            position: 0,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            sku: "mockSku",
            available: true,
            images: []
        }

        render(<ContentItem item={mockItem} />)
        const itemName = screen.getByText(/mockName/i)
        expect(itemName).toBeInTheDocument()
    })

    it("should render item's image correctly", () => {
        const mockItem: MenuItem = {
            id: 1234,
            name: "mockName",
            alcoholic: 0,
            price: 11,
            position: 0,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            sku: "mockSku",
            available: true,
            images: [{id: 1, image: 'mock-path'}]
        }

        render(<ContentItem item={mockItem} />)
        const img = screen.getByRole("img")
        expect(img).toBeInTheDocument()
    })
})