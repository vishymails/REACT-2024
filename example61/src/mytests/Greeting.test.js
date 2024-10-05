import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
    test('renders Hello World as a Text', () => {
        render(<Greeting />);

        const helloworldElement = screen.getByText('Hello World!');

        expect(helloworldElement).toBeInTheDocument();
    
    });

    test('renders "Changed!" if the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });


    test('renders "good to see" you if the button was not clicked ', () => {
    
        //Arrange 
        render(<Greeting />);
    
        //Act
        
        //Assert
    
        const outputElement = screen.getByText('good to see you', { exact : false });
        expect(outputElement).toBeInTheDocument();
    });
    
    test('does not render "good to see you" if the button was clicked', () => {
        
        //Arrange 
        render(<Greeting />);
    
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
    
        //Assert
    
        const outputElement = screen.queryByText('good to see you', { exact : false });
        expect(outputElement).toBeNull();
    });
})