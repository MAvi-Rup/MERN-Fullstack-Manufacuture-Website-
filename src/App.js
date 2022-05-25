import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navebar from './Pages/Shared/Navebar';
import { Route, Routes } from 'react-router-dom';
import Bolgs from './Pages/Blogs/Bolgs';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Bolgs></Bolgs>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
