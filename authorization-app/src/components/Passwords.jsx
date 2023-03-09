import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from './Input';

function Password({ validationPassword, password }) {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const inputType = hidePassword ? "password" : "text";

  const eyeIcon = hidePassword
  ? <FontAwesomeIcon icon={faEye} />
  : <FontAwesomeIcon icon={faEyeSlash} />;


  return (
    <label htmlFor="password" className="form__label">
      <Input
        id="password"
        name="password"
        type={inputType}
        value={password}
        onChange={validationPassword}
        className="input__password"
      />
      <div className='form__password-eye' onClick={toggleHidePassword}>
        {eyeIcon}
      </div>
      <span className="form__span">Password</span>
    </label>
  );
}

export default Password;