import React from 'react';
import './App.css';
import Example from '../Overview/Overview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a
            className="Home"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carl Wilcoxon
          </a>
        </nav>
      </header>
      <Example></Example>
    </div>
  );
}

export default App;
