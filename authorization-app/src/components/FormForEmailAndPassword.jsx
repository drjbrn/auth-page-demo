import useEmailAndPasswordValidation from "../hooks/useEmailAndPasswordValidation";
import Email from "./Email"
import Password from "./Passwords"

function FormForEmailAndPassword() {
  const { email, password, isFormValid, handleChangeEmail, handleChangePassword } = useEmailAndPasswordValidation();

  return(
    <form action="" className="form">
      <Email
          validationEmail={handleChangeEmail}
          email={email}
      />
      <Password
        validationPassword={handleChangePassword}
        password={password}
      />
      <button
        disabled={isFormValid}
        className="login__btn btn">
        Login
      </button>
    </form>
  )
}

export default FormForEmailAndPassword;