import Table from './components/table';
import {useState} from 'react';

import LevelDisplay from './components/leveldisplay'
import './App.css';

export default function App() {
  const [name, setname] = useState('');
  const [updated, setUpdated] = useState(message);
  
  const handleChange = (event) => {
    setname(event.target.value);
  };

  const handleClick = () => {
    setUpdated(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Quester! </h1>
        <h3> To get started enter your name </h3> 

        <form> 
          <label for ="name"> Name </label> 
          <input 
            type="text" 
            id= "message" 
            name="message"
            onChange= {handleChange}
            value = {message}
            /> 
        </form> 


        <h1> Welcome {updated}!</h1> 
        <button onClick = {handleClick} >Submit </button>

      </header>


      <Table />
      <LevelDisplay />

    </div>
  );
}