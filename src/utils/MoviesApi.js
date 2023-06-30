// Api для получения информации из общей базы данных фильмов
import MOVIES_BASE_URL from './constants';

class MoviesApi {
  constructor({ serverUrl, headers, credentials }) {
    this.serverUrl = serverUrl;
    this.headers = headers;
    this.credentials = credentials;
  }

  _checkResponse(res) {
    // функция проверки статуса ответа
    return res.ok
      ? res.json()
      : Promise.reject(`${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    // функция отправки запроса с проверкой ответа
    return fetch(url, options).then(this._checkResponse);
  }

  // получение данных о фильмах
  getMovies() {
    return this._request(this.serverUrl, {
      method: 'GET',
      headers: this.headers,
    });
  }
}

const moviesApi = new MoviesApi({
  serverUrl: MOVIES_BASE_URL,
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
