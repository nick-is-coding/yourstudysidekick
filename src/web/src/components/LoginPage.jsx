import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../Login.css";

const LoginPage = ({ history, setCharacterInfo, characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCharacterSelect = (characterId, index) => {
    setSelectedCharacter(characterId);
    setActiveIndex(index -1 );
    setCharacterInfo(characters.find((char) => char.id === characterId));
  };

  const handleConfirm = () => {
    if (selectedCharacter) {
      localStorage.setItem("selectedCharacter", selectedCharacter);
      const defaultCharacter = characters.find((char) => char.id === selectedCharacter);
      setCharacterInfo({
        name: defaultCharacter.name,
        image: defaultCharacter.normal,
      });
      console.log(setCharacterInfo);
      history.push("/main");
    }
  };

  const handleLeftArrowClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? characters.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const startIndex = activeIndex;
  const endIndex = activeIndex + 3;
  const visibleCharacters = characters.slice(startIndex, endIndex);

  if (visibleCharacters.length < 3) {
    const numMissing = 3 - visibleCharacters.length;
    const remainingChars = characters.slice(0, numMissing);
    visibleCharacters.push(...remainingChars);
  }

  return (
    <div className="character-container">
      <h2 className="login-title">Pick Your SideKick</h2>
      <div className="top-banner"></div>
      <div className="characters">
        <button className="arrow-button-left" onClick={handleLeftArrowClick}>
          {"<"}
        </button>
        {visibleCharacters.map((char, index) => (
          <div
            key={char.id}
            className={`character-box ${selectedCharacter === char.id ? "selected" : ""}`}
            onClick={() => handleCharacterSelect(char.id, startIndex + index)}
          >
            <img src={char.normal} alt={char.name} className={selectedCharacter === char.id ? "selected" : ""} />
          </div>
        ))}
        <button className="arrow-button-right" onClick={handleRightArrowClick}>
          {">"}
        </button>
      </div>
      {selectedCharacter && (
        <div className="select-box">
          <strong>
            <span>Will </span>
            <span className="p-1">
              {characters.find(char => char.id === selectedCharacter)?.name}
            </span>  
            <span> be the sidekick to help you on your focus journey?</span>
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
