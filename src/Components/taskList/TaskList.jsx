import { useState } from 'react'
import '/TaskList.jsx'


function TaskList() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

        function AddTask() {

            if (task === ""){
                alert("Please enter a task");
            }

            setTasks([...tasks, task]);

            setTask("");

        }

}