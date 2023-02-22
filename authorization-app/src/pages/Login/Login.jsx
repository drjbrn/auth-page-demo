import { Link } from 'react-router-dom';
import './Login.scss'
import FormForEmailAndPassword from '../../components/FormForEmailAndPassword';

function Login() {
  return (
    <div className="login">
      <FormForEmailAndPassword />
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