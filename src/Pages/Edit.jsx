import React, { useState } from "react";
import { useData } from "../Context/TodoData";

import styles from "../Css-Folder/Edit.module.css";
import EditTodos from "../Components/EditTodos";
import { useReducer } from "react";

const reducer = (edittodos, action) => {
  if (action.type == "EDIT_TODO") {
    return edittodos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, title: action.payload.newTitle };
      } else {
        return todo;
      }
    });
  }
};
function Edit() {
  const { todos, Deletetodo, ToggleCompleted, AddTodo, Settodos } = useData();

  const [edittodos, dispatch] = useReducer(reducer, todos);

  return (
    <div>
      <EditTodos edittodos={edittodos} dispatch={dispatch} />
    </div>
  );
}

export default Edit;
