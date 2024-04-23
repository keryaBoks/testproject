import React, { useState } from "react";
import { GithubIcon } from "../../icons/github-icon";
import { SearchIcon } from "../../icons/search-icon";
import "./Header.scss";

export const Header = ({ setUserName, setIsNotFoundUser, isNotFoundUser }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setUserName(inputValue);
    if (isNotFoundUser === true) {
      setIsNotFoundUser(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setUserName(inputValue);
      if (isNotFoundUser === true) {
        setIsNotFoundUser(false);
      }
    }
  };

  return (
    <div className="header-container">
      <div>
        <GithubIcon />
      </div>
      <div className="header-wrapper">
        <div className="header-wrapper-icon" onClick={handleSearchClick}>
          <SearchIcon />
        </div>
        <input
          placeholder="Enter GitHub username"
          className="header-wrapper-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};
