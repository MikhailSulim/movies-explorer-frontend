import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
// import { saved_movies } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isLoading }) {
  return (
    <>
      <main className="saved-movies-main">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            // moviesList={saved_movies}
            isSaved={true}
            isNoMoreMovies={true}
          />
        )}
      </main>
    </>
  );
}

export default SavedMovies;
