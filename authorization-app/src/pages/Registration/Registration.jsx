import { useState } from 'react';
import './Registration.scss';
import '../../styles/_button.scss';
import '../../styles/_form.scss';
import SecondStepOfRegistration from './SecondStepOfRegistration';
import FirstStepOfRegistration from './FirstStepOfRegistration';
import RegistrationAccepted from './RegistrationAccepted';

function Registration() {
  const [stepOfRegistration, setStepOfRegistration] = useState('first');
  const [isRegistrationAccepted, setIsAcceptedRegistration] = useState(false);
  const [authData, setAuthData] = useState({ email: '', password: '' });
  const [firstName, setFirstName] = useState('');

  const handleFirstStepSubmit  = () => {
    setStepOfRegistration('second');
  }

  const handleAuthDataChange = (email, password) => {
    const currentData = JSON.parse(localStorage.getItem('authData')) || {};
    const newData = { ...currentData, [email]: password };
    const newDataJSON = JSON.stringify(newData);
    localStorage.setItem('authData', newDataJSON);

    setAuthData({ email, password });
  };

  const handleSecondStepSubmit = (event) => {
    event.preventDefault();
    setIsAcceptedRegistration(true);
  }

  const handleFirstNameChange = (value) => {
    const currentData = JSON.parse(localStorage.getItem('authData')) || {};
    const newAuthData = { ...authData, firstName: value };
    const newData = { ...currentData, [authData.email]: newAuthData };
    localStorage.setItem('authData', JSON.stringify(newData));

    setFirstName(value);
  };

  return (
    <div className='registration'>
      {/* { stepOfRegistration === 'first'
        ? <FirstStepOfRegistration
            handleSubmit={handleFirstStepSubmit}
            onAuthData={handleAuthDataChange}
          />
        : isRegistrationAccepted === false
        ? <SecondStepOfRegistration
            handleSubmit={handleSecondStepSubmit}
            onFirstNameChange={handleFirstNameChange}
          />
        : <RegistrationAccepted />
      } */}
      { stepOfRegistration === 'first' &&
        <FirstStepOfRegistration
          handleSubmit={handleFirstStepSubmit}
          onAuthData={handleAuthDataChange}
        />}
      { stepOfRegistration === 'second' && !isRegistrationAccepted &&
        <SecondStepOfRegistration
            handleSubmit={handleSecondStepSubmit}
            onFirstNameChange={handleFirstNameChange}
          />}
      {isRegistrationAccepted && <RegistrationAccepted />}
    </div>
  );
}

export default Registration;