import React, { useState } from "react";
import Draggable from "react-draggable";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Draggable>
    <div className={`todo-list${collapsed ? " todo-list--collapsed" : ""}`}>
      <div className="todo-list__header">
        <h3 className="todo-list__title">Todo List</h3>
        <button className="todo-list__close-btn" onClick={handleToggleCollapse}>
        …
        </button>
      </div>
      <div className="todo-list__content">
        <ul className="todo-list__items">
          {todos.map((todo, index) => (
            <li key={index} className="todo-list__item">
              <span>{todo}</span>
              <button
                className="todo-list__remove-btn"
                onClick={() => handleRemoveTodo(index)}
              >
                ✔
              </button>
            </li>
          ))}
        </ul>
        <div className="todo-list__input-container">
          <input
            className="todo-list__input"
            type="text"
            placeholder="Add a todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="todo-list__add-btn" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
    </Draggable>
  );
};

export default TodoList;
