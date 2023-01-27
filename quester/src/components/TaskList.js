import React, {useState} from 'react'
import Table from './table'

function TaskList() {
    const [tasks, setTask] = useState([])
    
    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return 
        }
        const newTask = [task, ...tasks] 

        setTask(newTask) 
        console.log(...tasks);

    }

return (
    <div>
        <h1> Enter your tasks, young padawan </h1>
        <Table onSubmit= {addTask} />

    </div>
);
}
export default TaskList; 
