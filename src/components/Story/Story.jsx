import css from "./Story.module.css";

const Story = () => {
  return (
    <section className={css.story}>
      <div className={css.content}>
        <h2 className={css.title}>Unravel the Story of MiSide</h2>
        <p>
          The story centers around MiTa, a virtual character who begins as a
          friendly companion but gradually reveals her sinister side. As the
          protagonist, you're drawn into her world, where every interaction
          uncovers new layers of mystery and fear.
        </p>
        <p>
          Nothing is as it seems. What starts as a lighthearted adventure
          transforms into a gripping psychological thriller. Can you uncover the
          truth behind MiTa's secrets? Only in MiSide will you find out.
        </p>
      </div>
      <iframe
        className={css.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yEAhtiVTomI?si=td12trqSULwy8h_s"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};
export default Story;
