// import '../styles/form.scss';

const Input = ({ type, id, name, value, onChange, className }) => {
  const inputClass = `form__input ${className}`

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={inputClass}
      required
    />
  );
};

export default Input;