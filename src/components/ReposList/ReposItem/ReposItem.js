import "./ReposItem.scss";

export const ReposItem = ({ item }) => {
  const { name, description, html_url } = item;
  return (
    <div className="repos-item__container">
      <div className="repos-item__title">
        <a href={html_url} target="_blank" rel="noreferrer">
          <p>{name}</p>
        </a>
      </div>
      <div className="repos-item__desc">
        {description === null ? (
          <p>There is no description</p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};
