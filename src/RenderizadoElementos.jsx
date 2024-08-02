import { useState } from "react";

function Task({ task, onToggle }) {
    return (
        <li style={{textDecoration: task.completed ? "line-through" : "none"}}
        onClick={() => onToggle(task.id)}>
            {task.text}
        </li>
    )
}

export default function RenderizadoElementos(){
    const [tasks, setTaks] = useState([
        {id:1,text:"Aprender React", completed: false},
        {id:2,text:"Hacer la compra", completed: false},
        {id:3,text:"Limpiar la casa", completed: false}
    ]);

    const togleTask = (id) => {
        setTaks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    return (
      <>
        <h1>lista de tareas</h1>
        <ul>
            {tasks.map(task => (<Task key={task.id} task={task} onToggle={togleTask}/>))}
        </ul>
      </>  
    )
}