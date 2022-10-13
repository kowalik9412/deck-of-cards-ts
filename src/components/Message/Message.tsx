import React from 'react';
import styled from 'styled-components';

const StyledMessageContainer = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  & p:first-child,
  p:last-child {
    width: 80%;
    padding: 20px;
    color: #fff;
    font-size: 20px;
    opacity: 0;
  }

  & p:first-child {
    background: green;
  }

  & p:last-child {
    background: #3f51b5;
  }

  & p:first-child.active,
  p:last-child.active {
    opacity: 1;
    font-size: 23px;
    font-weight: 600;
  }
`;

interface Props {
  isSuitValue: boolean;
  isSnapValue: boolean;
  suitValueCounter: number;
  snapValueCounter: number;
  cardCounter: number;
}

const Message: React.FC<Props> = ({
  isSuitValue,
  isSnapValue,
  suitValueCounter,
  snapValueCounter,
  cardCounter,
}) => {
  const isLastCard = cardCounter === 0;

  return (
    <StyledMessageContainer data-testid='test-messagebox'>
      <p
        data-testid='test-snap-suit'
        className={isLastCard || isSuitValue ? 'active' : ''}
      >
        {isLastCard ? `SNAP SUIT POINTS ${suitValueCounter}` : 'SNAP SUIT!'}
      </p>

      <p
        data-testid='test-snap-value'
        className={isLastCard || isSnapValue ? 'active' : ''}
      >
        {isLastCard ? `SNAP VALUE POINTS ${snapValueCounter}` : 'SNAP VALUE!'}
      </p>
    </StyledMessageContainer>
  );
};

export default Message;
