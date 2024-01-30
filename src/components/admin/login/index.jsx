import React from 'react'
import './index.css'
import logo from '../../../assets/traveling.svg'
import { Link } from 'react-router-dom'
const Adminlogin = () => {
  return (
    <div className='min-h-screen  grid place-items-center'>
       <div className='p-3 w-[80%] bg-[var(--white-color)] h-[80%] grid grid-cols-2'>
            <div className='flex flex-col justify-between'>
                <div className='mt-3 flex items-center '>
                    <img src={logo}  alt="Logo" />  
                    <h1 className='ml-3 text-2xl font-bold text-[var(--secondary-color)]'>TAMS</h1>
                </div>
                <div className='ml-14'>
                    <p className='text-xl font-bold'>Admin Login</p>
                    <form action="" className='md:w-[90%] lg:w-[70%]'>
                        <div className='relative'>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Company Email or Phone Number'/>
                        <input type="text" className='border mt-6 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Password'/>
                        <p className='float-right text-[var(--secondary-color)] font-semibold'>Forgot Password?</p>
                        </div>
                        <button className='w-[100%] p-2 my-10 rounded font-semibold bg-[var(--secondary-color)] text-white'>Login</button>
                        <p>Request for a service? <span className='text-[var(--secondary-color)] font-semibold'> <Link to={'/admin/request'}>Register here.</Link></span></p>
                    <div className='flex justify-center mt-5 items-center flex-row'>
                <hr className='block w-[35%]'/>
                <p className='text-center text-sm text-[#D0D0D0]'> Provided By <br /> Ammar, Burhan</p>
                <hr className='block w-[35%]'/>
                
                    </div>
                    </form>
                </div>
                <div className='text-[#D0D0D0]'>© 2024 TAMS. All Rights Reserved</div>
            </div>
            <div className='rounded-xl imageset'>
            </div>
       </div>
    </div>
  )
}

export default Adminlogin