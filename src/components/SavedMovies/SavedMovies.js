import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { MSG_NOT_FOUND } from '../../utils/constants';

function SavedMovies({ savedMovies, onSave, onDelete, isLoading }) {
  const [shortMoviesToggle, setShortMoviesToggle] = useState(false); // положение переключателя короткометражек
  const [showedMovies, setShowedMovies] = useState(savedMovies);
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);
  const [searchResultMessage, setSearchResultMessage] = useState(''); // текст сообщения по результатам поиска

  const [moviesRequest, setMoviesRequest] = useState('');

  function filterShortMovies(movies) {
    // функция для отфильтровки короткометражек
    return movies.filter((movie) => movie.duration <= 40);
  }

  function filterMovies(movies, userQuery, shortMoviesCheckbox) {
    // функция для отфильтровки по запросу пользователя
    const moviesByUserQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase();
      const movieEn = String(movie.nameEN).toLowerCase();
      const userMovie = userQuery.toLowerCase();
      return (
        movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1
      );
    });

    return shortMoviesCheckbox
      ? filterShortMovies(moviesByUserQuery)
      : moviesByUserQuery;
  }

  const handleSearchSubmit = (inputValue) => {
    localStorage.setItem('savedMovieSearch', inputValue);
    localStorage.setItem('shortSavedMovies', shortMoviesToggle);
    setMoviesRequest(inputValue);
    const moviesList = filterMovies(savedMovies, inputValue, shortMoviesToggle);
    if (moviesList.length === 0) {
      setSearchResultMessage(MSG_NOT_FOUND);
      setFilteredMovies([]);
      setShowedMovies([]);
    } else {
      setSearchResultMessage('');
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  };

  const handleShortFilms = () => {
    setShortMoviesToggle(!shortMoviesToggle);
    if (!shortMoviesToggle) {
      setShortMoviesToggle(true);
      localStorage.setItem('shortSavedMovies', true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0
        ? setSearchResultMessage(MSG_NOT_FOUND)
        : setSearchResultMessage('');
    } else {
      setShortMoviesToggle(false);
      localStorage.setItem('shortSavedMovies', false);
      filteredMovies.length === 0
        ? setSearchResultMessage(MSG_NOT_FOUND)
        : setSearchResultMessage('');
      setShowedMovies(filteredMovies);
    }
  };

  useEffect(() => {
    setMoviesRequest(localStorage.getItem('savedMovieSearch'));
    
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setShortMoviesToggle(true);
    } else {
      setShortMoviesToggle(false);
    }
      const moviesList = filterMovies(
        savedMovies,
        moviesRequest,
        shortMoviesToggle
      );
      setShowedMovies(moviesList);
  }, [savedMovies, shortMoviesToggle]);


  useEffect(() => {
    setFilteredMovies(savedMovies);
    savedMovies.length !== 0
      ? setSearchResultMessage('')
      : setSearchResultMessage(MSG_NOT_FOUND);
  }, [savedMovies]);

  return (
    <main className="saved-movies-main">
      <SearchForm
        onFindMovies={handleSearchSubmit}
        shortMoviesToggle={shortMoviesToggle}
        onFilter={handleShortFilms}
        requestValue={moviesRequest}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          moviesList={showedMovies}
          isSaved={true}
          isSavedMovies={true}
          onSave={onSave}
          onDelete={onDelete}
          searchResultMessage={searchResultMessage}
          savedMovies={savedMovies}
          visibleBtnMore={false}
        />
      )}
    </main>
  );
}

export default SavedMovies;
