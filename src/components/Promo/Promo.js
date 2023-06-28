import './Promo.css';
import promo_img from './../../images/promo_img.svg';

function Promo({ onNavigateToAbout }) {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__img-container">
          <img
            className="promo__img"
            src={promo_img}
            alt="Логотип в виде земного шара, суша состоит из множества слов web"
          />{' '}
        </div>
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета
            <br />
            Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="promo__button" onClick={onNavigateToAbout}>
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
