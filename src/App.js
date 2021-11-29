import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = ()=>{

  return (
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  )
};

export default App;