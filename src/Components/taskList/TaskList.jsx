import { useState } from 'react'
//import '/TaskList.css'




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
        <button
        onClick={AddTask}
            > Add Task</button>
       
       <div className='tasklist'>

            {
                tasks.map((item, index)=> (
                    <div className="task" key = {index}>
                        <p>{item}</p>
                        <button onClick={()=> deleteTask(index)}>Remove Task</button>
                    </div>
                ))
            }


       </div>


        </div>
    )

}
export default TaskList;