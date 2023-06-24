import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  // const closeMobileMenu = () => {
  //   setIsMobileMenuShow(false);
  // }

  // const openMobileMenu = () => {
  //   setIsMobileMenuShow(true);
  // }

  return (
    <div className="app">
      <Routes>
        {/*отображается страница «О проекте»*/}
        <Route path="/" element={<Main />} />

        {/*отображается страница «Фильмы»*/}
        <Route path="/movies" element={<Movies />} />

        {/*отображается страница «Сохранённые фильмы»*/}
        <Route path="/saved-movies" element={<SavedMovies />} />

        {/*отображается страница с профилем пользователя*/}
        <Route path="/profile" element={<Profile isLogged={isLoggedIn} />} />

        {/*отображается страница авторизации*/}
        <Route path="/signin" element={<Login />} />

        {/*отображается страница регистрации*/}
        <Route path="/signup" element={<Register />} />

        <Route path="/1" element={<Preloader/>}/>
        <Route path="*" element={<NotFound />} />


        {/*Защищать маршруты авторизацией пока не требуется. Достаточно наладить
        работу всех ссылок: нажатие на логотип ведёт на страницу «О проекте»;
        нажатие на «Фильмы» — на роут /movies; нажатие на «Сохранённые фильмы» —
        на роут /saved-movies; нажатие на «Регистрация», «Авторизация»,
        «Аккаунт» — на соответствующие роуты /signup, /signin и /profile.*/}
      </Routes>
    </div>
  );
}

export default App;
