import './FilterCheckbox.css';

function FilterCheckbox({ shortMoviesToggle, onFilter }) {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id="filter"
        onChange={onFilter}
        checked={shortMoviesToggle}
      />
      <label htmlFor="filter" className="checkbox__label">
        <span className="checkbox__ball"></span>
      </label>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
