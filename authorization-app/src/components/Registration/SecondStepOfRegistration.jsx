import { useState } from "react";
import RegistrationAccepted from './RegistrationAccepted';

function SecondStepOfRegistration({ handleSubmit }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const regexPhoneNumber = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    console.log(phoneNumber)
  };

  let disabled = (regexPhoneNumber.test(phoneNumber)) ? false : true;

  return (
    <form className='registration__form form' onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="registration__label form__label">
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="registration__input form__input"
          required
          // onChange={validationEmail}
          // value={email}
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
          // onChange={validationEmail}
          // value={email}
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
          // value={email}
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