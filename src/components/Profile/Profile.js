import './Profile.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidate from '../../hooks/useFormValidate';

function Profile({ isLogged, onLogout, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const regex_name = `^(?!(^${currentUser.name}$))([A-Za-zА-Яа-яЁё\\-\\s]{2,30})$`;
  const regex_email = `^(?!(^${currentUser.email}$))([a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$)$`;
  // const regex_email = '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$';

  const { values, errors, onChange, resetValidation, isFormValid } =
    useFormValidate();

  useEffect(() => {
    resetValidation(
      { name: currentUser.name, email: currentUser.email },
      {},
      false
    );
  }, [currentUser, resetValidation]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(values);
    // resetValidation();
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
              name="name"
              className={`profile__input profile__input_type_name ${
                errors.name ? 'profile__input_type_error' : ''
              }`}
              type="text"
              value={values.name || ''}
              minLength="2"
              maxLength="30"
              required
              onChange={onChange}
              autoComplete="off"
              pattern={regex_name}
              title="Имя должно содержать только латиницу, кириллицу, пробел или дефис, а также должно отличаться от текущего"
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              id="input-email"
              name="email"
              className={`profile__input profile__input_type_email ${
                errors.email ? 'profile__input_type_error' : ''
              }`}
              type="email"
              required
              value={values.email || ''}
              autoComplete="off"
              onChange={onChange}
              pattern={regex_email}
              title="Email должен быть в формате example@example.com, а также должен отличаться от текущего"
            />
          </label>
          <button
            type="submit"
            className={`${
              isFormValid 
                ? 'profile__button profile__button_type_edit'
                : 'profile__button profile__button_type_disable'
            }`}
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
