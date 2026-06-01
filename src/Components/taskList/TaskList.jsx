import { useState } from 'react'
//import '/TaskList.css'
//import '/AddTask.jsx'
import Button from '../button/Button';
import AddTask from './AddTask';


function TaskList() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask(){

      if (task === ""){
        alert("Please enter a task");
        return;
      }
      
      setTasks([...tasks, task]);

      setTask("");

    }

    function deleteTask(index){
        const updateTasks = tasks.filter((item, i) => 1 !== index);
        setTasks(updateTasks);
    }


    return(

        <div className="todolist">
            <h1>My To-Dos</h1>
            <input type="text" 
            placeholder='Enter New Task'
            value = {task}
            onChange={(e)=> setTask(e.target.value)}
            />
        <Button
        label = "Add Task"
        onButtonClick={AddTask}>

        </Button>


        </div>
    )

}
export default TaskList;