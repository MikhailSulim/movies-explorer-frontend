import { NavLink, Link } from 'react-router-dom';
import './Drawer.css';

function Drawer({ onClose }) {
  return (
    <div className="drawer__overlay">
      <div className="drawer__body">
        <button
          type="button"
          className="drawer__close-btn"
          onClick={onClose}
        ></button>
        <div className="drawer__link-box">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'drawer__link drawer__link-main drawer__link-current'
                : 'drawer__link drawer__link-main'
            }
            onClick={onClose}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? 'drawer__link drawer__link-movies drawer__link-current'
                : 'drawer__link drawer__link-movies'
            }
            onClick={onClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? 'drawer__link drawer__link-saved-movies drawer__link-current'
                : 'drawer__link drawer__link-saved-movies'
            }
            onClick={onClose}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="header__btn-account" onClick={onClose}>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
