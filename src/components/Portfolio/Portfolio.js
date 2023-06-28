import PortfolioItem from '../PortfolioItem/PortfolioItem';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__items">
          <PortfolioItem
            name="Статичный сайт"
            link="https://github.com/MikhailSulim/how-to-learn"
          />
          <PortfolioItem
            name="Адаптивный сайт"
            link="https://github.com/MikhailSulim/russian-travel"
          />
          <PortfolioItem
            name="Одностраничное приложение"
            link="https://github.com/MikhailSulim/react-mesto-api-full-gha"
          />
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
