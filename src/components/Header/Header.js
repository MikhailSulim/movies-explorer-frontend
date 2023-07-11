import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import Drawer from '../Drawer/Drawer';
import Logo from '../Logo/Logo';

function Header({ isLogged, onNavigateToSignin, onNavigateToSignup }) {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuShow(false);
  };

  const openMobileMenu = () => {
    setIsMobileMenuShow(true);
  };

  return (
    <header className="header">
      {isMobileMenuShow && <Drawer onClose={closeMobileMenu} />}
      <div className="header__content">
        <Logo />
        {isLogged ? (
          <nav className="header__nav-movies">
            <div className="header__menu-full">
              <Navigation />
              <Link to="/profile" className="header__btn-account">
                Аккаунт
              </Link>
            </div>
            <button
              type="button"
              className="header__menu-mobile"
              onClick={openMobileMenu}
            ></button>
          </nav>
        ) : (
          <nav className="header__nav-auth">
            <button
              type="button"
              className="header__btn-signup"
              onClick={onNavigateToSignup}
            >
              Регистрация
            </button>

            <button
              type="button"
              className="header__btn-signin"
              onClick={onNavigateToSignin}
            >
              Войти
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
