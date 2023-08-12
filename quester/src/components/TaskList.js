import React, {useState} from 'react';
import Table from './table';
import Task from './Task';
import LevelDisplay from './leveldisplay';

function TaskList() {
    const [tasks, setTask] = useState([]);
    
    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTask = [task, ...tasks];

        setTask(newTask);
        console.log(...tasks);

    };
    
    const updateTask = (TaskId, newVal) => {
        if (!newVal.text || /^|s*$/.test(newVal.text)) {
            return; 
        }

    setTask(prev => prev.map(item => (item.id === TaskId ? newVal: item)))
    };

    const removeTask = id => {
        const removedArr = [...tasks].filter(task => task.id !== id);

        setTask(removedArr)
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id){
                task.isComplete = !task.isComplete;
            }
            return task;
        });
    setTask(updatedTasks);
    };



return (
    <>
        <h1> Enter your tasks, young padawan </h1>
        <Table onSubmit= {addTask} />
        <Task 
            tasks= {tasks} 
            completeTask = {completeTask } 
            removeTask = {removeTask} 
            updateTask = {updateTask} 
        />
        <LevelDisplay 
            curr_level = {updateTask}
        />

    </> 
);
}
export default TaskList; 
