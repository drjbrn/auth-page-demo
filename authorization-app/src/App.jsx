import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
