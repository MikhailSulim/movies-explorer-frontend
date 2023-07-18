import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive
            ? 'navigation__link navigation__link_active'
            : 'navigation__link'
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          isActive
            ? 'navigation__link navigation__link_active'
            : 'navigation__link'
        }
      >
        Сохранённые фильмы
      </NavLink>
    </div>
  );
}

export default Navigation;
