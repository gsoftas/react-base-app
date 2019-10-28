import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Joke';

const JokesList = () => {
  const [jokesList, setJokesList] = useState([]);

  const options = {  headers: {
    'Accept': 'application/json' }
  }

  function getJoke() {
    axios.get("https://icanhazdadjoke.com", options)
    .then(response => {console.log(response.data); setJokesList([response.data])});
  };


  useEffect(() => {
    getJoke();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 className="is-size-2">Joke of the day</h2>
      <ul className="box">
        {jokesList.map(el => (
          <Joke key={el.id} joke={el.joke} />
        ))}
      </ul>
      <button onClick={() => getJoke()} className="button is-primary is-large" style={{ marginTop: '1rem'}}>Get Joke</button>
    </div>
  )
}

export default JokesList;