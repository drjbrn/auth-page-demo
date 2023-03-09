import { Link } from "react-router-dom";

function GreetingUser() {
  return (
    <div className="greeting">
      <p className="greeting__text">
        Hello, user!
      </p>
      <div className="greeting__btn">
        Go back to
        <Link to="/" className="link greeting__link">
          Home
        </Link>
      </div>
    </div>
  )
}

export default GreetingUser;