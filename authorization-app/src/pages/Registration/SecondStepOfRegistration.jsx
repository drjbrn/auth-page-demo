import { useState, useEffect } from "react";
import InputField from "../../components/InputField";

function SecondStepOfRegistration({ handleSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const regexName = /^[a-zA-Z]{2,30}$/;
    const regexPhoneNumber = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;

    const disabled = !(regexName.test(firstName) && regexName.test(lastName) && regexPhoneNumber.test(phoneNumber));
    setDisabled(disabled);
  }, [firstName, lastName, phoneNumber]);

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  
  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <form className='registration__form form' onSubmit={handleSubmit}>
      <InputField
        id="firstName"
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        required
        onChange={handleChangeFirstName}
      />
      <InputField
        id="lastName"
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        required
        onChange={handleChangeLastName}
      />
      <InputField
        id="number"
        label="Number"
        type="text"
        name="number"
        value={phoneNumber}
        required
        onChange={handleChangePhoneNumber}
      />
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