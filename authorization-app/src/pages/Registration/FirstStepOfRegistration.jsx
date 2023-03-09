import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';

function FirstStepOfRegistration({ handleSubmit }) {

  return (
    <>
      <AuthForm
        submitForm={handleSubmit}
        buttonText='Continue'
        renderCheckPassword
      />
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