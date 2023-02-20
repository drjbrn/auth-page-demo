import { Link } from 'react-router-dom';
import './Login.scss'

function Login() {
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
          />
          <span className="login__span form__span">
            Email Address
          </span>
        </label>
        <label htmlFor="password" className="login__label form__label">
          <input
            id="password"
            name="password"
            type="text"
            className="login__input form__input"
            required
          />
          <span className="login__span form__span">
            Password
          </span>
        </label>
        <button className="login__btn btn">
          Login
        </button>
      </form>
      <div className="switch">
        <p>
          Don’t have an account?
        </p>
        <Link to="../registration">Sing Up</Link>
      </div>
    </div>
  );
}

export default Login;