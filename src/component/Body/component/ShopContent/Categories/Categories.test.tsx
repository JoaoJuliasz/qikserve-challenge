import { render, screen,  } from '@testing-library/react';
import Categories from './Categories';

const sections = [
    { title: 'Section 1', image: 'image1.jpg' },
    { title: 'Section 2', image: 'image2.jpg' },
    { title: 'Section 3', image: 'image3.jpg' },
];

const primaryColour = '#ff0000';

describe('Categories', () => {
    it('should render correctly', () => {
        render(<Categories sections={sections} primaryColour={primaryColour} />);
        sections.forEach(({ title }) => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    it('should apply primary color style correctly', () => {
        render(<Categories sections={sections} primaryColour={primaryColour} />);
        const firstSection = screen.getByText(sections[0].title).parentElement;
        expect(firstSection).toHaveStyle('--primary-color: #ff0000');
    });
});
