import React from 'react';

import { TodosList, TodosList2 } from './components/TodosList'
import './models/init'

import styled, {
  createGlobalStyle,
  keyframes,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: radial-gradient(yellow, orange);
  display: grid;
  place-content: center;
  text-align: center;
}
`;

const App = () => {
  

  return (
    <>
      <GlobalStyle />
      <div>
        <h2>Add new todos</h2>
        <TodosList />
      </div>
      <div>
        <h2><b>All todos:</b></h2>
        <TodosList2 />
      </div>
    </>
  )
}

export default App
