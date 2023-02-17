import { useState } from 'react';
import PasswordAtRegistration from './Passwords';
import EmailAtRegistration from './Email';

function FirstStepOfRegistration({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

  let disabled = (regexEmail.test(email) && regexPassword.test(password)) ? false : true;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form 
      action=""
      onSubmit={handleSubmit}
      className='registration__form form'
    >
      <EmailAtRegistration
        validationEmail={handleChangeEmail}
      />
      <PasswordAtRegistration
        validationPassword={handleChangePassword}
        password={password}
      />
      <button
        disabled={disabled}
        type='submit'
        className='registration__btn btn'>
        Continue
      </button>
    </form>
  )
}

export default FirstStepOfRegistration;