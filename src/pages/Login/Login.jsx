import { useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';
import './Login.scss'
import LoginForm from './LoginForm';
import GreetingUser from './GreetingUser';

function Login() {
  const [acceptedLogin, setAcceptedLogin] = useState(false);
  const [error, setError] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const data = secureLocalStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const handleSubmit = () => {
    if (!acceptedLogin) {
      setError(true);
    }
  }

  const handleAuthData = (email, password) => {
    if (!userData[email]) {
      setError(true);
      return;
    }

    const passwordFromStorage = userData[email].password || '';

    if (passwordFromStorage === password) {
      setAcceptedLogin(true);
      setError(false);
    } else {
      setAcceptedLogin(false);
      setError(true);
    }

    const userFirstName = userData[email].firstName;
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