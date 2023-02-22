import { Link } from 'react-router-dom';
import useEmailAndPasswordValidation from '../../../hooks/useEmailAndPasswordValidation';
import Password from '../../../components/Passwords';
import Email from '../../../components/Email';
import RenderCheckPassword from '../../../components/RenderCheckPassword/RenderCheckPassword';

function FirstStepOfRegistration({ handleSubmit }) {
  const { email, password, isFormValid, handleChangeEmail, handleChangePassword } = useEmailAndPasswordValidation();

  return (
    <>
      <form 
        action=""
        onSubmit={handleSubmit}
        className='registration__form form'
      >
        <Email
          validationEmail={handleChangeEmail}
          email={email}
        />
        <Password
          validationPassword={handleChangePassword}
          password={password}
        />
        {password.length > 0 && <RenderCheckPassword password={password}/>}
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