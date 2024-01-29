import React, { useState } from 'react'
import logo from '../../../assets/traveling.svg'
import Authbuttons from './authbuttons'
const Authnavbar = () => {
const [buttonState,setButtonState] = useState('login')
  const activebuttons = [
    {title:"Log in", 
    state:"/login"},
    {title:"Sign up", 
    state:"/signup"}
  ]

  return (
    <div className='text-white grid grid-cols-2 items-center p-2 bg-blue-900 h-16'>
      <div className='flex justify-evenly items-center '>
        <div className='mt-1'>
          <img src={logo} alt="Logo img" />
        </div>
        <div>
          <ul className='flex gap-10'>
            <li>Home</li>
            <li>Service</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row-reverse'>
        <div className='buttons flex mr-5 bg-white text-black rounded-2xl'>
 
            <Authbuttons title={activebuttons[0].title} link={activebuttons[0].state} isactive={buttonState == 'login'} click={()=>setButtonState('login')}/>
            <Authbuttons title={activebuttons[1].title} link={activebuttons[1].state} isactive={buttonState == 'signup'} click={()=>setButtonState('signup')}/>
        
        </div>
      </div>
    </div>
  )
}

export default Authnavbar