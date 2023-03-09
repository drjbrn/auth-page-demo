import { useState } from 'react';
import './Login.scss'
import LoginForm from './LoginForm';
import GreetingUser from './GreetingUser';

function Login() {
  const [acceptedLogin, setAcceptedLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAcceptedLogin(true);
  }

  return (
    <>
      { acceptedLogin
        ? <GreetingUser />
        : <LoginForm handleSubmit={handleSubmit}/>
      }
    </>
  );
}

export default Login;