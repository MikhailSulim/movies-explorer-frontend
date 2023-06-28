import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { saved_movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <main className="saved-movies-main">
          <SearchForm />
          <MoviesCardList moviesList={saved_movies} isSaved={true} />
          <div className="saved-movies-list-space"></div>
        </main>
      )}
    </>
  );
}

export default SavedMovies;
