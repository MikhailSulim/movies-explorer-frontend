import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function App() {
  return (
    <div className="app">
      <Routes>
        {/*отображается страница «О проекте»*/}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Promo />
              <AboutProject/>
              <Techs/>
            </>
          }
        />

        {/*отображается страница «Фильмы»*/}
        <Route path="/movies" element={<></>} />

        {/*отображается страница «Сохранённые фильмы»*/}
        <Route path="/saved-movies" element={<></>} />

        {/*отображается страница с профилем пользователя*/}
        <Route path="/profile" element={<></>} />

        {/*отображается страница авторизации*/}
        <Route path="/signin" />

        {/*отображается страница регистрации*/}
        <Route path="/signup" />

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
