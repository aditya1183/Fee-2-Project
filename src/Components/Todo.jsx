import React from 'react'

function Todo({ id , title , completed , togglecompleted , deletetodo}) {
    function handleCompleted(){
        togglecompleted(id);

    }
    function handledelete(){
        deletetodo(id);
    }
  return (
    <div style={{
        border:"2px solid black",
        margin:"1rem",
        textAlign:"center",

    }}>
         <h2>{id}</h2>
        <p>{title}</p> 
        <p>Completed : {completed?"True" : "False"}</p>
        <button onClick={handleCompleted}>Completed</button>
        <button onClick={handledelete}>Delete Todo</button>
    
      


        
    </div>
  )
}

export default Todo