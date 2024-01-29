import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from './components/home'
import Signup from './components/auth/signup'
function App() {
  
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' Component={Home}/>
        <Route Component={Login} path='/login'/>
        <Route Component={Signup} path='/signup'/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
