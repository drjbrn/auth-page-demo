import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  const authData = JSON.parse(localStorage.getItem('authData')) || {};

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login data={authData}/>} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
