
import React, {useState, useEffect, useRef } from 'react';

function Table(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => { 
        inputRef.current.focus()
    })
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
            {props.edit ? ( 
            <>
            <input 
            value = {input}
            placeholder = "Add a task "
            name = "text" 
            className = "tasktable"
            onChange = {handleChange}
            />
            <button onClick = {handleSubmit} className = "taskbutton"> Update your task </button>
            </> 
            ) : (
                <> 
                <input placeholder = "Add a task"
                value = {input}
                onChange = {handleChange}
                name = 'text'
                className = 'task-input'
                ref = {inputRef}
                /> 
                <button onClick = {handleSubmit} className = 'task-button'> 
                    Add a task 
                </button>
                </> 
            )}
            </form>
    );
            }
    
export default Table;


