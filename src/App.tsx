import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import StarWars from "./star-wars/StarWars";
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={ configureStore }>
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
    </Provider>
  );
}

export default App;
