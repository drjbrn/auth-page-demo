import { useState } from 'react';
import  secureLocalStorage  from  "react-secure-storage";
import './Registration.scss';
import '../../styles/_button.scss';
import '../../styles/_form.scss';
import SecondStepOfRegistration from './SecondStepOfRegistration';
import FirstStepOfRegistration from './FirstStepOfRegistration';
import RegistrationAccepted from './RegistrationAccepted';

function Registration() {
  const [registrationState, setRegistrationState] = useState({
    step: 1,
    isAccepted: false
  });

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    firstName: ''
  });

  const handleFirstStepSubmit  = () => {
    setRegistrationState({ ...registrationState, step: 2 });
  }

  const handleSecondStepSubmit = (event) => {
    event.preventDefault();
    setRegistrationState({ ...registrationState, isAccepted: true });
  }

  const handleAuthDataChange = (email, password) => {
    const currentData = JSON.parse(secureLocalStorage.getItem('userData')) || {};
    const newData = { ...currentData, [email]: { email, password, firstName: userData.firstName } };
    secureLocalStorage.setItem('userData', JSON.stringify(newData));

    setUserData(prevUserData => ({ ...prevUserData, email, password }));
  };

  const handleFirstNameChange = (firstName) => {
    const currentData = JSON.parse(secureLocalStorage.getItem('userData')) || {};
    const newData = { ...currentData, [userData.email]: { email: userData.email, password: userData.password, firstName } };
    secureLocalStorage.setItem('userData', JSON.stringify(newData));

    setUserData(prevUserData => ({ ...prevUserData, firstName }));
  };

  const { step, isAccepted } = registrationState;

  return (
    <div className='registration'>
      { step === 1 &&
        <FirstStepOfRegistration
          handleSubmit={handleFirstStepSubmit}
          onAuthData={handleAuthDataChange}
        />
      }

      { step === 2 && !isAccepted &&
        <SecondStepOfRegistration
          handleSubmit={handleSecondStepSubmit}
          onFirstNameChange={handleFirstNameChange}
        />
      }

      {isAccepted && <RegistrationAccepted />}
    </div>
  );
}

export default Registration;