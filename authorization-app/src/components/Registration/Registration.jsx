import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.scss';
import '../../styles/_button.scss';
import '../../styles/_form.scss';
import SecondStepOfRegistration from './SecondStepOfRegistration';
import FirstStepOfRegistration from './FirstStepOfRegistration';

function Registration() {
  const [stepOfRegistration, setStepOfRegistration] = useState('first');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStepOfRegistration('second');
  }

  return (
    <div className='registration'>
      { stepOfRegistration === 'first'
        ? <FirstStepOfRegistration handleSubmit={handleSubmit} />
        : <SecondStepOfRegistration />
      }
      <div className='switch'>
        <p>
          Already have an account?
        </p>
        <Link to="../login">Login</Link>
      </div>
    </div>
  );
}

export default Registration;