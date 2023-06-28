import './Input.css';

function Input({ name, label, error, isValid, type, ...props }) {
  return (
    <div className={`input input_type_${name}`}>
      <label className={`input__label input__label_type_${name}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`input__field input__field_type_${name} ${
          isValid ? 'input__field_valid_true' : 'input__field_valid_false'
        }`}
        id={name}
        name={name}
        type={type}
        required
        {...props}
      />
      <span className={`input__error input__error_type_${name}`}>{error}</span>
    </div>
  );
}

export default Input;
