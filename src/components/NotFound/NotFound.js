import './NotFound.css';
import { NavLink, useNavigate } from 'react-router-dom';

function NotFound({ onNavigateBack }) {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <section className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <NavLink 
          // type="button"
          className="not-found__link"
          onClick={() => navigate(-1)}
        >
          Назад
        </NavLink>
      </section>
    </main>
  );
}

export default NotFound;
