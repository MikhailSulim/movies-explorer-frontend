import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="app">
      <Routes>
        {/*отображается страница «О проекте»*/}
        <Route path="/" element={<Main isLogged={isLoggedIn} />} />

        {/*отображается страница «Фильмы»*/}
        <Route path="/movies" element={<Movies isLogged={isLoggedIn} isLoading={isLoading}/>} />

        {/*отображается страница «Сохранённые фильмы»*/}
        <Route path="/saved-movies" element={<SavedMovies isLogged={isLoggedIn} isLoading={isLoading}/>} />

        {/*отображается страница с профилем пользователя*/}
        <Route path="/profile" element={<Profile isLogged={isLoggedIn} />} />

        {/*отображается страница авторизации*/}
        <Route path="/signin" element={<Login />} />

        {/*отображается страница регистрации*/}
        <Route path="/signup" element={<Register />} />

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
