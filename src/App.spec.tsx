import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App', () => {
  it('should render the landing page', () => {
    render(<App />);

    const button = screen.getByRole('button');
    const cards = screen.getAllByAltText(/Card background/i);
    const messageContainer = screen.getByTestId('test-messagebox');

    expect(button).toBeInTheDocument();
    expect(cards).toHaveLength(2);
    expect(messageContainer).toBeInTheDocument();
  });
});
