import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navebar from './Pages/Shared/Navebar';
import { Route, Routes } from 'react-router-dom';
import Bolgs from './Pages/Blogs/Bolgs';
import About from './Pages/About/About';
import RequireAuth from './Pages/Protected/RequireAuth';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Bolgs></Bolgs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer/>
      
      
    </div>
  );
}

export default App;
