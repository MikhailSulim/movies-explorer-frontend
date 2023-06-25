import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { saved_movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isLogged, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header isLogged={isLogged} />
          <SearchForm />
          <MoviesCardList moviesList={saved_movies} isSaved={true} />
          <div className="saved-movies-list__space"></div>
          <Footer />
        </>
      )}
    </>
  );
}

export default SavedMovies;
