import { render, screen } from '@testing-library/react'
import ShowCharacters from '../ShowCharacters';

test("ShowCharacters", () => {
    render(<ShowCharacters/>);

    const element = screen.getByText(/showcharacters/i);

    expect(element).toBeInTheDocument();
})