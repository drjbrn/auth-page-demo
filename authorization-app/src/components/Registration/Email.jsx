import { useState } from 'react';


function EmailAtRegistration({ validationEmail }) {
  // const [email, setEmail] = useState('');

  // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // if (regex.test(email)) {
  //   console.log('yes, email ok')
  // }

  // const handleChange = (event) => {
  //   setEmail(event.target.value);
  // };

  return (
    <label htmlFor="email" className="registration__label form__label">
      <input
        id="email"
        name="email"
        type="text"
        className="registration__input form__input"
        required
        onChange={validationEmail}
        // value={email}
      />
      <span className="registration__span form__span">
        Email Address
      </span>
    </label>
  )
}

export default EmailAtRegistration;