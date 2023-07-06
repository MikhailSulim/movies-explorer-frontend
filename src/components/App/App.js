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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from './../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {
  const ERR_MESSAGE = 'Что-то пошло не так! Попробуйте ещё раз.';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  // const [foundMovies, setFoundMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  // const [userInfo, setUserInfo] = useState(null);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [textMessageInfoTooltip, setTextMessageInfoTooltip] = useState('');

  const [textErrorSubmit, setTextErrorSubmit] = useState('');

  // авторизация
  const [isValidAuth, setIsValidAuth] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPathWithHeader = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ].includes(pathname);
  const isPathWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);

  // ----------------------- Авторизация ------------------------- //
  function cbRegister({ name, email, password }) {
    // регистрация
    setIsLoading(true);
    setTextErrorSubmit('');
    mainApi
      .register(name, email, password)
      .then((res) => {
        cbLogin({ email, password });
      })
      .catch((err) => {
        setTextErrorSubmit(ERR_MESSAGE);
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }

  function cbLogin({ email, password }) {
    // авторизация
    setIsLoading(true);
    setTextErrorSubmit('');
    mainApi
      .authorize(email, password)
      .then(() => {
        setIsLoggedIn(true);
        localStorage.setItem('isAuthorized', 'true');
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setTextErrorSubmit(ERR_MESSAGE);
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }

  function cbLogout() {
    // выход из системы
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
    // редактирование данных
    setIsLoading(true);
    mainApi
      .setUserInfo(name, email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setTextMessageInfoTooltip('Профиль успешно отредактирован!');
        setIsValidAuth(true);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.error(err);
        setIsValidAuth(false);
        setTextMessageInfoTooltip(ERR_MESSAGE);
        setIsInfoTooltipOpen(true);
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
          if (userData.email) {
            // авторизуем пользователя
            setIsLoggedIn(true);
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

  function handleClearTextErrorSubmit() {
    setTextErrorSubmit('');
  }

  function handleCloseInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  /////////////////////////////////
//  фильмы



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
                movies={initialMovies}
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
            element={
              <Login
                isLoggedIn={isLoggedIn}
                onLogin={cbLogin}
                errorText={textErrorSubmit}
                isLoading={isLoading}
                onClearError={handleClearTextErrorSubmit}
              />
            }
          />

          {/*отображается страница регистрации*/}
          <Route
            path="/signup"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                onRegister={cbRegister}
                errorText={textErrorSubmit}
                isLoading={isLoading}
                onClearError={handleClearTextErrorSubmit}
              />
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

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={handleCloseInfoTooltip}
          isValidAuth={isValidAuth}
          textMessage={textMessageInfoTooltip}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
