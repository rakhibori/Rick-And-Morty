import { render, screen } from '@testing-library/react'
import SearchBox from '../components/SearchBox';

test("searchbox", () => {
    render(<SearchBox/>);

    const element = screen.getByText(/searchbox/i);

    expect(element).toBeInTheDocument();
})