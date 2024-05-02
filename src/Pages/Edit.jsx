import React from 'react'
import { useData } from '../Context/TodoData';
import Editform from '../Components/Editform';

function Edit() {
  const { todos , Deletetodo,ToggleCompleted , AddTodo , Settodos } =useData();

  return (
    <div>
      <h1>Edit Todo Here : </h1>

      {
        
        
      }
    </div>
  )
}

export default Edit;