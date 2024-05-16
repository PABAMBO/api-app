import { useState } from 'react';
import './App.css';

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const getData = () => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((data) => {
      	setCharacters(data.results);
    })
      .catch((error) => {
    	return ('Error fecthing data', error);
    });	
  };

  const nextCharacter = () => {
  	setCurrentIndex(currentIndex === characters.length - 1 ? 0 : currentIndex + 1);
  };

	  return (
    <div>
      <h1>Click below to generate a Star Wars character and their details! Who Knows? You might bump into a favorite of yours...</h1>
      <button className='first' onClick={getData}>Click Me!!!</button>
      {characters.length > 0 && (
      	<div> 
      	<div className='randomFact'>
      	<h2>{characters[currentIndex].name}</h2>
      	<p>Height: {characters[currentIndex].height}</p>
      	<p>Mass: {characters[currentIndex].mass}</p>
      	<p>Birthday: {characters[currentIndex].birth_year}</p>
      	</div>
      	<button className='second' onClick={nextCharacter}>Click To See Another Character!!!</button>
      	</div>
      	)}
    </div>
  );
};

export default App;
