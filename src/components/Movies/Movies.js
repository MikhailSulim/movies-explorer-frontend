import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Movies({ isLogged, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header isLogged={isLogged} />
          <SearchForm />
          <MoviesCardList moviesList={movies} />
          <button type="button" className="movies-list-btn">
            Ещё
          </button>
          <Footer />
        </>
      )}
    </>
  );
}

export default Movies;
