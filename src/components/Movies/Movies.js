import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Drawer from '../Drawer/Drawer';

function Movies() {
  return (
    <>
      {/* <Drawer /> */}
      <Header isLogged={true} />
      <SearchForm />
      <MoviesCardList />
      <button className="movies-list__btn">Ещё</button>
      <Footer />
    </>
  );
}

export default Movies;
