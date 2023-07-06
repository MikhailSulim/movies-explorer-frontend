// Api для работы с данными пользователя
import { MAIN_API_URL } from './constants.js';

class MainApi {
  constructor({ serverUrl, headers, credentials }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  _checkResponse(res) {
    // функция проверки статуса ответа
    return res.ok
      ? res.json()
      : Promise.reject(`${res.status} ${res.statusText}`);
  }

  _request(endpointUrl, options) {
    // функция отправки запроса с проверкой ответа
    return fetch(`${this._serverUrl}${endpointUrl}`, options).then(
      this._checkResponse
    );
  }

  register(name, email, password) {
    // функция регистрации нового пользователя
    return this._request('/signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  }

  authorize(email, password) {
    // функция авторизации пользователя
    return this._request('/signin', {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ email, password }),
    });
  }

  signout() {
    // функция выхода из системы для пользователя
    return this._request('/signout', {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  getUserData() {
    // функция получения данных о пользователе
    return this._request('/users/me', {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  setUserInfo(name, email) {
    // функция замены данных пользователя на сервере
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ name, email }),
    });
  }

  saveMovie(movie) {
    // функция сохранения выбранного фильма
    return this._request('/movies', {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    });
  }

  getSavedMovies() {
    // функция получения сохранённых фильмов
    return this._request('/movies', {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  deleteMovie(movieId) {
    // функция удаления фильма из сохранённых
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    });
  }
}

const mainApi = new MainApi({
  serverUrl: MAIN_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default mainApi;
