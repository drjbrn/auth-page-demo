import { useState } from 'react';

const useEmailAndPasswordValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

  const isEmailValid = regexEmail.test(email);
  const isPasswordValid = regexPassword.test(password);

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