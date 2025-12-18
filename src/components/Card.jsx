const Card = (props) => {
  return (
    <div className="card">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="top">
          <h2>{props.projectName}</h2>
        </div>
        <div className="bottom">
          <h3>{props.post}</h3>
          <p>{props.text}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
