import './Register.css';
import { Link, Navigate } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import { useCallback, useState } from 'react';

function Register({ isLoggedIn, onRegister }) {
  const [userRegisterData, setUserRegisterData] = useState({ name: '', email: '', password: '' });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserRegisterData({ ...userRegisterData, [name]: value });
    },
    [userRegisterData]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onRegister(userRegisterData);
    },
    [onRegister, userRegisterData]
  );

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main className="register">
      <section className="register__container">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form
          className="register__form"
          name="register__form"
          onSubmit={onSubmit}
        >
          <Input
            name="name"
            label="Имя"
            error=""
            isValid={true}
            type="text"
            minLength={2}
            maxLength={30}
            onChange={onChange}
          />
          <Input
            name="email"
            label="E-mail"
            error=""
            isValid={true}
            type="email"
            onChange={onChange}
          />

          <Input
            name="password"
            label="Пароль"
            error="Что-то пошло не так..."
            isValid={false}
            type="password"
            minLength={8}
            onChange={onChange}
          />

          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
        </form>
        <span className="register__text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__text-signin">
            Войти
          </Link>
        </span>
      </section>
    </main>
  );
}

export default Register;
