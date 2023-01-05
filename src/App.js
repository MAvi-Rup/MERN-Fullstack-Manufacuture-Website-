
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
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound';
import Contact from './Pages/Contact/Contact';
import 'react-toastify/dist/ReactToastify.css';
import AddReview from './Pages/Home/AddReview';
import Review from './Pages/Home/Review';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Protected/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyPortfolio from './Pages/MyPotfolio/MyPortfolio';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AllOrders from './Pages/Dashboard/AllOrders';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12 sm:w-screen'>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Bolgs></Bolgs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="confirmorder" element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          {/* <Route path="myorder" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route> */}
        </Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        {/* <Route path='/addreview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route> */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer/>
      
      
    </div>
  );
}

export default App;
