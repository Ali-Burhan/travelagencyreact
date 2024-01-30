import React from 'react'
import './index.css'
import logo from '../../../assets/traveling.svg'
import { Link } from 'react-router-dom'
const Adminrequest = () => {
  return (
    <div className='min-h-screen  grid place-items-center'>
       <div className='p-3 w-[80%] bg-[var(--white-color)] h-[90%] grid grid-cols-2'>
            <div className='flex flex-col justify-between'>
                <div className='mt-3 flex items-center '>
                    <img src={logo}  alt="Logo" />  
                    <h1 className='ml-3 text-2xl font-bold text-[var(--secondary-color)]'>TAMS</h1>
                </div>
                <div className='ml-16'>
                    <p className='text-xl font-bold'>Admin Request</p>
                    <form action="" className='md:w-[90%] lg:w-[70%]'>
                        <div className='relative'>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Full Name'/>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Company Name'/>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Email Adress'/>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Office Address'/>
                        <input type="text" className='border mt-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Set Password'/>
                        </div>
                        <button className='w-[100%] p-2 my-10 rounded font-semibold bg-[var(--secondary-color)] text-white'>Request</button>
                        <p>Already Have An Account? <span className='text-[var(--secondary-color)] font-semibold'> <Link to={'/admin/login'}>Login here.</Link></span></p>
                    <div className='flex justify-center mt-5 items-center flex-row'>
                <hr className='block w-[35%]'/>
                <p className='text-center text-sm text-[#D0D0D0]'> Provided By <br /> Ammar, Burhan</p>
                <hr className='block w-[35%]'/>
                
                    </div>
                    </form>
                </div>
                <div className='text-[#D0D0D0]'>© 2024 TAMS. All Rights Reserved</div>
            </div>
            <div className='rounded-xl imagesetrequest'>
            </div>
       </div>
    </div>
  )
}

export default Adminrequest