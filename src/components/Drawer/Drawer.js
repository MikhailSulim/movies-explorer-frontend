import { Link } from 'react-router-dom';
import './Drawer.css';

function Drawer({onClose}) {



  return (
    <div className="drawer__overlay">
      <div className="drawer__body">
        <button type="button" className="drawer__close-btn" onClick={onClose}>
      
        </button>
        <div className="drawer__link-box">
          <Link to="/" className="drawer__link drawer__link_main">
            Главная
          </Link>
          <Link to="/movies" className="drawer__link drawer__link_movies drawer__link_current">
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="drawer__link drawer__link_saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="header__btn_account">
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
