import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <NavLink
        to="/movies"
        className="navigation__link"
        style={({ isActive }) => ({ fontWeight: isActive ? '500' : '400' })}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className="navigation__link "
        style={({ isActive }) => ({ fontWeight: isActive ? '500' : '400' })}
      >
        Сохранённые фильмы
      </NavLink>
    </div>
  );
}

export default Navigation;
