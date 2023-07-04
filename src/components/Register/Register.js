import './Register.css';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import { useCallback } from 'react';
import SubmitFormBtn from '../SubmitFormBtn/SubmitFormBtn';
import useFormValidate from '../../hooks/useFormValidate';

function Register({ onRegister, errorText, isLoading }) {
  const { values, errors, onChange, resetValidation, isFormValid } =
    useFormValidate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onRegister(values);
      resetValidation();
    },
    [onRegister, resetValidation, values]
  );

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
            pattern='[A-Za-zА-Яа-яЁё\-\s]{1,30}'
            title='Имя должно содержит только латиницу, кириллицу, пробел или дефис'
          />
          <Input
            name="email"
            label="E-mail"
            error={errors.email || ''}
            isValid={!errors.email}
            type="email"
            onChange={onChange}
            value={values.email || ''}
            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
            title='Email должен быть в формате example@example.com'
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
          <span id="text-error" className="register__text-error">
            {errorText}
          </span>
          <SubmitFormBtn
            btnText={`${isLoading ? 'Регистрация...' : 'Зарегистрироваться'}`}
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

