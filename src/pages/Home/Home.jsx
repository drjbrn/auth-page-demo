import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
  return (
    <div className='home-page'>
      <h1 className='home-page__title'>
        Welcome to the demo version of the authentication page
      </h1>
      <div className='home-page__btn'>
        <Link to='../login' className='link'>
          Log In
        </Link>
        <Link to='../registration' className='link'>
          Sing Up
        </Link>
      </div>
    </div>
  )
}

export default Home;