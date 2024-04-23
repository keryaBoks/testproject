import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { MainUserProfile } from "./components/MainUserProfile/MainUserProfile";
import { ReposList } from "./components/ReposList/ReposList";
import "./App.css";
import { WarningComponent } from "./components/WarningComponent/WarningComponent";
import { SearchIcon } from "./icons/warnings/search-icon";
import { UserIcon } from "./icons/warnings/user-icon";

function App() {
  const [userName, setUserName] = useState("");
  const [isNotFoundUser, setIsNotFoundUser] = useState(false);

  return (
    <div className="app">
      <Header
        setUserName={setUserName}
        userName={userName}
        setIsNotFoundUser={setIsNotFoundUser}
        isNotFoundUser={isNotFoundUser}
      />
      {isNotFoundUser ? (
        <WarningComponent icon={<UserIcon />} text="User not found" />
      ) : userName === "" ? (
        <WarningComponent
          text="Start with searching a GitHub user"
          icon={<SearchIcon />}
        />
      ) : (
        <div className="app-middle">
          <MainUserProfile
            userName={userName}
            setIsNotFoundUser={setIsNotFoundUser}
          />
          <ReposList userName={userName} />
        </div>
      )}
    </div>
  );
}

export default App;
