import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import JokesList from './components/JokesList';

function App() {
  return (
    <div className="App">
        <Navigation />
          <div className="wrapper" style={{ textAlign: 'center' }} >
        <JokesList />
      </div>
    </div>
    );
  }

  export default App;
