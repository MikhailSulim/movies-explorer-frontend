import header_logo from '../../images/header_logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <img className="header__logo" src={header_logo} alt="логотип проекта" />
        <h1 className="register__title">Рады видеть!</h1>
        <form className="register__form">
          <span className="register__text-input">Имя</span>
          <input
            className="register__input register__input_name"
            defaultValue={'Виталий'}
            type="text"
          />
          <span className="register__text-input">E-mail</span>
          <input
            className="register__input register__input_email"
            defaultValue={'pochta@yandex.ru'}
            type="text"
          />
          <span className="register__text-input">Пароль</span>
          <input
            className="register__input register__input_password register__input_error"
            defaultValue={'password'}
            type="password"
          />
          <span className='register__error'>Что-то пошло не так...</span>
          <button className="register__button">Зарегистрироваться</button>
        </form>
        <span className="register__text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__text-signin">
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Register;
