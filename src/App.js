import React, { useState, useContext } from 'react';
import Menu from './Components/Menu';
import Game from './Components/Game';
import Results from './Components/Results';
import './App.css'
import { ViewStateContext } from './Helpers/Contexts';

function App() {

  const [viewState, setViewState] = useState('menu')

  return (
      <div className="flex flex-col min-h-screen justify-center items-center gap-36 bg-gradient-to-br from-green-300 to-green-100">
        <h1 className="absolute top-12 text-6xl font-light tracking-widest">geoquiz.</h1>
        <ViewStateContext.Provider value={{ viewState, setViewState }}>
          <div className="m-0 p-0">
            {viewState === 'menu' && <Menu />}
            {viewState === 'game' && <Game />}
            {viewState === 'results' && <Results />}
          </div>
        </ViewStateContext.Provider>
      </div>
  );
}

export default App;
