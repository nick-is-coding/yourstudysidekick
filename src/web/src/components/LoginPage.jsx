import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import '../Login.css';

const LoginPage = ({ history, setCharacterInfo, characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const handleCharacterSelect = (characterId) => {
    setSelectedCharacter(characterId);
    setCharacterInfo(characters.find((char) => char.id === characterId));
  };

  const handleConfirm = () => {
    if (selectedCharacter) {
      localStorage.setItem("selectedCharacter", selectedCharacter);
      const defaultCharacter = characters.find((char) => char.id === selectedCharacter);
      setCharacterInfo({
        name: defaultCharacter.name,
        image: defaultCharacter.normal
      });
      history.push("/main");
    }
  };  

  return (
    <div className="character-container">
      <h2 className="title">Pick Your Study Buddy</h2>
      <div className="characters">
        {characters.map((char) => (
          <div
            key={char.id}
            className={`character-box ${
              selectedCharacter === char.id ? "selected" : ""
            }`}
            onClick={() => handleCharacterSelect(char.id)}
          >
            <img
              src={char.normal}
              alt={char.name}
              className={selectedCharacter === char.id ? "selected" : ""}
            />
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div className="select-box">
          <strong>
            <p>WILL THIS BE YOUR BUDDY OF STUDY?</p>
          </strong>
          <button className="confirm-button" onClick={handleConfirm}>
            YES
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(LoginPage);
