// адреса используемых серверов
export const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MOVIES_IMAGE_URL = 'https://api.nomoreparties.co';
export const MAIN_API_URL = 'https://api.sulim.yp-diploma.nomoredomains.rocks';

export const CARD_QUANTITY = {
  BIG_SCREEN: {
    width: 1024,
    initial: 12,
    add: 3,
  },
  MIDDLE_SCREEN: {
    width: 767,
    initial: 8,
    add: 2,
  },
  LITTLE_SCREEN: {
    width: 480,
    initial: 5,
    add: 2,
  },
};

export const MSG_NOT_FOUND = 'Ничего не найдено';
export const MSG_SERVER_ERR =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const MSG_ERROR_AUTH = 'Что-то пошло не так! Попробуйте ещё раз.';
