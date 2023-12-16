import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import AdminDashboard from './admin/Admindashboard';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
//for showing toast message
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminEditProduct from './admin/AdminEditProduct';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>

        {/* Create register route*/}
        <Route path='/register' element={<Register/>}/>

        {/* Create login route*/}
        <Route path='/login' element={<Login/>}/>
        
        {/*Admin Routes*/}
        <Route path ='/admin/dashbaord' element={<AdminDashboard/>}/>

        {/*Edit product*/}
        <Route path ='/admin/edit/:id' element={<AdminEditProduct/>}/>

                
      </Routes>
    </Router>
  );
}

export default AdminDashboard;
