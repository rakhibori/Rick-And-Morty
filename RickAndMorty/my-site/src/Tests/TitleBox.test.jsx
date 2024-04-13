import { render, screen } from '@testing-library/react'
import TitleBox from '../components/TitleBox';

test("TitleBox", () => {
    render(<TitleBox/>);

    const element = screen.getByText(/titlebox/i);

    expect(element).toBeInTheDocument();
})