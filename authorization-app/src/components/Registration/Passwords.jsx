import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ValidationPassword from '../ValidationPassword/ValidationPassword'

function PasswordAtRegistration({ validationPassword, password}) {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = (hide) => {
    const inputPassword = document.querySelector('.registration__password');

    inputPassword.type === 'password'
    ? inputPassword.type = 'text'
    : inputPassword.type = 'password';

    setHidePassword(hide);
  }

  const openPasswordEye = <div className='registration__password-eye' onClick={() => {toggleHidePassword(false)}}>
                            <FontAwesomeIcon icon={faEye}/>
                          </div>

  const closePasswordEye = <div className='registration__password-eye' onClick={() => {toggleHidePassword(true)}}>
                            <FontAwesomeIcon icon={faEyeSlash} />
                           </div>


  return (
    <>
      <label htmlFor="password" className="registration__label form__label">
        <input
          id="password"
          name="password"
          type="password"
          className="registration__input registration__password form__input"
          required
          onChange={validationPassword}
          value={password}
        />
        { hidePassword === true
        ? openPasswordEye
        : closePasswordEye
        }
        <span className="registration__span form__span">
          Password
        </span>
      </label>
      {password.length > 0 && <ValidationPassword password={password}/>}
    </>
  )
}

export default PasswordAtRegistration;