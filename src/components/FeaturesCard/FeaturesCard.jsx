import css from "./FeaturesCard.module.css";

const FeaturesCard = ({ title, description, points, svg }) => {
  return (
    <div className={css.card}>
      <div className={css.content}>
        <div className={css.icon}>{svg}</div>
        <div>
          <h3 className={css.title}>{title}</h3>
          <p className={css.text}>{description}</p>
        </div>
      </div>
      <ul className={css.points}>
        {points.map((points, index) => (
          <li key={index}>{points}</li>
        ))}
      </ul>
    </div>
  );
};
export default FeaturesCard;
