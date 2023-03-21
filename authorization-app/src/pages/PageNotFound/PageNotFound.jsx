import './PageNotFound.scss';
import ButtonLink from '../../components/ButtonLink';

function PageNotFound() {
  return(
    <div className='page-not-found'>
      <h1 className='page-not-found__title'>
        Oops. Something wrong :(
      </h1>
      <p className='page-not-found__text'>
        The page you are looking for cannot be found. Please check the URL.
      </p>
      <ButtonLink
        className='page-not-found'
        showHome={true}
        showLogIn={true}
        showSignUp={true}
      />
    </div>
  )
}

export default PageNotFound;