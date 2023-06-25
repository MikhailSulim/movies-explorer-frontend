import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__field">
          <input className="search__input" type="text" placeholder="Фильм" />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
