import author_photo from '../../images/author_photo.jpg';
function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__text">
          <h3 className="about-me__name">Михаил</h3>
          <span className="about-me__age">Фронтенд-разработчик, 38 лет</span>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/MikhailSulim"
            className="about-me__github"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          alt="Изображение автора"
          src={author_photo}
        />
      </div>
    </div>
  );
}

export default AboutMe;
