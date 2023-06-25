import './MoviesCard.css';

function MoviesCard({ title, length, img, checked, isSaved }) {
  const movieChoiceClassname = `movie__choice ${
    checked ? 'movie__checked' : 'movie__unchecked'
  } ${isSaved ? 'movie__delete' : ''}`;
  return (
    <li className="movie__container">
      <div className="movie__header">
        <div className="movie__info">
          <h2 className="movie__title">{title}</h2>
          <span className="movie__length">{length}</span>
        </div>
        <div className={movieChoiceClassname}></div>
      </div>
      <img className="movie__img" alt="Кадр из фильма" src={img} />
    </li>
  );
}

export default MoviesCard;
