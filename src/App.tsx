import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CardType } from './types';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Message from './components/Message/Message';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-around;
  flex-direction: row;
`;

const StyledErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 420px;
  height: 100vh;
`;

const App: React.FC = () => {
  const [deckId, setDeckId] = useState('');

  const [cardCounter, setCardCounter] = useState(0);

  const [recentCard, setRecentCard] = useState({} as CardType);

  const [secondCard, setSecondCard] = useState({} as CardType);

  const [valueCounter, setValueCounter] = useState(0);

  const [suitCounter, setSuitCounter] = useState(0);

  const [isSnapValue, setIsSnapValue] = useState(false);

  const [isSuitValue, setIsSuitValue] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const fetchNewDeck = (): void => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    fetch(url)
      .then((result) => {
        return result.json();
      })

      .then((data) => {
        console.log(data);
        setDeckId(data.deck_id);
      })

      .catch((error) => {
        setErrorMessage('Failed to fetch new deck');

        setHasError(true);
      });
  };

  // Handle "Draw Card" button clicks
  const onButtonClickHandler = (
    card: CardType,
    remainingCards: number,
    hasError: boolean,
    errorMessage: string
  ) => {
    setHasError(hasError);

    setErrorMessage(errorMessage);

    setCardCounter(remainingCards);

    setRecentCard(card);

    setSecondCard(recentCard);

    checkValues(recentCard, card);
  };

  // Check and reset messages states on each move
  const checkMessagesHighlighted = () => {
    if (isSuitValue) {
      setIsSuitValue(false);
    }

    if (isSnapValue) {
      setIsSnapValue(false);
    }
  };

  // Validate cards
  const checkValues = (card1: CardType, card2: CardType) => {
    if (card1 != null) {
      if (card2.suit === card1.suit && card2.value === card1.value) {
        setValueCounter(valueCounter + 1);

        setSuitCounter(suitCounter + 1);

        setIsSnapValue(true);

        setIsSuitValue(true);
      } else if (card2.value === card1.value) {
        setValueCounter(valueCounter + 1);

        setIsSnapValue(true);
      } else if (card2.suit === card1.suit) {
        setSuitCounter(suitCounter + 1);

        setIsSuitValue(true);
      }
    }
  };

  useEffect(() => {
    fetchNewDeck();
  }, []);

  return (
    <>
      <StyledContainer>
        <StyledCardContainer>
          <p>{deckId}</p>
          <Card card={secondCard} />

          <Message
            isSuitValue={isSuitValue}
            isSnapValue={isSnapValue}
            suitValueCounter={suitCounter}
            snapValueCounter={valueCounter}
            cardCounter={cardCounter}
          ></Message>

          <Card card={recentCard}></Card>
        </StyledCardContainer>

        <Button
          deckId={deckId}
          onButtonClickHandler={onButtonClickHandler}
          checkMessagesHighlighted={checkMessagesHighlighted}
        ></Button>

        {hasError && (
          <StyledErrorMessageContainer>
            <ErrorMessage error={errorMessage}></ErrorMessage>
          </StyledErrorMessageContainer>
        )}
      </StyledContainer>
    </>
  );
};

export default App;
