function Footer() {
  return (
    <div className="footer">
      <span className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </span>
      <div className="footer__info">
        <span className="footer__copyright">&copy; 2023</span>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
