import React from "react";
import "./App.css";

const TodoList = ({ complete, checkComplete, onselect, id, List }) => {
  console.log(List);
  return (
    <div className="Todocmp">
      <li>
        <input
         className="check"
          type="checkbox"
          defaultChecked={complete}
          onClick={() => checkComplete(id)}
        />
        {` ${List.taskName} `}
        <button className="Todo-bt" type="delete" onClick={() => onselect(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoList;
