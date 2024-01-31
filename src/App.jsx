import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from './components/home'
import Signup from './components/auth/signup'
import Sidebar from './components/admin/dashboard/sidebar/sidebar'
import Adminlogin from './components/admin/login'
import Adminrequest from './components/admin/request'
import Dashoardhome from './components/admin/dashboard/home/home'
import Dashboardservice from './components/admin/dashboard/service/service'
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
        <Route Component={Dashoardhome} path='/dashboard'/>
        <Route Component={Dashboardservice} path='/dashboard/service'/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
