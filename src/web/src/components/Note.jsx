import React, { useState } from "react";
import { Rnd } from "react-rnd";

const Note = () => {
  const [text, setText] = useState("");
  const [showNote, setShowNote] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDeleteNote = () => {
    setShowNote(false);
  };

  const handleAddNote = () => {
    setShowNote(true);
  }

  return (
    <div className="note-button">
      <button 
        className="main-note-button"
        onClick={handleAddNote}
      >
        NOTE</button>
    {showNote && (
    <Rnd
      default={{
        x: 0,
        y: -600,
        width: 320,
        height: 200,
      }}
    >
      {" "}
      <div className="note">
        <button className="close-button" onClick={handleDeleteNote}>
        ╳
        </button>
        <textarea
          className="note__text"
          placeholder="Write a note..."
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </Rnd>
  )}
</div>
);}

export default Note;
