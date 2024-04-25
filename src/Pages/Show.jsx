import React from 'react'
import Todo from '../Components/Todo'
function Show({todos , togglecompleted , deletetodo}) {
  return (
    <div>
       {
       todos && 
            todos.map((todo)=>{
                return     <Todo {...todo} key={todo.id} togglecompleted={togglecompleted} deletetodo={deletetodo} />
                
            })
        }

    </div>
  )
}

export default Show