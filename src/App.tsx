import React from 'react';
import './App.css';
import * as ReactRedux from 'react-redux';


import configureStore from './redux/configureStore';
import StarWars from "./star-wars/StarWars";

const store = configureStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
