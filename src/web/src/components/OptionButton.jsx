import React, { useState } from "react";
import TodoWindow from './TodoWindow';
import Note from './Note';

const OptionButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setShowMenu(false);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...selectedOptions];
    newOptions.splice(index, 1);
    setSelectedOptions(newOptions);
  };

  return (
    <div className="option-button">
      <button onClick={() => setShowMenu(!showMenu)}>+</button>
      {showMenu && (
        <div className="option-button__menu">
          <div
            className="option-button__option"
            onClick={() => handleOptionClick("note")}
          >
            Note
          </div>
          <div
            className="option-button__option"
            onClick={() => handleOptionClick("todo")}
          >
            Todo List
          </div>
        </div>
      )}
      {selectedOptions.map((option, index) => (
        <div key={index} className="option-button__selected-option">
          {option === "note" && <Note onStop={() => null} />}
          {option === "todo" && <TodoWindow />}
          <button onClick={() => handleRemoveOption(index)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default OptionButton;
