import React, { useState } from "react";
import { Rnd } from "react-rnd";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

  const handleAddWindow = () => {
    setShowWindow(true);
  }

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

  const handleDeleteWindow = () => {
    setShowWindow(false);
  }


  return(
    <div className="todo-button">
      <button 
        className="main-todo-button"
        onClick={handleAddWindow}> TODO </button>
      {showWindow && (
        <Rnd
          default={{
            x: 200,
            y: -600,
            width: 320,
            height: 200,
          }}
        >
        <div className={`todo-list${collapsed ? " todo-list--collapsed" : ""}`}>
          <div className="todo-list-header">
            <div className="todo-title">
              <h3 className="todo-list-title">TODO LIST</h3>
            </div>
            <div className="todo-btns">
              <button className="todo-list-close-btn" onClick={handleToggleCollapse}>
                —
              </button>
              <button className="todo-list-close-btn" onClick={handleDeleteWindow}>
                ╳
              </button>
            </div>
          </div>
          <div className="todo-list-content">
            <ul className="todo-list-items">
              {todos.map((todo, index) => (
                <li key={index} className="todo-list-item">
                  <span>{todo}</span>
                  <button
                    className="todo-list-remove-btn"
                    onClick={() => handleRemoveTodo(index)}
                  >
                    ✔
                  </button>
                </li>
              ))}
            </ul>
            <div className="todo-list-input-container">
              <input
                className="todo-list-input"
                type="text"
                placeholder="Add a todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="todo-list-add-btn" onClick={handleAddTodo}>
                <strong>ADD</strong>
              </button>
            </div>
          </div>
        </div>
      </Rnd>
    )}
</div>
);
};

export default TodoList;
