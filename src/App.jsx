import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from './components/home'
import Signup from './components/auth/signup'
import Sidebar from './components/admin/dashboard/sidebar'
import Adminlogin from './components/admin/login'
import Adminrequest from './components/admin/request'
function App() {
  
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' Component={Home}/>
        <Route Component={Login} path='/login'/>
        <Route Component={Signup} path='/signup'/>
        <Route Component={Adminlogin} path='/admin/login'/>
        <Route Component={Adminrequest} path='/admin/request'/>
        <Route Component={Sidebar} path='/dashboard'/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
