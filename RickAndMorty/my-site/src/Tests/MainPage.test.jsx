import { render, screen } from '@testing-library/react'
import MainPage from '../MainPage'

test("MainPage", () => {
    render(<MainPage/>);

    const element = screen.getByText(/mainpage/i);

    expect(element).toBeInTheDocument();
})