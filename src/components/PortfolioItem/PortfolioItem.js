import './PortfolioItem.css';

function PortfolioItem({ link, name }) {
  return (
    <li className="portfolio__item">
      <a
        className="portfolio__item-link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__item-name">{name}</p>
        <p className="portfolio__item-arrow">&#x2197;</p>
      </a>
    </li>
  );
}

export default PortfolioItem;
