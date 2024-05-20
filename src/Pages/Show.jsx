import React from "react";
import Todo from "../Components/Todo";
import { useData } from "../Context/TodoData";
import { useAuth } from "../Context/AuthProvider";
function Show() {
  const { todos, Deletetodo, ToggleCompleted, AddTodo, Settodos } = useData();
  const { isloggedin, setislogedin } = useAuth();

  return (
    <div>
      {/* <Show todos={todos}  togglecompleted={ToggleCompleted} deletetodo={Deletetodo}/> */}

      {todos &&
        todos.map((todo) => {
          return <Todo {...todo} />;
        })}
    </div>
  );
}

export default Show;
