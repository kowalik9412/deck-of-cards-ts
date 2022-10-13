import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorMessage from './ErrorMessage';

describe('Error Message', () => {
  it('should render when there is an error', () => {
    render(<ErrorMessage error={'test error message'} />);

    const errorMessageElement = screen.getByText('test error message');

    expect(errorMessageElement).toBeInTheDocument();
  });

  it('should not render when there is no error', () => {
    render(<ErrorMessage error='' />);

    const errorMessageElement = screen.findByTestId('test-error-message');

    expect(errorMessageElement).toMatchObject({});
  });
});
