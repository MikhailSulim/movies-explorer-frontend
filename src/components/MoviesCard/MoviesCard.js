import './MoviesCard.css';
import { MOVIES_IMAGE_URL } from '../../utils/constants';

function MoviesCard({ movie, onSave, onDelete, isSavedMovies, isCardChoose }) {
  const handleClickSaveCard = () => {
    isSavedMovies ? onDelete(movie) : onSave(movie);
  };

  const movieChoiceClassname = `movie-card__choice-btn ${
    isSavedMovies
      ? 'movie-card__choice-btn_delete'
      : isCardChoose
      ? 'movie-card__choice-btn_checked'
      : 'movie-card__choice-btn_unchecked'
  }`;

  const length = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <span className="movie-card__length">{length}</span>
        </div>
        <button
          type="button"
          className={movieChoiceClassname}
          onClick={handleClickSaveCard}
        ></button>
      </div>
      <a
        className="movie-card__img-trailer-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie-card__img"
          alt={`Кадр из фильма ${movie.nameRU}`}
          src={
            isSavedMovies
              ? movie.image
              : `${MOVIES_IMAGE_URL}${movie.image.url}`
          }
        />
      </a>
    </li>
  );
}

export default MoviesCard;
