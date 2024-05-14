import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [facts, setFacts] = useState([]);

  const getFact = () => {
    fetch('http://numbersapi.com/random/year?json')
      .then((res) => res.json())
      .then((data) => setFacts(data));
  };

return (
    <div>
      <h1>Click the following button for a random fact about a random year! 
      <br />
      Who knows? You might learn something interesting...
      </h1>
      <button onClick={getFact}>Click Me!!!</button>
      <div className='randomFact' key='text'>
        Your random fact is that: {facts.text}
      </div>
      <footer>API requested from numbersapi.com ^_^</footer>
    </div>
  );
};

export default App;
