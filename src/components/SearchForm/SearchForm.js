import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';

function SearchForm({
  onFindMovies,
  shortMoviesToggle,
  onFilter,
  requestValue,
}) {
  const [userRequest, setUserRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFindMovies(userRequest);
  };

  const onChange = (e) => {
    setUserRequest(e.target.value);
  };

  useEffect(() => {
    requestValue && setUserRequest(requestValue);
  }, [requestValue]);

  return (
    <div className="search">
      <form
        className="search__form"
        name="search__form"
        onSubmit={handleSubmit}
      >
        <div className="search__field">
          <input
            className="search__input"
            name="search"
            id="search"
            type="text"
            placeholder="Фильм"
            required
            autoComplete="off"
            onChange={onChange}
            value={userRequest || ''}
          />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>
        <FilterCheckbox
          onFilter={onFilter}
          shortMoviesToggle={shortMoviesToggle}
        />
      </form>
    </div>
  );
}

export default SearchForm;
