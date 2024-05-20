import React from "react";
import Edittodo from "./Edittodo";

function EditTodos({ edittodos, dispatch }) {
  return (
    <div>
       
      {
        edittodos &&  
        edittodos.map((todo)=>{
            return <Edittodo {...todo}  dispatch={dispatch} key={todo.id}/>
        })
      }
    </div>
  );
}

export default EditTodos;
