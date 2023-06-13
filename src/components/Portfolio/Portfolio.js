function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__items">
          <li className="portfolio__item">
            <p className="portfolio__item-name">Статичный сайт</p>
            <a
              className="portfolio__item-link"
              href="https://github.com/MikhailSulim/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              &#x2197;
            </a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-name">Адаптивный сайт</p>
            <a
              className="portfolio__item-link"
              href="https://github.com/MikhailSulim/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              &#x2197;
            </a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__item-name">Одностраничное приложение</p>
            <a
              className="portfolio__item-link"
              href="https://github.com/MikhailSulim/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              &#x2197;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
