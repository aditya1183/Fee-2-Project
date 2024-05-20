import React from "react";
import { useState } from "react";
import Editform from "./Editform";
import styles from "../Css-Folder/Edit.module.css"
import { MdEditSquare } from "react-icons/md";
function Edittodo({ title, id, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    setIsEditing(true);
  };
 
  const setIsEditingToFalse = () => {
    setIsEditing(false);
  };
  return (
    <div className={styles.maindiv}>

    <div className={styles.contentdiv} >
       <p>Id: {id}</p>
        {isEditing ? (
        <Editform
          title={title}
          id={id}
          dispatch={dispatch}
          setIsEditingToFalse={setIsEditingToFalse}
        />
      ) : (
        <p><bold>Titile : </bold> {title}</p>
      )}
      </div>

      <div className={styles.buttondiv}>
     
      <button onClick={handleEdit} disabled={isEditing}>
      <MdEditSquare />
      </button>
      </div>
     
    


    </div>
  );
}

export default Edittodo;
