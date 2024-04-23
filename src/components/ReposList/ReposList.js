import { useUserDataRepos } from "../../api/useUserDataRepos";
import { RepIcon } from "../../icons/warnings/rep-icon";
import { WarningComponent } from "../WarningComponent/WarningComponent";
import { ReposItem } from "./ReposItem/ReposItem";
import "./ReposList.scss";

export const ReposList = ({ userName }) => {
  const { data } = useUserDataRepos(userName);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="repos-list__container">
      {data.length === 0 ? (
        <WarningComponent text="Repository list is empty" icon={<RepIcon />} />
      ) : (
        <>
          <div className="repos-list__title">Repositories ({data.length})</div>
          <ul className="repos-list__list">
            {data.map((item) => (
              <li className="repos-list__list__item" key={item.name}>
                <ReposItem item={item} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
