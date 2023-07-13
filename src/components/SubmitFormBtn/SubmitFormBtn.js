import './SubmitFormBtn.css';

function SubmitFormBtn({ btnText, isEnable }) {
  return (
    <button
      type="submit"
      className={`submit-form-btn ${
        isEnable ? '' : 'submit-form-btn_type_disable'
      }`}
    >
      {btnText}
    </button>
  );
}

export default SubmitFormBtn;
