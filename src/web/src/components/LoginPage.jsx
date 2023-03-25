import React, { useState } from "react";
import { withRouter } from 'react-router-dom';

import '../Login.css';

const LoginPage = ({ history }) => {
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const handleCharacterSelect = (characterName) => {
    setSelectedCharacter(characterName);
  };

  const handleConfirm = () => {
    if (selectedCharacter) {
      localStorage.setItem("selectedCharacter", selectedCharacter);
      history.push("/main");
    }
  };

  return (
    <div className="character-container">
      <h2 className="title">Pick Your Study Buddy</h2>
      <div className="characters">
      <div className={`character-box ${selectedCharacter === "c1-normal.png" ? "selected" : ""}`} onClick={() => handleCharacterSelect("c1-normal.png")}>
        <img
          src={require("../assets/c1-normal.png")}
          alt="Character 1"
          className={selectedCharacter === "c1-normal.png" ? "selected" : ""}
          onClick={() => handleCharacterSelect("c1-normal.png")}
        />
        </div>
        <div className="character-box">
        <img
          src={require("../assets/c2-normal.png")}
          alt="Character 2"
          className={selectedCharacter === "c2-normal.png" ? "selected" : ""}
          onClick={() => handleCharacterSelect("c2-normal.png")}
        />
        </div>
        <div className="character-box">
        <img
          src={require("../assets/c3-normal.png")}
          alt="Character 3"
          className={selectedCharacter === "c3-normal.png" ? "selected" : ""}
          onClick={() => handleCharacterSelect("c3-normal.png")}
        />
        </div>
      </div>
      {selectedCharacter && (
        <div className="select-box">
         <strong><p>WILL THIS BE YOUR STUDY OF BUDDY?</p></strong>
          <button className="confirm-button" onClick={handleConfirm}>YES</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(LoginPage);
