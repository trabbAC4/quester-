import React from 'react';
import TaskList from './components/TaskList'
import './App.css';

export default function App() {

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
            /> 
        </form> 


        <h1> Welcome </h1> 
        <button> Submit </button>

      </header>


      <TaskList /> 

    </div>
  );
}