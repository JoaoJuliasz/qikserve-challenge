import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuantityUpdate from './QuantityUpdate';
import { useHomeContext } from '../../hooks/useHomeContext/useHomeContext';

// Mocking the useHomeContext hook
jest.mock('../../hooks/useHomeContext/useHomeContext');

describe('QuantityUpdate', () => {
    const mockVenue = {
        webSettings: {
            primaryColour: '#ff0000',
        },
    };

    beforeEach(() => {
        (useHomeContext as jest.Mock).mockReturnValue({ venue: mockVenue });
    });

    it('renders without crashing', () => {
        render(<QuantityUpdate size={1} addMethod={() => { }} subMethod={() => { }} />);
        const minBtn = screen.getByTestId("min");
        expect(minBtn).toBeInTheDocument();
    });

    it('displays the correct size', () => {
        render(<QuantityUpdate size={5} addMethod={() => { }} subMethod={() => { }} />);
        const value = screen.getByText('5');
        expect(value).toBeInTheDocument();
    });

    it('calls the subMethod handler when the minus button is clicked', () => {
        const subMethod = jest.fn();
        render(<QuantityUpdate size={1} addMethod={() => { }} subMethod={subMethod} />);
        const minBtn = screen.getByTestId("min");
        fireEvent.click(minBtn);
        expect(subMethod).toHaveBeenCalledTimes(1);
    });

    it('calls the addMethod handler when the plus button is clicked', () => {
        const addMethod = jest.fn();
        render(<QuantityUpdate size={1} addMethod={addMethod} subMethod={() => { }} />);
        const maxBtn = screen.getByTestId("max");
        fireEvent.click(maxBtn);
        expect(addMethod).toHaveBeenCalledTimes(1);
    });
});
