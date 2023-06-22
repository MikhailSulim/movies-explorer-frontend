import './Login.css';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <Input
            name="email"
            label="E-mail"
            isValid={true}
            type="email"
            error=""
          />
          <Input
            name="password"
            label="Пароль"
            isValid={true}
            type="password"
            error=""
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
