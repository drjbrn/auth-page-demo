import { Link } from 'react-router-dom';
import useEmailAndPasswordValidation from '../../../hooks/useEmailAndPasswordValidation';
import PasswordAtRegistration from './Passwords';
import EmailAtRegistration from './Email';

function FirstStepOfRegistration({ handleSubmit }) {
  const { email, password, isFormValid, handleChangeEmail, handleChangePassword } = useEmailAndPasswordValidation();

  return (
    <>
      <form 
        action=""
        onSubmit={handleSubmit}
        className='registration__form form'
      >
        <EmailAtRegistration
          validationEmail={handleChangeEmail}
          email={email}
        />
        <PasswordAtRegistration
          validationPassword={handleChangePassword}
          password={password}
        />
        <button
          disabled={isFormValid}
          type='submit'
          className='registration__btn btn'>
          Continue
        </button>
      </form>
      <div className='switch'>
      <p>
        Already have an account?
      </p>
      <Link to="../login">Login</Link>
      </div>
    </>
  )
}

export default FirstStepOfRegistration;