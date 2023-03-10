import { useState } from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../constants/regex';

const useEmailAndPasswordValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);

  let isFormValid = isEmailValid && isPasswordValid ? false : true;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return { email, password, isFormValid, handleChangeEmail, handleChangePassword };
};

export default useEmailAndPasswordValidation;