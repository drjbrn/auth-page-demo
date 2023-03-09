import useEmailAndPasswordValidation from "../hooks/useEmailAndPasswordValidation";
import Email from "./Email"
import Password from "./Passwords"
import RenderCheckPassword from './RenderCheckPassword/RenderCheckPassword';

function AuthForm({ submitForm, buttonText, renderCheckPassword }) {
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
      {renderCheckPassword && password.length > 0 && <RenderCheckPassword password={password}/>}
      <button
        disabled={isFormValid}
        className="btn">
        {buttonText}
      </button>
    </form>
  )
}

export default AuthForm;