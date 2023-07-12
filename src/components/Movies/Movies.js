import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

import { MSG_NOT_FOUND, MSG_SERVER_ERR } from '../../utils/constants';

function Movies({
  onSave,
  onDelete,
  savedMovies,
  setIsInfoTooltipOpen,
  setTextMessageInfoTooltip,
  setIsValidAuth,
}) {
  const [allMovies, setAllMovies] = useState([]); // все фильмы из базы
  const [shortMoviesToggle, setShortMoviesToggle] = useState(false); // положение переключателя короткометражек

  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchResultMessage, setSearchResultMessage] = useState(''); // текст сообщения по результатам поиска

  const [isLoading, setIsLoading] = useState(false); // стейт активации прелоадера
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

  const handleSetFilteredMovies = (movies, userQuery, shortMoviesCheckbox) => {
    const moviesList = filterMovies(movies, userQuery, false);
    moviesList.length
      ? setSearchResultMessage('')
      : setSearchResultMessage(MSG_NOT_FOUND);

    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem('movies', JSON.stringify(moviesList));
  };

  const handleSearchSubmit = (inputValue) => {
    if (inputValue.length === 0) {
      setTextMessageInfoTooltip('Нужно ввести ключевое слово');
      setIsInfoTooltipOpen(true);
      setIsValidAuth(false);
      return;
    }

    localStorage.setItem('movieSearch', inputValue);
    setMoviesRequest(inputValue);
    localStorage.setItem('shortMovies', shortMoviesToggle);

    if (allMovies.length) {
      handleSetFilteredMovies(allMovies, inputValue, shortMoviesToggle);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setAllMovies(movies);
          handleSetFilteredMovies(movies, inputValue, shortMoviesToggle);
        })
        .catch((error) => {
          setSearchResultMessage(MSG_SERVER_ERR);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const handleShortFilms = () => {
    setShortMoviesToggle(!shortMoviesToggle);
    if (!shortMoviesToggle) {
      setShortMoviesToggle(true);
      localStorage.setItem('shortMovies', true);
      setFilteredMovies(filterShortMovies(initialMovies));
      filterShortMovies(initialMovies).length === 0
        ? setSearchResultMessage(MSG_NOT_FOUND)
        : setSearchResultMessage('');
    } else {
      setShortMoviesToggle(false);
      localStorage.setItem('shortMovies', true);
      initialMovies.length === 0
        ? setSearchResultMessage(MSG_NOT_FOUND)
        : setSearchResultMessage('');
      setFilteredMovies(initialMovies);
    }
  };
  // const handleShortFilms = () => {
  //   setShortMoviesToggle(!shortMoviesToggle);
  //   if (!shortMoviesToggle) {
  //     setFilteredMovies(filterShortMovies(initialMovies));
  //     if (filteredMovies.length === 0) {
  //       // setNotFound(true);
  //       setSearchResultMessage(MSG_NOT_FOUND);
  //     }
  //   } else {
  //     setFilteredMovies(initialMovies);
  //   }
  //   localStorage.setItem('shortMovies', !shortMoviesToggle);
  // };

  useEffect(() => {
    localStorage.getItem('shortMovies') === 'true'
      ? setShortMoviesToggle(true)
      : setShortMoviesToggle(false);
    setMoviesRequest(localStorage.getItem('movieSearch'));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);

      localStorage.getItem('shortMovies') === 'true'
        ? setFilteredMovies(filterShortMovies(movies))
        : setFilteredMovies(movies);
    }
  }, []);

  return (
    <main className="movies-main">
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
          moviesList={filteredMovies}
          visibleBtnMore={true}
          searchResultMessage={searchResultMessage}
          onSave={onSave}
          onDelete={onDelete}
          isSavedMovies={false}
          savedMovies={savedMovies}
        />
      )}
    </main>
  );
}

export default Movies;
