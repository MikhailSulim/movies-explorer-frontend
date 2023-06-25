import './Promo.css';
import Header from '../Header/Header';
import promo_img from './../../images/promo_img.svg';

function Promo({isLogged}) {
  return (
    <>
      <Header isLogged={isLogged} />
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
              Учебный проект студента факультета<br/>Веб-разработки.
               {/* &#8209; */}
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <a href="#about" className="promo__button_link">
              <button className="promo__button">Узнать больше</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Promo;

// TODO исправить промо
// TODO исправить технологии
