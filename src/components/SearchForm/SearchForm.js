import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidate from '../../hooks/useFormValidate';

function SearchForm({}) {
  const { values, errors, onChange, resetValidation } = useFormValidate();




  return (
    <div className="search">
      <form className="search__form" name="search__form" >
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
