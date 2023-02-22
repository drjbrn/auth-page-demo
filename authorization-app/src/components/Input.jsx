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

// const InputField = ({ type, id, name, value, onChange, spanText, div }) => {
//   return (
//     <label htmlFor={id} className='form__label'>
//       <input
//         type={type}
//         id={id}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className='form__input'
//         required
//       />
//       <div>
//         {div}
//       </div>
//       <span className='form__span'>
//         {spanText}
//       </span>
//     </label>
//   );
// };

// export default InputField;