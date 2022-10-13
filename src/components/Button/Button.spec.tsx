import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';
import { CardType } from '../../types';

describe('Button', () => {
  it('should render buttton', () => {
    render(
      <Button
        deckId={''}
        onButtonClickHandler={function (
          card: CardType,
          remainingCards: number,
          error: boolean,
          errorMessage: string
        ): void {
          throw new Error('Function not implemented.');
        }}
        checkMessagesHighlighted={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should disable button when clicked', () => {
    render(
      <Button
        deckId={''}
        onButtonClickHandler={function (
          card: CardType,
          remainingCards: number,
          error: boolean,
          errorMessage: string
        ): void {
          throw new Error('Function not implemented.');
        }}
        checkMessagesHighlighted={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  it('should fetch card when button is clicked', () => {
    render(
      <Button
        deckId={''}
        onButtonClickHandler={function (
          card: CardType,
          remainingCards: number,
          error: boolean,
          errorMessage: string
        ): void {
          throw new Error('Function not implemented.');
        }}
        checkMessagesHighlighted={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });
});
