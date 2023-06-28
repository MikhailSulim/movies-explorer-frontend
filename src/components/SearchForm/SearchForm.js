import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__field">
          <input
            className="search__input"
            name='search'
            id='search'
            type="text"
            placeholder="Фильм"
            required
          />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
