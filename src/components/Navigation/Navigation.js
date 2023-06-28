import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/movies" className="navigation__link navigation__link_movies">
        Фильмы
      </Link>
      <Link
        to="/saved-movies"
        className="navigation__link navigation__link_saved-movies"
      >
        Сохранённые фильмы
      </Link>
    </div>
  );
}

export default Navigation;
