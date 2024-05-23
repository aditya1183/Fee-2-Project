import React from 'react'
import {useState} from 'react';
import { useData } from '../Context/TodoData';
import { toast } from "react-toastify";


function Editform({ title, dispatch, id, setIsEditingToFalse }) {

    const {todos , Settodos}=useData();

  const [newTitle, setNewTitle] = useState(title);
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({
          type: "EDIT_TODO",
          payload: { id: id, newTitle: newTitle },
      });
      
      

      
      Settodos((prev) => {
        return prev.map((todo) => {
          if (id === todo.id) {
            return { ...todo, title:newTitle };
            
          }
           
          else {
            return todo;
          }
        });
        
      });
      toast.info("Your Title Sucessfull Edited");

      setNewTitle("");
      setIsEditingToFalse();
      
  };
  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={newTitle}
              onChange={(e) => {
                  setNewTitle(e.target.value);
              }}
          />
          <button style={{
            padding:".5rem 2rem",
            marginBottom:".5rem",
            backgroundColor:"",
            border:"none"
          }}>Done</button>
      </form>
  );
}

export default Editform