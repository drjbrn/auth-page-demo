import { Link } from 'react-router-dom';
import './Login.scss'
import AuthForm from '../../components/AuthForm';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('login ok')
  }

  return (
    <div className="login">
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
    </div>
  );
}

export default Login;