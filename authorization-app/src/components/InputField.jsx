function InputField({ id, label, type, name, value, required, onChange, showPasswordIcon }) {
  return (
    <label htmlFor={id} className='form__label'>
      <input
        id={id}
        name={name}
        type={type}
        className="form__input"
        required={required}
        onChange={onChange}
        value={value}
      />
      {showPasswordIcon}
      <span className="form__span">{label}</span>
    </label>
  );
}

export default InputField;