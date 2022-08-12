import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button className="my-4 mx-auto" onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
