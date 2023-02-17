function SecondStepOfRegistration() {
  return (
    <form className='registration__form form'>
      <label htmlFor="firstName" className="registration__label form__label">
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="registration__input form__input"
          required
          // onChange={validationEmail}
          // value={email}
        />
        <span className="registration__span form__span">
          First Name
        </span>
      </label>
      <label htmlFor="lastName" className="registration__label form__label">
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="registration__input form__input"
          required
          // onChange={validationEmail}
          // value={email}
        />
        <span className="registration__span form__span">
          Last Name
        </span>
      </label>
      <label htmlFor="number" className="registration__label form__label">
        <input
          id="number"
          name="number"
          type="text"
          className="registration__input form__input"
          required
          // onChange={validationEmail}
          // value={email}
        />
        <span className="registration__span form__span">
          Number
        </span>
      </label>
      <button
        // disabled={disabled}
        type='submit'
        className='registration__btn btn'>
        Confirm
      </button>
    </form>
  )
}

export default SecondStepOfRegistration;