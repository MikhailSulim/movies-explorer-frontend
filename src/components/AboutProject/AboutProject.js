import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about" id={"about"}>
      <div className="about__content">
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
        <div className="about__progress">
          <div className="about__progress-column">
            <div className="about__progress-bar about__progress-bar_back">
              1 неделя
            </div>
            <p className="about__progress-text">Back-end</p>
          </div>
          <div className="about__progress-column">
            <div className="about__progress-bar about__progress-bar_front">
              4 недель
            </div>
            <p className="about__progress-text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
