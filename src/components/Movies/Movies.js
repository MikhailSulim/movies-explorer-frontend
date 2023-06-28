import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Movies({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <main className="movies-main">
          <SearchForm />
          <MoviesCardList moviesList={movies} />
          <button type="button" className="movies-list-btn">
            Ещё
          </button>
        </main>
      )}
    </>
  );
}

export default Movies;
