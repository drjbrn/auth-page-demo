import { useState } from 'react';
import './Login.scss'
import LoginForm from './LoginForm';
import GreetingUser from './GreetingUser';

function Login({ data }) {
  const [acceptedLogin, setAcceptedLogin] = useState(false);
  const [error, setError] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');

  const handleSubmit = () => {
    if (!acceptedLogin) {
      setError(true);
    }
  }

  const handleAuthData = (email, password) => {
    const passwordFromStorage = data[email].password;

    if (passwordFromStorage === password) {
      setAcceptedLogin(true);
      setError(false);
    } else {
      setAcceptedLogin(false);
      setError(true);
    }
  
    const userFirstName = data[email].firstName;
    setUserFirstName(userFirstName);
  }

  return (
    <div className='login'>
      { acceptedLogin
        ? <GreetingUser
            userFirstName={userFirstName}
          />
        : <LoginForm
            handleSubmit={handleSubmit}
            onAuthData={handleAuthData}
            error={error}
          />
      }
    </div>
  );
}

export default Login;