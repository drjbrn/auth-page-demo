import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import InputField from './InputField';

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
    <InputField
      id="password"
      label="Password"
      type={inputType}
      name="password"
      value={password}
      required
      onChange={validationPassword}
      showPasswordIcon={
        <div className='form__password-eye' onClick={toggleHidePassword}>
          {eyeIcon}
        </div>
      }
    />
  );
}

export default Password;