import './NotFound.css';

function NotFound({ onNavigateBack}) {
  return (
    <main className="not-found">
      <section className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button type="button" className="not-found__link" onClick={onNavigateBack}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
