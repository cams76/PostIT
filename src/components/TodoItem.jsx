import React, { Fragment } from 'react'

export function TodoItem({todo, eliminarPost}){

    const {id, task, desc, importante} = todo;

    const fnEliminarPost = () => {
        eliminarPost(id);
    }


    function myPost(todo){
        if(todo.importante === true){

            return  <div className="col m-4">
                        <li  className="card importante" >
                           <div className="card-body">
                                <button className="btn me-2" type="button" onClick={fnEliminarPost}>X</button>
                                <h5>{todo.task}</h5>
                                <h5 className="card-subtitle">{todo.desc}</h5>
                            </div>
                        </li>
                    </div>
        }
        else{
            return  <div className="col m-4">
                        <li className="card">
                            <div className="card-body">
                                <button className="btn me-2" type="button" onClick={fnEliminarPost}>X</button>
                                <h5 >{todo.task}</h5>
                                <h5 className="card-subtitle">{todo.desc}</h5>
                            </div>
                        </li>
                    </div>

        }

    }

    return (myPost(todo))
}
