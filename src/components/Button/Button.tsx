import React from 'react';
import { useState } from 'react';
import { CardType } from '../../types';

import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 200px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  deckId: string;

  onButtonClickHandler: (
    card: CardType,
    remainingCards: number,
    error: boolean,
    errorMessage: string
  ) => void;

  checkMessagesHighlighted: () => void;
}

const Button: React.FC<Props> = ({
  deckId,

  onButtonClickHandler,

  checkMessagesHighlighted,
}) => {
  const [isGettingNewCard, setIsGettingNewCard] = useState(false);

  const fetchNewCard = (deckId: string) => {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

    setIsGettingNewCard(true);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const {
          remaining: remainingCards,
          success,
          error: errorMessage,
        } = data;

        if (remainingCards >= 0 && success) {
          const hasError = false;

          const fetchedCard = data.cards[0];

          const card = {
            value: fetchedCard.value,
            suit: fetchedCard.suit,
            image: fetchedCard.image,
          };

          onButtonClickHandler(card, remainingCards, hasError, errorMessage);

          checkMessagesHighlighted();

          setIsGettingNewCard(false);
        } else if (remainingCards === 0 || !success) {
          const hasError = true;

          const errorMessage =
            'Not enough cards remaining to draw 1 additional';

          const card = {
            value: '',
            suit: '',
            image:
              'https://opengameart.org/sites/default/files/card%20back%20black.png',
          };

          onButtonClickHandler(card, remainingCards, hasError, errorMessage);

          checkMessagesHighlighted();

          setIsGettingNewCard(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fetch new card
  const clickHandler = () => {
    fetchNewCard(deckId);
  };

  return (
    <StyledButton onClick={clickHandler} disabled={isGettingNewCard}>
      Draw
    </StyledButton>
  );
};

export default Button;
