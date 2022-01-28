import React, { Fragment, useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import { TodoItem } from './TodoItem';

const KEY = "todolist-todos"

export function TodoList(){

    const [todos, setTodos] = useState([]);

    const taskRef = useRef();
    const descRef = useRef();


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos){
            setTodos(storedTodos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos])

    const agregarTarea = () => {
        console.log("AGREGANDO TAREA");
        const task = taskRef.current.value;
        const desc = descRef.current.value;    


        if (task === '' || desc ==='') return;

        let estadomicheck = document.getElementById("myCheck");
       
        setTodos((prevTodos) => {

                const newTask = {
                id: uuid(),
                task: task,
                desc: desc,
                importante: estadomicheck.checked
        }

            return [...prevTodos, newTask]
        })
    


        taskRef.current.value = null;
        descRef.current.value = null
    }

  
    const eliminarPostTablero = (id) => {
        console.log(id)
        const newTodos = [...todos];
        for (var i = 0; i < newTodos.length; i++) {
            if (newTodos[i].id === id) {
            newTodos.splice(i, 1);
            }
        }
        setTodos(newTodos);
    };



    return (

        <Fragment>
        <div>
             <h1 className="fw-bold"> Post It Simulator!!!</h1>

              <div className="input-group mt-4 mb-4" > 
                    <input  className="col form-control me-3" type="text" ref={taskRef} placeholder='Título'></input>
                    <input className="col form-control me-3" type="text" ref={descRef} placeholder='Descripción'></input>
                    <input className="form-check-input"  id="myCheck" type="checkbox"></input> 
                    <label className="form-check-label" style={{ color: "#FFFFFF" }}  htmlFor="flexCheckDefault"> Importante !!!  </label>
                    <button className="col-3 ms-3" onClick={agregarTarea} >Agregar</button>
               </div>
            
            <div className="col m-5">
                <ul className="col-xs-12 col-sm-10 col-md-10 col-lg-10 m-5"> 
                {todos.map((todo) => (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        eliminarPost={eliminarPostTablero}>
                    </TodoItem>
                ))}
                </ul>
            </div>


        </div>
        
        </Fragment>

    );
}
