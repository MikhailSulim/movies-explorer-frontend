import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__blocks">
          <li className="techs__block">HTML</li>
          <li className="techs__block">CSS</li>
          <li className="techs__block">JS</li>
          <li className="techs__block">React</li>
          <li className="techs__block">Git</li>
          <li className="techs__block">Express.js</li>
          <li className="techs__block">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
