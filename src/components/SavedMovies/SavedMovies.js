import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <Header isLogged={true} />
      <SearchForm />
      <MoviesCardList />
      <div className="saved-movies-list__space" ></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
