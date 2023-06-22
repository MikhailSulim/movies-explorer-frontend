import "./Movies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header isLogged={true} />
      <SearchForm />
      <MoviesCardList />
      <button className="movies-list__btn">Ещё</button>
      <Footer/>
    </>
  );
}

export default Movies;
