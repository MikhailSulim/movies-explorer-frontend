import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import { movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Movies({ isLoading, movies }) {
  return (
    <main className="movies-main">
      
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList moviesList={movies} isNoMoreMovies={false} />}
    </main>
  );
}

export default Movies;
