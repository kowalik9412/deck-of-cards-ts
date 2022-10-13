import React from 'react';
import styled from 'styled-components';

import { CardType } from '../../types';

const StyledCard = styled.div`
  img {
    height: 314px;
    width: 226px;
  }
`;

interface Props {
  card: CardType;
}

const Card: React.FC<Props> = ({ card }) => {
  const { image, value, suit } = card;

  return (
    <StyledCard>
      <img
        src={
          image
            ? image
            : 'https://opengameart.org/sites/default/files/card%20back%20black.png'
        }
        alt={
          card.suit && card.value
            ? `Card suit: ${suit}, value: ${value}`
            : 'Card background'
        }
      ></img>
    </StyledCard>
  );
};

export default Card;
