import { render, screen, fireEvent } from '@testing-library/react';
import ModalButton from './ModalButton';
import { useHomeContext } from '../../hooks/useHomeContext/useHomeContext';

// Mocking the useHomeContext hook
jest.mock('../../hooks/useHomeContext/useHomeContext');

describe('ModalButton', () => {
    const mockVenue = {
        webSettings: {
            primaryColour: '#ff0000',
        },
    };

    beforeEach(() => {
        (useHomeContext as jest.Mock).mockReturnValue({ venue: mockVenue });
    });

    it('renders without crashing', () => {
        render(<ModalButton text="Click Me" onClick={() => { }} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('displays the correct text', () => {
        render(<ModalButton text="Click Me" onClick={() => { }} />);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Click Me');
    });

    it('is disabled when the disabled prop is true', () => {
        render(<ModalButton text="Click Me" disabled={true} onClick={() => { }} />);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('is enabled when the disabled prop is false', () => {
        render(<ModalButton text="Click Me" disabled={false} onClick={() => { }} />);
        const button = screen.getByRole('button');
        expect(button).toBeEnabled();
    });

    it('calls the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<ModalButton text="Click Me" onClick={handleClick} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies the correct primary color from context', () => {
        render(<ModalButton text="Click Me" onClick={() => { }} />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('--primaryColour: #ff0000');
    });
});
