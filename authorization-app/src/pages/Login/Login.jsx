// import { useState } from 'react';
import { Link } from 'react-router-dom';
import useEmailAndPasswordValidation from '../../hooks/useEmailAndPasswordValidation';
import './Login.scss'

function Login() {
  const { email, password, isFormValid, handleChangeEmail, handleChangePassword } = useEmailAndPasswordValidation();

  return (
    <div className="login">
      <form action="" className="login__form form">
        <label htmlFor="email" className="login__label form__label">
          <input
            id="email"
            name="email"
            type="text"
            className="login__input form__input"
            required
            onChange={handleChangeEmail}
            value={email}
          />
          <span className="login__span form__span">
            Email Address
          </span>
        </label>
        <label htmlFor="password" className="login__label form__label">
          <input
            id="password"
            name="password"
            type="password"
            className="login__input form__input"
            required
            onChange={handleChangePassword}
            value={password}
          />
          <span className="login__span form__span">
            Password
          </span>
        </label>
        <button
          disabled={isFormValid}
          className="login__btn btn">
          Login
        </button>
      </form>
      <div className="switch">
        <p>
          Don’t have an account?
        </p>
        <Link to="../registration">
          Sing Up
        </Link>
      </div>
    </div>
  );
}

export default Login;