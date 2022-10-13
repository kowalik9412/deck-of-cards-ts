import React, { useState } from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
  height: 50px;
  margin: 5px 0;
  background: #ae1c1c;
  border-radius: 5px;
  border: 1px solid #9e4f4f;
`;

const StyledErrorMessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: #f4c7c7;
  width: 120px;
  height: 100%;
`;

const StyledErrorMessageBody = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 100%;
  padding-left: 40px;
  font-weight: bold;
  color: #f4c7c7;
  border-left: 1px solid #f4c7c7;
`;

interface Props {
  error: string;
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <StyledErrorMessage>
          <StyledErrorMessageHeader>Error</StyledErrorMessageHeader>

          <StyledErrorMessageBody data-testid='test-error-message'>
            {error}
          </StyledErrorMessageBody>
        </StyledErrorMessage>
      )}
    </>
  );
};

export default ErrorMessage;
