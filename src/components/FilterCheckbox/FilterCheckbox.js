import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <input className="checkbox__input" type="checkbox" id="filter" />
      <label htmlFor="filter" className="checkbox__label">
        <span className="checkbox__ball"></span>
      </label>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  
  );
}

export default FilterCheckbox;
