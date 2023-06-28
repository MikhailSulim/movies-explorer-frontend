import './MoviesCard.css';

function MoviesCard({ title, length, img, checked, isSaved }) {
  const movieChoiceClassname = `movie-card__choice-btn ${
    checked ? 'movie-card__choice-btn_checked' : 'movie-card__choice-btn_unchecked'
  } ${isSaved ? 'movie-card__choice-btn_delete' : ''}`;
  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{title}</h2>
          <span className="movie-card__length">{length}</span>
        </div>
        <button type='button' className={movieChoiceClassname}></button>
      </div>
      <img className="movie-card__img" alt="Кадр из фильма" src={img} />
    </li>
  );
}

export default MoviesCard;
