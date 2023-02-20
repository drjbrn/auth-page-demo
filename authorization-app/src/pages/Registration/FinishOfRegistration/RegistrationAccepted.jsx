import { Link } from "react-router-dom";

function RegistrationAccepted() {
  return (
    <div  className="accepted">
      <p className="accepted__text">
        Login account has been created
      </p>
      <div className="accepted__btns">
        <Link to="/">
          <button className="btn">
            Home
          </button>
        </Link>
        <Link to="../login">
          <button className="btn">
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RegistrationAccepted;