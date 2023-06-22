import './Promo.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <>
      <Header isLogged={false} />
      <section className="promo">
        <div className="promo__content">
          <div className="promo__img" />
          <div className="promo__text">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <a href="#about" className='promo__button_link'>
              <button className="promo__button">Узнать больше</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Promo;
