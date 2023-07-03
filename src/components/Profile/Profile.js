import './Profile.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useCallback, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidate from '../../hooks/useFormValidate';

function Profile({ isLogged, onLogout, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  // const [userData, setUserData] = useState({ email: '', password: '' });
  const { values, errors, onChange, resetValidation, isFormValid } =
    useFormValidate();

  useEffect(() => {
    resetValidation(
      { name: currentUser.name, email: currentUser.email },
      {},
      true
    );
  }, [currentUser, resetValidation]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({ name: values.name, email: values.email });
    resetValidation();
  }

  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__label">
            Имя
            <input
              id="input-name"
              name='name'
              className="profile__input profile__input_type_name"
              type="text"
              value={values.name || ''}
              minLength="2"
              maxLength="30"
              required
              onChange={onChange}
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              id="input-email"
              name='email'
              className="profile__input profile__input_type_email"
              type="email"
              required
              value={values.email || ''}
              onChange={onChange}
            />
          </label>
          <button
            type="submit"
            className="profile__button profile__button_type_edit"
          >
            Редактировать
          </button>
        </form>
        <Link
          to="/"
          className="profile__button profile__button_type_logout"
          onClick={onLogout}
        >
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
