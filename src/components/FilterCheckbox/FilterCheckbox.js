import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="checkbox__container">
      <input className="checkbox" type="checkbox" id="filter" />
      <label for="filter" className="checkbox__label">
        <div className="checkbox__ball"></div>
      </label>
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
