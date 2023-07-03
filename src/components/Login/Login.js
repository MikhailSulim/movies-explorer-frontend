import './Login.css';
import { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

function Login({ isLoggedIn, onLogin }) {
  const [userLoginData, setUserLoginData] = useState({ email: '', password: '' });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserLoginData({ ...userLoginData, [name]: value });
    },
    [userLoginData]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onLogin(userLoginData);
    },
    [onLogin, userLoginData]
  );

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main className="login">
      <section className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" name="login__form" onSubmit={onSubmit}>
          <Input
            name="email"
            label="E-mail"
            isValid={true}
            type="email"
            error=""
            onChange={onChange}
            value={userLoginData.email}
          />
          <Input
            name="password"
            label="Пароль"
            isValid={true}
            type="password"
            error=""
            minLength={8}
            onChange={onChange}
            value={userLoginData.password}
          />

          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <span className="login__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__text-signup">
            Регистрация
          </Link>
        </span>
      </section>
    </main>
  );
}

export default Login;
