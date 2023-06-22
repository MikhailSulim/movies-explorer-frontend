import "./MoviesCardList.css";
import { movies } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {movies.map((movie) => (
          <MoviesCard
            title={movie.nameRU}
            length={`${Math.trunc(movie.duration / 60)}ч ${
              movie.duration % 60
            }м`}
            img={`${process.env.PUBLIC_URL}/${movie.image}`}
            checked={true}
          />
        ))}
      </div>
      
    </section>
  );
}

export default MoviesCardList;
