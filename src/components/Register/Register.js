import './Register.css';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <Input name="name" label="Имя" error="" isValid={true} type="text" />
          <Input
            name="email"
            label="E-mail"
            error=""
            isValid={true}
            type="email"
          />

          <Input
            name="password"
            label="Пароль"
            error="Что-то пошло не так..."
            isValid={false}
            type="password"
          />

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
