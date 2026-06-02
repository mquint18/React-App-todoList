import { useState } from 'react';
import Button from '../button/Button';
import Input from './Input';
//import '/TaskList.css';




function TaskList() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function AddTask(){

      if (task === ""){
        alert("Please enter a task");
        return;
      }
      
      setTasks([...tasks, task]);

      setTask("");

    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            AddTask();
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((item, i) => i !== index);
        setTasks(updateTasks);
    }


    return(

        <div className="todolist">
            <h1>My To-Dos</h1>


           <Input
                value={task}
                placeholder="Enter New Task"
                onChange={(e) => setTask(e.target.value)} 
                onKeyDown={handleKeyDown}
            />

            <Button
                text = "Add Task"
                onClick={AddTask}
            />

       
       <div className='tasklist'>

            {tasks.map((item, index)=> (
                    <div className="task" key = {index}>
                        <p>{item}</p>
                        <Button
                            text="Remove Task"
                            onClick={()=>deleteTask(index)}
                            />
                        </div>
                ))
            }


       </div>


        </div>
    )

}
export default TaskList;