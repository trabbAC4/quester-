
import React, {useState, Component } from 'react';

function Table(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value) 

    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('')
        
    };

    return ( 
        <form className = "todo-form" onSubmit = {handleSubmit} >
            <input 
            type= "text" 
            placeholder = "Add a task " 
            value = {input}
            name = "text" 
            className = "tasktable"
            onChange = {handleChange}
        />
        <button className = "taskbutton"> Add a task </button>
        </form>

    );
}

export default Table;


