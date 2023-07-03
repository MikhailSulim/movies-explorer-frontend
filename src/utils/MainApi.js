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
    console.log(name);
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
