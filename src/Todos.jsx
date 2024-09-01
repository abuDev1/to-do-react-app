import React from "react";

export const Todos = ({ todos, makeFavorite, deleteTodo }) => {
  return todos.map((todo, index) => {
    let todoClass = `todo ${todo.favorite ? "selected" : ""}`;
    return (
      <div className="todos">
        <div className={todoClass}>
          <div className="favorite">
            <button className="star" onClick={() => makeFavorite(index)}>
              ★
            </button>
          </div>
          <div className="todo-text">{todo.text}</div>
          <div className="actions">
            <button className="cross" onClick={() => deleteTodo(index)}>
              &#10060;
            </button>
          </div>
        </div>
      </div>
    );
  });
};
