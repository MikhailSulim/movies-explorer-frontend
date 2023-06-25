import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__field">
          <input className="search__input" type="text" placeholder="Фильм" />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
