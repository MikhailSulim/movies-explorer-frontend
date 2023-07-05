import './Login.css';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import useFormValidate from '../../hooks/useFormValidate';
import SubmitFormBtn from '../SubmitFormBtn/SubmitFormBtn';

function Login({ onLogin, errorText, isLoading, onClearError }) {
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

  return (
    <main className="login">
      <form className="login__form" name="login__form" onSubmit={onSubmit}>
        <div className="login__up">
          <Logo onClearError={onClearError}/>
          <h1 className="login__title">Рады видеть!</h1>
          <Input
            name="email"
            label="E-mail"
            isValid={!errors.email}
            type="email"
            error={errors.email || ''}
            onChange={onChange}
            value={values.email || ''}
            pattern='[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$'
            title='Email должен быть в формате example@example.com'
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
          <span className="register__text-error">{errorText}</span>
          <SubmitFormBtn
            btnText={`${isLoading ? 'Авторизация...' : 'Войти'}`}
            isEnable={isFormValid}
          />
          <span className="login__text">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__text-signup" onClick={onClearError}>
              Регистрация
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Login;
