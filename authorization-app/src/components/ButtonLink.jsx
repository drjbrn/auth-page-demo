import { Link } from "react-router-dom";

function ButtonLink({ className, showHome = false, showLogIn = false, showSignUp = false }) {
  const linkClassName = `${className}__link link`

  return(
    <div className={`${className}__btn`}>
      { showHome &&
        <Link to='/' className={linkClassName}>
          Home
        </Link>
      }
      { showLogIn &&
        <Link to='/login' className={linkClassName}>
          Log In
        </Link>
      }
      { showSignUp &&
        <Link to='/registration' className={linkClassName}>
          Sign Up
        </Link>
      }
    </div>
  )
}

export default ButtonLink;