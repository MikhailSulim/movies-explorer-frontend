import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import Drawer from '../Drawer/Drawer';
import Logo from '../Logo/Logo';

function Header({ isLogged }) {
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
            <div className="header__menu_full">
              <Navigation />
              <Link to="/profile" className="header__btn_account">
                Аккаунт
              </Link>
            </div>
            <button
              type="button"
              className="header__menu_mobile"
              onClick={openMobileMenu}
            ></button>
          </nav>
        ) : (
          <nav className="header__nav-auth">
            <Link to="/signup">
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
