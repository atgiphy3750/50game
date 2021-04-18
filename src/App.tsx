import React from 'react';
import Game from './Game/Game';
import './App.css';

type AppProps = {};

const App = ({}: AppProps) => {
  return (
    <div className="App">
      <Game />
    </div>
  );
};

export default App;
