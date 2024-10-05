import { render, screen } from '@testing-library/react'
import Greeting from '../components/Greeting'

test('renders Test Component as a Text', () => {
    render(<Greeting />);

    const textElement = screen.getByText('Test Component');

    expect(textElement).toBeInTheDocument();
})