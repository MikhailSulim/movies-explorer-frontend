import "./Profile.css";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Profile({ isLogged }) {
  return (
    <>
      <Header isLogged={isLogged} />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__label">
            Имя
            <input
              className="profile__input profile__input_name"
              type="text"
              defaultValue={'Виталий'}
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input profile__input_email"
              type="text"
              defaultValue={'pochta@yandex.ru'}
            />
          </label>
          <button type="submit" className="profile__button profile__button_edit">
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__button profile__button_logout">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
