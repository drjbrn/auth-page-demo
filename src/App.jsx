import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
 