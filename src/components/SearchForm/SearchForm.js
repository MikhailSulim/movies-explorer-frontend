import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__field">
        <input className="search__input" type="text" placeholder="Фильм" />
        <button className="search__button">Найти</button>
      </div>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
