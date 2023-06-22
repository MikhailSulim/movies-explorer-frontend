import './Input.css';

function Input({ name, label, error, isValid, type, ...props }) {
  return (
    <div className={`input__container input__container_${name}`}>
      <label className={`input__label input__label_${name}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`input__field input__field_${name} ${
          isValid ? 'input__field_valid' : 'input__field_error'
        }`}
        id={name}
        name={name}
        type={type}
        required
        {...props}
      />
      <span className={`input__error input__error_${name}`}>{error}</span>
    </div>
  );
}

export default Input;
