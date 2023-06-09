import './Profile.css';
import { Link } from 'react-router-dom';

function Profile({ isLogged }) {
  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__label">
            Имя
            <input
              className="profile__input profile__input_type_name"
              type="text"
              defaultValue={'Виталий'}
              minLength={2}
              maxLength={30}
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input profile__input_type_email"
              type="email"
              defaultValue={'pochta@yandex.ru'}
            />
          </label>
          <button
            type="submit"
            className="profile__button profile__button_type_edit"
          >
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__button profile__button_type_logout">
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
