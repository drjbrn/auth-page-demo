import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from './Input';

function Password({ validationPassword, password}) {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = (hide) => {
    const inputPassword = document.querySelector('.input__password');

    inputPassword.type === 'password'
    ? inputPassword.type = 'text'
    : inputPassword.type = 'password';

    setHidePassword(hide);
  }

  const openPasswordEye = <div className='form__password-eye' onClick={() => {toggleHidePassword(false)}}>
                            <FontAwesomeIcon icon={faEye}/>
                          </div>

  const closePasswordEye = <div className='form__password-eye' onClick={() => {toggleHidePassword(true)}}>
                            <FontAwesomeIcon icon={faEyeSlash} />
                           </div>


  return (
    <label htmlFor="password" className="form__label">
      <Input 
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={validationPassword}
        className="input__password"
      />
      { hidePassword === true
      ? openPasswordEye
      : closePasswordEye
      }
      <span className="form__span">
        Password
      </span>
    </label>
  )
}

export default Password;