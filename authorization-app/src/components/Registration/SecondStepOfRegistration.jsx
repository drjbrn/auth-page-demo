import { useState } from "react";

function SecondStepOfRegistration({ handleSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const regexName = /^[a-zA-Z]{2,30}$/;
  const regexPhoneNumber = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  let disabled = (regexPhoneNumber.test(phoneNumber) && regexName.test(firstName) && regexName.test(lastName)) ? false : true;

  return (
    <form className='registration__form form' onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="registration__label form__label">
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="registration__input form__input"
          required
          onChange={handleChangeFirstName}
          value={firstName}
        />
        <span className="registration__span form__span">
          First Name
        </span>
      </label>
      <label htmlFor="lastName" className="registration__label form__label">
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="registration__input form__input"
          required
          onChange={handleChangeLastName}
          value={lastName}
        />
        <span className="registration__span form__span">
          Last Name
        </span>
      </label>
      <label htmlFor="number" className="registration__label form__label">
        <input
          id="number"
          name="number"
          type="text"
          className="registration__input form__input"
          required
          onChange={handleChangePhoneNumber}
          value={phoneNumber}
        />
        <span className="registration__span form__span">
          Number
        </span>
      </label>
      <button
        disabled={disabled}
        type='submit'
        className='registration__btn btn'>
        Confirm
      </button>
    </form>
  )
}

export default SecondStepOfRegistration;