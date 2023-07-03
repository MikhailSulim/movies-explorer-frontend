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
import mainApi from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  // const [userInfo, setUserInfo] = useState(null);
  // const [isValidAuth, setIsValidAuth] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPathWithHeader = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ].includes(pathname);
  const isPathWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);



  // функции для авторизации на сайте
  function cbRegister({ name, email, password }) {
    // регистрация
    mainApi
      .register(name, email, password)
      .then(() => {
        // setIsLoggedIn(true);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cbLogin({ email, password }) {
    // авторизация
    mainApi
      .authorize(email, password)
      .then(() => {
        setIsLoggedIn(true);
        localStorage.setItem('isAuthorized', 'true');
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cbLogout() {
    mainApi
      .signout()
      .then(() => {
        localStorage.removeItem('isAuthorized');
        setIsLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .setUserInfo(name, email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const checkToken = React.useCallback(() => {
    // если пользователь авторизован,
    // эта функция проверит, есть ли данные в req.user._id на сервере
    const isAuthorized = localStorage.getItem('isAuthorized');

    if (isAuthorized) {
      // проверим, есть ли данные в req.user._id
      mainApi
        .getUserData()
        .then((userData) => {
          // setUserInfo(userData);
          console.log('userdata', userData);
          if (userData.email) {
            // авторизуем пользователя
            setIsLoggedIn(true);
            // setUserInfo(userData);
            // console.log(userInfo);
            // navigate('/', { replace: true });
          }
        })
        .catch((err) => {
          console.error(err); // выведем ошибку в консоль
        })
        .finally(() => {
          // setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    checkToken();
    isLoggedIn &&
      Promise.all([mainApi.getUserData(), moviesApi.getMovies()])
        .then(([userData, movies]) => {
          // console.log(userData);
          setCurrentUser(userData);
          setMovies(movies);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [checkToken, isLoggedIn]);

  ///////////////////////////////////

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
            element={
              <ProtectedRouteElement
                component={Profile}
                isLoggedIn={isLoggedIn}
                onLogout={cbLogout}
                onUpdateUser={handleUpdateUser}
              />
            }
          />

          {/*отображается страница авторизации*/}
          <Route
            path="/signin"
            element={<Login isLoggedIn={isLoggedIn} onLogin={cbLogin} />}
          />

          {/*отображается страница регистрации*/}
          <Route
            path="/signup"
            element={
              <Register isLoggedIn={isLoggedIn} onRegister={cbRegister} />
            }
          />

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
