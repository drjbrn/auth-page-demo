import { useState, useEffect } from 'react';
import { NAME_REGEX, PHONE_REGEX } from '../../constants/regex';
import InputField from '../../components/InputField';

function SecondStepOfRegistration({ handleSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [disabled, setDisabled] = useState(true);

  const validateName = (name) => NAME_REGEX.test(name);
  const validatePhoneNumber = (number) => PHONE_REGEX.test(number);

  useEffect(() => {
    const isDisabled = !(validateName(firstName) && validateName(lastName) && validatePhoneNumber(phoneNumber));
    setDisabled(isDisabled);
  }, [firstName, lastName, phoneNumber]);

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    const setters = {
      firstName: setFirstName,
      lastName: setLastName,
      phoneNumber: setPhoneNumber,
    };
    const setter = setters[fieldName];
    if (setter) {
      setter(value);
    }
  };

  return (
    <form className='registration__form form' onSubmit={handleSubmit}>
      <InputField
        id='firstName'
        label='First Name'
        type='text'
        name='firstName'
        value={firstName}
        required
        onChange={handleInputChange}
      />
      <InputField
        id='lastName'
        label='Last Name'
        type='text'
        name='lastName'
        value={lastName}
        required
        onChange={handleInputChange}
      />
      <InputField
        id='number'
        label='Number'
        type='text'
        name='number'
        value={phoneNumber}
        required
        onChange={handleInputChange}
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