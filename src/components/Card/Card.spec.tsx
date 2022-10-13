import { render, screen } from '@testing-library/react';

import Card from './Card';

it('should initially render a blank card', () => {
  render(
    <Card
      card={{
        value: '',
        suit: '',
        image: '',
      }}
    />
  );
  const cardElement = screen.getAllByAltText('Card background');

  expect(cardElement.length).toBe(1);
});

it('should render a card with image', () => {
  render(
    <Card
      card={{
        value: 'QUEEN',
        suit: 'SPADES',
        image: 'https://deckofcardsapi.com/static/img/QS.png',
      }}
    />
  );
  const cardElement = screen.getAllByAltText(/Card suit:/i);

  expect(cardElement.length).toBe(1);
});
