import React, { useState } from 'react'
import './todo.css';

const ToDo = () => {

    const [todolist, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    const addtoDo = () => {
        // todolist.push(task);
        
        setTodoList( [...todolist, task] );
        setTask("");
    }

    const removeTodo = (index) => {
        let temp = todolist;
        temp.splice(index, 1)
        setTodoList([...temp])
    }
    
    const showToDoList = () => {
        return todolist.map( (task, i) => (
            <div className='task'>
                <p>{task} {i}</p>
                <button onClick={ () => {removeTodo(i)}} className='btn btn-danger ml-auto'>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        ) )
    }

  return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                <h4>ToDo List</h4>
                
            </div>
            <div className='card-body'>
                <div className='input-group'>
                    <input className='form-control' value={task} onChange={(e) => {setTask(e.target.value)} }/>
                    <button className='btn btn-primary' onClick= {addtoDo}>Add New Task</button>
                </div>
                {showToDoList()}
            </div>
        </div>
    </div>
  )
}

export default ToDo