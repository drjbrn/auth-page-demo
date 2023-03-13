import useEmailAndPasswordValidation from '../hooks/useEmailAndPasswordValidation';
import Email from './Email'
import Password from './Passwords'
import PasswordRequirements from './PasswordRequirements/PasswordRequirements';

function AuthForm({ submitForm, buttonText, renderPasswordRequirements, onAuthData, error }) {
  const { email, password, isFormValid, handleEmailChange, handlePasswordChange } = useEmailAndPasswordValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onAuthData(email, password);
    submitForm();
  };

  return(
    <form
      action=''
      onSubmit={handleSubmit}
      className='form'>
      <Email
          validationEmail={handleEmailChange}
          email={email}
      />
      <Password
        validationPassword={handlePasswordChange}
        password={password}
      />
      {renderPasswordRequirements && password.length > 0 && <PasswordRequirements password={password}/>}
      {error && <p className="form__login_error">
                  Invalid email or password. <br />
                  Please check your login information and try again.
                </p>
      }
      <button
        disabled={isFormValid}
        className='btn'>
        {buttonText}
      </button>
    </form>
  )
}

export default AuthForm;