import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({moviesList, isSaved}) {
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
            img={`${process.env.PUBLIC_URL}/${movie.image}`}
            checked={true}
            isSaved={isSaved}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
