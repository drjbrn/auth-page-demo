import Input from './Input';

function Email({ validationEmail, email }) {
  return (
    <label htmlFor="email" className="form__label">
      {/* <input
        id="email"
        name="email"
        type="text"
        className="registration__input form__input"
        required
        onChange={validationEmail}
        value={email}
      /> */}
      <Input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={validationEmail}
        // className="registration__input"
      />
      <span className="form__span">
        Email Address
      </span>
    </label>
  )
}

export default Email;