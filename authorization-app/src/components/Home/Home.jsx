import { Link } from "react-router-dom";
import './Home.scss'

function Home() {
  return (
    <div className="home-page">
      <Link to=".">Home</Link>
      <Link to="../login">Login</Link>
      <Link to="../registration">Sing Up</Link>
    </div>
  )
}

export default Home;