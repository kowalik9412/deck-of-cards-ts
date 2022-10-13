import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Message from './Message';

describe('Message', () => {
  it('should render snap suit message', () => {
    render(
      <Message
        isSuitValue={true}
        isSnapValue={false}
        suitValueCounter={1}
        snapValueCounter={0}
        cardCounter={51}
      />
    );

    const message = screen.getByTestId('test-snap-suit');

    expect(message).toBeInTheDocument();
  });

  it('should render snap value message', () => {
    render(
      <Message
        isSuitValue={false}
        isSnapValue={true}
        suitValueCounter={0}
        snapValueCounter={1}
        cardCounter={51}
      />
    );

    const message = screen.getByTestId('test-snap-value');

    expect(message).toBeInTheDocument();
  });

  it('should render snap value and snap suit message', () => {
    render(
      <Message
        isSuitValue={true}
        isSnapValue={true}
        suitValueCounter={1}
        snapValueCounter={1}
        cardCounter={51}
      />
    );

    const message = screen.getAllByText('snap', { exact: false });

    expect(message).toHaveLength(2);
  });

  it('should render message box on load', () => {
    render(
      <Message
        isSuitValue={false}
        isSnapValue={false}
        suitValueCounter={0}
        snapValueCounter={0}
        cardCounter={0}
      />
    );

    const message = screen.getByTestId('test-messagebox');

    expect(message).toBeInTheDocument();
  });

  it('should not display message box when button is clicked and no suit match is found', () => {
    render(
      <Message
        isSuitValue={false}
        isSnapValue={false}
        suitValueCounter={0}
        snapValueCounter={0}
        cardCounter={51}
      />
    );

    const message = screen.getByTestId('test-snap-suit');

    expect(message).not.toHaveClass('active');
  });

  it('should not display message box when button is clicked and no value match is found', () => {
    render(
      <Message
        isSuitValue={false}
        isSnapValue={false}
        suitValueCounter={0}
        snapValueCounter={0}
        cardCounter={51}
      />
    );

    const message = screen.getByTestId('test-snap-value');

    expect(message).not.toHaveClass('active');
  });
});
