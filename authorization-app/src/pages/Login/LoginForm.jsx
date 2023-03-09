import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';

function LoginForm({ handleSubmit }) {
  return (
    <>
      <AuthForm
        submitForm={handleSubmit}
        buttonText='Login'
      />
      <div className="switch">
        <p>
          Don’t have an account?
        </p>
        <Link to="../registration">
          Sing Up
        </Link>
      </div>
    </>
  );
}

export default LoginForm;