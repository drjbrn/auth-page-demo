import { useState } from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../constants/regex';

const useEmailAndPasswordValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);

  const isFormValid = !(isEmailValid && isPasswordValid);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return { 
    email, 
    password, 
    isFormValid, 
    handleEmailChange, 
    handlePasswordChange 
  };
};

export default useEmailAndPasswordValidation;