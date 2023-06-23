import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import Logo from '../Logo/Logo';

function Header({ isLogged }) {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        {isLogged ? (
          <nav className="header__nav-movies">
            <Navigation />
            <Link to="/profile" className="header__btn_account">Аккаунт</Link>
          </nav>
        ) : (
          <nav className="header__nav-auth">
            <Link to="/signup" >
              <button className="header__btn_signup">Регистрация</button>
            </Link>
            <Link to="/signin">
              <button className="header__btn_signin">Войти</button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
