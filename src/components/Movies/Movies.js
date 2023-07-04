import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Movies({ isLoading, movies, onFindMovies }) {
  return (
    <main className="movies-main">
      
      <SearchForm onFindMovies={onFindMovies} />
      {isLoading ? <Preloader /> : <MoviesCardList moviesList={movies} isNoMoreMovies={false} />}
    </main>
  );
}

export default Movies;
