import css from "./Reviews.module.css";

const Reviews = () => {
  return (
    <section className={css.reviewsSection}>
      <div className={css.reviews}>
        <h2 className={css.title}>What Players Are Saying About MiSide</h2>
        <div className={css.content}>
          <p className={css.txt}>
            "MiSide is the perfect blend of horror and storytelling. A
            masterpiece!"
          </p>
          <p className={css.txt}>– Steam Reviewer</p>
        </div>
        <div className={css.content}>
          <p className={css.txt}>
            "I've never played a game as unique as MiSide. The transitions and
            narrative blew my mind."
          </p>
          <p className={css.txt}>– Game Critic</p>
        </div>
        <div className={css.content}>
          <p className={css.txt}>
            "If you love psychological horror games, you NEED to play MiSide!"
          </p>
          <p className={css.txt}>– YouTuber Review</p>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
