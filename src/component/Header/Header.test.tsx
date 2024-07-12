import { render, screen } from '@testing-library/react'
import Header from './Header'


describe('Header', () => {
    it('should render menu', () => {
        render(<Header bgColor="mockBgColor" bannerImg="mockBannerImg" />)
        const menu = screen.getByTestId('header-menu')
        expect(menu).toBeInTheDocument()
    })
})