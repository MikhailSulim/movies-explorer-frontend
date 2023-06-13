function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </span>
        <div className="footer__info">
          <span className="footer__copyright">&copy; 2023 Михаил Сулим</span>
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
    </footer>
  );
}

export default Footer;
