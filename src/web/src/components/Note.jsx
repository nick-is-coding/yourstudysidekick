import React, { useState } from "react";
import Draggable from "react-draggable";


const Note = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Draggable>
      <div className="note">
        <textarea
          className="note__text"
          placeholder="Write a note..."
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </Draggable>
  );
};

export default Note;
