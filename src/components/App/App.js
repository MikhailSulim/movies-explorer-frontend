import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from './../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPathWithHeader = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ].includes(pathname);
  const isPathWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);

  React.useEffect(() => {
    moviesApi.getMovies().then((res) => {
      console.log(res);
      setMovies(res);
    });
  }, []);

  function handleNavigateToSignin() {
    navigate('/signin');
  }

  function handleNavigateToSignup() {
    navigate('/signup');
  }

  function handleNavigateToMain() {
    navigate('/');
  }

  function handleNavigateToAbout() {
    // navigate("#about");
    document.getElementById('about').scrollIntoView();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {isPathWithHeader && (
          <Header
            isLogged={isLoggedIn}
            onNavigateToSignin={handleNavigateToSignin}
            onNavigateToSignup={handleNavigateToSignup}
          />
        )}

        <Routes>
          {/*отображается страница «О проекте»*/}
          <Route
            path="/"
            element={<Main onNavigateToAbout={handleNavigateToAbout} />}
          />

          {/*отображается страница «Фильмы»*/}

          {/* <Route path="/movies" element={<Movies isLoading={isLoading} />} /> */}
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                component={Movies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                movies={movies}
              />
            }
          />

          {/*отображается страница «Сохранённые фильмы»*/}
          <Route
            path="/saved-movies"
            // element={<SavedMovies isLoading={isLoading} />}
            element={
              <ProtectedRouteElement
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
              />
            }
          />

          {/*отображается страница с профилем пользователя*/}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route
            path="/profile"
            element={<ProtectedRouteElement component={Profile} />}
          />

          {/*отображается страница авторизации*/}
          <Route path="/signin" element={<Login />} />

          {/*отображается страница регистрации*/}
          <Route path="/signup" element={<Register />} />

          <Route
            path="*"
            element={<NotFound onNavigateToMain={handleNavigateToMain} />}
          />

          {/*Защищать маршруты авторизацией пока не требуется. Достаточно наладить
        работу всех ссылок: нажатие на логотип ведёт на страницу «О проекте»;
        нажатие на «Фильмы» — на роут /movies; нажатие на «Сохранённые фильмы» —
        на роут /saved-movies; нажатие на «Регистрация», «Авторизация»,
        «Аккаунт» — на соответствующие роуты /signup, /signin и /profile.*/}
        </Routes>

        {isPathWithFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
