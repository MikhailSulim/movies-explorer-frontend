import { Link } from 'react-router-dom';
import header_logo from '../../images/header_logo.svg';

function Header({ isLogged }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img
            className="header__logo"
            src={header_logo}
            alt="логотип проекта"
          />
        </Link>
        {isLogged ? (
          <nav className="header__nav-movies">
            <div className="header__movies">
              <button className="header__btn_movies">Фильмы</button>
              <button className="header__btn_saved-movies">
                Сохранённые фильмы
              </button>
            </div>
            <button className="header__btn_account">Аккаунт</button>
          </nav>
        ) : (
          <nav className="header__nav-auth">
            <button className="header__btn_signup">Регистрация</button>
            <button className="header__btn_signin">Войти</button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
