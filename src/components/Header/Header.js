import { GithubIcon } from "../../icons/github-icon";
import { SearchIcon } from "../../icons/search-icon";
import "./Header.scss";

export const Header = () => (
  <div className="header-container">
    <div>
      <GithubIcon />
    </div>
    <div className="header-wrapper">
      <div className="header-wrapper-icon">
        <SearchIcon />
      </div>
      <input
        placeholder="Enter GitHub username"
        className="header-wrapper-input"
      />
    </div>
  </div>
);
