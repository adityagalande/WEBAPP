import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // here Proxy will add 'http://localhost:3000' when request hits
    axios.get('/api/joke')
    .then((res) => {setJokes(res.data)})
    .catch((error) => console.log(error))
  }, []);

  return(
    <div>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );

  
}

export default App
