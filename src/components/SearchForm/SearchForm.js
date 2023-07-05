import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidate from '../../hooks/useFormValidate';

function SearchForm({onFindMovies}) {
  const { values, errors, onChange, resetValidation } = useFormValidate();

function handleSubmit(e) {
  e.preventDefault();
  onFindMovies(values.search);
}


  return (
    <div className="search">
      <form className="search__form" name="search__form" onSubmit={handleSubmit}>
        <div className="search__field">
          <input
            className="search__input"
            name='search'
            id='search'
            type="text"
            placeholder="Фильм"
            required
            onChange={onChange}
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
