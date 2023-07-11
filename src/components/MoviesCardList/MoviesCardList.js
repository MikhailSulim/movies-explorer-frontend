import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { CARD_QUANTITY } from '../../utils/constants';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useEffect, useState } from 'react';

function MoviesCardList({
  moviesList,
  visibleBtnMore,
  searchResultMessage,
  onSave,
  onDelete,
  isSavedMovies,
  savedMovies,
}) {
  const windowWidth = useWindowWidth();
  const [displayListCardsQuantity, setDisplayListCardsQuantity] =
    useState(undefined);
  const [displayListCards, setDisplayListCards] = useState([]);
  const [isVisibleBtnMore, setIsVisibleBtnMore] = useState(visibleBtnMore);

  const handleBtnMoreClick = () => {
    // функция добавления порции карточек в лист
    if (windowWidth >= CARD_QUANTITY.BIG_SCREEN.width) {
      setDisplayListCardsQuantity(
        displayListCardsQuantity + CARD_QUANTITY.BIG_SCREEN.add
      );
    } else if (windowWidth >= CARD_QUANTITY.MIDDLE_SCREEN.width) {
      setDisplayListCardsQuantity(
        displayListCardsQuantity + CARD_QUANTITY.MIDDLE_SCREEN.add
      );
    } else {
      setDisplayListCardsQuantity(
        displayListCardsQuantity + CARD_QUANTITY.LITTLE_SCREEN.add
      );
    }
  };

  useEffect(() => {
    if (windowWidth >= CARD_QUANTITY.BIG_SCREEN.width) {
      setDisplayListCardsQuantity(CARD_QUANTITY.BIG_SCREEN.initial);
    } else if (windowWidth >= CARD_QUANTITY.MIDDLE_SCREEN.width) {
      setDisplayListCardsQuantity(CARD_QUANTITY.MIDDLE_SCREEN.initial);
    } else {
      setDisplayListCardsQuantity(CARD_QUANTITY.LITTLE_SCREEN.initial);
    }
  }, [windowWidth, moviesList]);

  useEffect(() => {
    if (isSavedMovies) {
      setDisplayListCards(moviesList);
      setIsVisibleBtnMore(false);
    } else {
      setDisplayListCards(moviesList.slice(0, displayListCardsQuantity));
      moviesList.length <= displayListCardsQuantity
        ? setIsVisibleBtnMore(false)
        : setIsVisibleBtnMore(true);
    }
  }, [displayListCardsQuantity, isSavedMovies, moviesList]);

  return (
    <section className="movies-list">
      {displayListCards.length === 0 && (
        <span className="movies-list__notfound">{searchResultMessage}</span>
      )}
      <ul className="movies-list__container">
        {displayListCards.map((movie) => (
          <MoviesCard
            movie={movie}
            onSave={onSave}
            onDelete={onDelete}
            key={isSavedMovies ? movie.movieId : movie.id}
            isSavedMovies={isSavedMovies}
            isCardChoose={
              isSavedMovies
                ? false
                : savedMovies.find(
                    (savedMovie) => savedMovie.movieId === movie.id
                  )
            }
          />
        ))}
      </ul>
      <div className="movies-list__btn-field">
        <button
          type="button"
          className={`movies-list__btn-more ${
            isVisibleBtnMore && displayListCards.length
              ? ''
              : 'movies-list__btn-more_visible_none'
          }`}
          onClick={handleBtnMoreClick}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
