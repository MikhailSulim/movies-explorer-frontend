import header_logo from '../../images/header_logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <img className="header__logo" src={header_logo} alt="логотип проекта" />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <span className="login__text-input">E-mail</span>
          <input
            className="login__input login__input_email"
            defaultValue={'pochta@yandex.ru'}
            type="text"
          />

          <span className="login__text-input">Пароль</span>
          <input
            className="login__input login__input_password"
            defaultValue={'pqssword'}
            type="password"
          />

          <button className="login__button">Войти</button>
        </form>
        <span className="login__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__text-signup">
            Регистрация
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
