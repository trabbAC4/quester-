import React from 'react';
import TaskList from './components/TaskList'
import './App.css';

export default function App() {

  return (
    <div className="App">
      
        <h1 id = "Welcome_menu"> Welcome to Quester! </h1>

      <TaskList /> 

    </div>
  );
}