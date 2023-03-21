import { Link } from 'react-router-dom';
import './PageNotFound.scss';

function PageNotFound() {
  return(
    <div className='page-not-found'>
      <h1 className='page-not-found__title'>
        Oops. Something wrong :(
      </h1>
      <p className='page-not-found__text'>
        The page you are looking for cannot be found. Please check the URL.
      </p>
      <div className='page-not-found__btn'>
        <Link to='/' className='link page-not-found__link'>
          Home
        </Link>
        <Link to='/login' className='link page-not-found__link'>
          Log In
        </Link>
        <Link to='/registration' className='link page-not-found__link'>
          Sing Up
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound;