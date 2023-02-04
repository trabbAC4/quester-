import React, {useState} from 'react';
import Table from './table';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

const Task = ({tasks, completeTask, removeTask, updateTask}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTask(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <Table edit = {edit} onSubmit = {submitUpdate} />;
    }
    return tasks.map((task, index) => (
        <div className = {task.isComplete ? 'todo-row complete': 'todo-row'} key = {index}> 

        <div key = {task.id} onClick = {() => completeTask(task.id)}>
            {task.text} 
        </div> 
        <div className = "icons"> 
            <RiCloseCircleLine 
                onclick={() => removeTask(task.id)} 
                className = 'delete-icon'
            /> 
            <TiEdit
                onClick = {() => setEdit({id: tasks.id, value: tasks.text})}
                className = 'edit-icon' 
            /> 
        </div>
        </div>
    ));
}
export default Task;