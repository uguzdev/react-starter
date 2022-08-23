import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from './commons/Theme';

const Selam = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.Red};
  margin: 60px;
  border-radius: 100px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Selam>Learn react</Selam>
    </ThemeProvider>
  );
};

export default App;
