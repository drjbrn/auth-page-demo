import { useState } from 'react';
import './Registration.scss';
import '../../styles/_button.scss';
import '../../styles/_form.scss';
import SecondStepOfRegistration from './SecondStepOfRegistration';
import FirstStepOfRegistration from './FirstStepOfRegistration';
import RegistrationAccepted from './RegistrationAccepted';

function Registration() {
  const [stepOfRegistration, setStepOfRegistration] = useState('first');
  const [acceptedRegistration, setAcceptedRegistration] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStepOfRegistration('second');
  }

  const handleSubmitAccepted = (event) => {
    event.preventDefault();
    setAcceptedRegistration(true);
  }

  return (
    <div className='registration'>
      { stepOfRegistration === 'first'
        ? <FirstStepOfRegistration handleSubmit={handleSubmit} />
        : acceptedRegistration === false
        ? <SecondStepOfRegistration handleSubmit={handleSubmitAccepted}/>
        : <RegistrationAccepted />
      }
    </div>
  );
}

export default Registration;