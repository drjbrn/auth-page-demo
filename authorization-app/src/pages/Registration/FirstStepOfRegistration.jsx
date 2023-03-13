import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';

function FirstStepOfRegistration({ handleSubmit, onAuthData }) {

  return (
    <>
      <AuthForm
        submitForm={handleSubmit}
        buttonText='Continue'
        renderPasswordRequirements
        onAuthData={onAuthData}
      />
      <div className='switch'>
        <p>
          Already have an account?
        </p>
        <Link to='../login'>Login</Link>
      </div>
    </>
  )
}

export default FirstStepOfRegistration;