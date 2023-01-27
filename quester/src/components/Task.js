import React, {useState} from 'react'
import Table from './table'
import TaskList from './TaskList'

function Task() {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    });

    return tasks.map((task, index)) => (
        <div className = {task.isComplete ? 'todo-row complete': 'todo-row'} key = {index}> 

        <div key = {task.id} onClick = {() => completeTask(task.id)>
         {task.text} 

        </div>

        M


    )
}