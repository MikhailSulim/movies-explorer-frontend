function AboutProject() {
  return (
    <div className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__description-items">
        <div className="about__description-item">
          <h3>Дипломный проект включал 5 этапов</h3>
          <p>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__description-item">
          <h3>На выполнение диплома ушло 5 недель</h3>
          <p>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__bar">
        <div className="about__bar_backend">1 неделя</div>
        <div className="about__bar_frontend">4 недели</div>
      </div>
      <div className="about__bar-text">
        <div className="about__bar-text_backend">Back-end</div>
        <div className="about__bar-text_frontend">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
