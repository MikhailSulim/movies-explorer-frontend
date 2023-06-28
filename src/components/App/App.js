import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPathWithHeader = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ].includes(pathname);
  const isPathWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);

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
    document.getElementById('about').scrollIntoView()
  }

  return (
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
        <Route path="/movies" element={<Movies isLoading={isLoading} />} />

        {/*отображается страница «Сохранённые фильмы»*/}
        <Route
          path="/saved-movies"
          element={<SavedMovies isLoading={isLoading} />}
        />

        {/*отображается страница с профилем пользователя*/}
        <Route path="/profile" element={<Profile />} />

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
  );
}

export default App;
