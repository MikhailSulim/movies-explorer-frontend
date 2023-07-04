import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_IMAGE_URL } from '../../utils/constants';

function MoviesCardList({ moviesList, isSaved, isNoMoreMovies }) {
  return (
    <section className="movies-list">
      {moviesList.length === 0 && (
        <span className="movies-list__notfound">
          К сожалению ничего не найдено.
        </span>
      )}
      <ul className="movies-list__container">
        {moviesList.map((movie) => (
          <MoviesCard
            title={movie.nameRU}
            length={`${Math.trunc(movie.duration / 60)}ч ${
              movie.duration % 60
            }м`}
            img={`${MOVIES_IMAGE_URL}${movie.image.url}`}
            checked={false}
            isSaved={isSaved}
            key={movie.id}
          />
        ))}
      </ul>
      <div className="movies-list__btn-field">
        <button
          type="button"
          className={`movies-list__btn-more ${
            isNoMoreMovies ? 'movies-list__btn-more_visible_none' : ''
          }`}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
