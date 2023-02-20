import { Link } from "react-router-dom";
import './Home.scss'

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to the demo version of the authorization page
      </h1>
      <div className="home-page__btn">
        <Link to="../login">Login</Link>
        <Link to="../registration">Sing Up</Link>
      </div>
    </div>
  )
}

export default Home;