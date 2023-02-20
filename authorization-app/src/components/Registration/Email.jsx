function EmailAtRegistration({ validationEmail }) {
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