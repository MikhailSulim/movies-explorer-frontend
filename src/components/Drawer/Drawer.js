import { Link, useLocation } from 'react-router-dom';
import './Drawer.css';

function Drawer({ onClose }) {
  const { pathname } = useLocation();

  return (
    <div className="drawer__overlay">
      <div className="drawer__body">
        <button
          type="button"
          className="drawer__close-btn"
          onClick={onClose}
        ></button>
        <div className="drawer__link-box">
          <Link
            to="/"
            className={`drawer__link drawer__link-main ${
              pathname === '/' ? 'drawer__link-current' : ''
            }`}
            onClick={onClose}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={`drawer__link drawer__link-movies ${
              pathname === '/movies' ? 'drawer__link-current' : ''
            }`}
            onClick={onClose}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`drawer__link drawer__link-saved-movies ${
              pathname === '/saved-movies' ? 'drawer__link-current' : ''
            }`}
            onClick={onClose}
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="header__btn-account" onClick={onClose}>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
