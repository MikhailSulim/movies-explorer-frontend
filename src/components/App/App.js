import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
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
import mainApi from '../../utils/MainApi';
import { MSG_ERROR_AUTH } from '../../utils/constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

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


  const checkToken = () => {
    const isAuthorized = localStorage.getItem('isAuthorized');

    if (isAuthorized) {
      Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setCurrentUser(userData);
          setIsLoggedIn(true);
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  const cbRegister = ({ name, email, password }) => {
    // регистрация
    setIsLoading(true);
    setTextErrorSubmit('');
    mainApi
      .register(name, email, password)
      .then((res) => {
        cbLogin({ email, password });
      })
      .catch((err) => {
        setTextErrorSubmit(MSG_ERROR_AUTH);
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const cbLogin = ({ email, password }) => {
    // авторизация
    setIsLoading(true);
    setTextErrorSubmit('');
    mainApi
      .authorize(email, password)
      .then(() => {
        setIsLoggedIn(true);
        localStorage.setItem('isAuthorized', 'true');
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setTextErrorSubmit(MSG_ERROR_AUTH);
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const cbLogout = () => {
    // выход из системы
    mainApi
      .signout()
      .then(() => {
        localStorage.clear();
        setCurrentUser({});
        setSavedMovies([]);
        setIsLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateUser = ({ name, email }) => {
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
        setTextMessageInfoTooltip(MSG_ERROR_AUTH);
        setIsInfoTooltipOpen(true);
      });
  };

  const handleSaveMovie = (movie) => {
    // функция добавления или исключения фильма из списка сохраненных

    const handledMovie = savedMovies.find((item) => {
      return item.movieId === movie.id;
    });
    const isLiked = Boolean(handledMovie);

    if (isLiked) {
      handleDeleteMovie(handledMovie);
    } else {
      mainApi
        .saveMovie(movie)
        .then((newSavedMovie) => {
          setSavedMovies([...savedMovies, newSavedMovie]);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleDeleteMovie = (movie) => {
    // функция удаления фильма из списка сохранённых
    setIsLoading(true);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(
          (item) => item._id !== movie._id
        );
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        setSavedMovies(updatedSavedMovies);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleNavigateToSignin = () => {
    navigate('/signin');
  };

  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleNavigateToAbout = () => {
    document.getElementById('about').scrollIntoView();
  };

  const handleClearTextErrorSubmit = () => {
    setTextErrorSubmit('');
  };

  const handleCloseInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
  };

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
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                component={Movies}
                isLoggedIn={isLoggedIn}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
                setIsInfoTooltipOpen={setIsInfoTooltipOpen}
                setTextMessageInfoTooltip={setTextMessageInfoTooltip}
                setIsValidAuth={setIsValidAuth}
                // isLoading={isLoading}
              />
            }
          />

          {/*отображается страница «Сохранённые фильмы»*/}
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                savedMovies={savedMovies}
                // isLoading={isLoading}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                setIsInfoTooltipOpen={setIsInfoTooltipOpen}
                setTextMessageInfoTooltip={setTextMessageInfoTooltip}
                setIsValidAuth={setIsValidAuth}
              />
            }
          />

          {/*отображается страница с профилем пользователя*/}
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
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  // isLoggedIn={isLoggedIn}
                  onLogin={cbLogin}
                  errorText={textErrorSubmit}
                  isLoading={isLoading}
                  onClearError={handleClearTextErrorSubmit}
                />
              )
            }
          />

          {/*отображается страница регистрации*/}
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  // isLoggedIn={isLoggedIn}
                  onRegister={cbRegister}
                  errorText={textErrorSubmit}
                  isLoading={isLoading}
                  onClearError={handleClearTextErrorSubmit}
                />
              )
            }
          />

          <Route
            path="*"
            element={
              <NotFound
                isLoggedIn={isLoggedIn}
                onNavigateBack={handleNavigateBack}
              />
            }
          />
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
