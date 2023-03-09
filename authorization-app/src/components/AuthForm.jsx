import useEmailAndPasswordValidation from "../hooks/useEmailAndPasswordValidation";
import Email from "./Email"
import Password from "./Passwords"
import PasswordRequirements from './PasswordRequirements/PasswordRequirements';

function AuthForm({ submitForm, buttonText, renderPasswordRequirements }) {
  const { email, password, isFormValid, handleChangeEmail, handleChangePassword } = useEmailAndPasswordValidation();

  return(
    <form
      action=""
      onSubmit={submitForm}
      className="form">
      <Email
          validationEmail={handleChangeEmail}
          email={email}
      />
      <Password
        validationPassword={handleChangePassword}
        password={password}
      />
      {renderPasswordRequirements && password.length > 0 && <PasswordRequirements password={password}/>}
      <button
        disabled={isFormValid}
        className="btn">
        {buttonText}
      </button>
    </form>
  )
}

export default AuthForm;