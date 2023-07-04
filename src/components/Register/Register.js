import './Register.css';
import { Link, Navigate } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import { useCallback } from 'react';
import SubmitFormBtn from '../SubmitFormBtn/SubmitFormBtn';
import useFormValidate from '../../hooks/useFormValidate';

function Register({ isLoggedIn, onRegister }) {
  const { values, errors, onChange, resetValidation, isFormValid } =
    useFormValidate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(values);
      onRegister(values);
      resetValidation();
    },
    [onRegister, resetValidation, values]
  );

  if (isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  return (
    <main className="register">
      <form
        className="register__form"
        name="register__form"
        onSubmit={onSubmit}
      >
        <div className="register__up">
          <Logo />
          <h1 className="register__title">Добро пожаловать!</h1>
          <Input
            name="name"
            label="Имя"
            error={errors.name || ''}
            isValid={!errors.name}
            type="text"
            minLength={2}
            maxLength={30}
            onChange={onChange}
            value={values.name || ''}
          />
          <Input
            name="email"
            label="E-mail"
            error={errors.email || ''}
            isValid={!errors.email}
            type="email"
            onChange={onChange}
            value={values.email || ''}
          />

          <Input
            name="password"
            label="Пароль"
            error={errors.password}
            isValid={!errors.password}
            type="password"
            minLength={8}
            onChange={onChange}
            value={values.password || ''}
          />
        </div>
        <div className="register__down">
          <SubmitFormBtn
            btnText={'Зарегистрироваться'}
            isEnable={isFormValid}
          />
          <span className="register__text">
            Уже зарегистрированы?
            <Link to="/signin" className="register__text-signin">
              Войти
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Register;

// TODO разная валидация на сервере и фронте для email, необходимо для фронта сделать такую же как на бэке
