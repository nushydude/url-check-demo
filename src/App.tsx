import React, { useState } from 'react';
import validator from 'validator'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Input = styled.input<{ error: boolean }>`
  padding: 10px;
  border: 2px solid ${({ error }) => error ? 'red' : 'black'};
  width: 400px;
  outline: none;
`;


const App: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <PageContainer>
      <p>Enter a URL to check:</p>
      <Input value={value} onChange={(e) => setValue(e.target.value)} error={!validator.isURL(value)} />
    </PageContainer>
  );
}

export default App;
