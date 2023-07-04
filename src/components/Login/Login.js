import './Login.css';
import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import useFormValidate from '../../hooks/useFormValidate';
import SubmitFormBtn from '../SubmitFormBtn/SubmitFormBtn';

function Login({ isLoggedIn, onLogin }) {
  const { values, errors, onChange, resetValidation, isFormValid } =
    useFormValidate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onLogin(values);
      resetValidation();
    },
    [onLogin, resetValidation, values]
  );

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main className="login">
      <form className="login__form" name="login__form" onSubmit={onSubmit}>
        <div className="login__up">
          <Logo />
          <h1 className="login__title">Рады видеть!</h1>
          <Input
            name="email"
            label="E-mail"
            isValid={!errors.email}
            type="email"
            error={errors.email || ''}
            onChange={onChange}
            value={values.email || ''}
          />
          <Input
            name="password"
            label="Пароль"
            isValid={!errors.password}
            type="password"
            error={errors.password || ''}
            minLength={8}
            onChange={onChange}
            value={values.password || ''}
          />
        </div>
        <div className="login__down">
          <SubmitFormBtn btnText={'Войти'} isEnable={isFormValid} />
          <span className="login__text">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__text-signup">
              Регистрация
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Login;
