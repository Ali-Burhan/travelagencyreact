import React from 'react'
import Authnavbar from '../authnavbar/authnavbar'
import signupimg from '../../../assets/signup.png'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
        <Authnavbar/>
        <div className=' place-items-center w-full p-5 md:p-0 h-[calc(100vh-65px)] grid md:grid-cols-2'>
            <div className=''>
                <h1 className='text-4xl inline-block font-semibold tracking-wider'>Create an Account</h1>
                <h4 className='leading-10'>Enter Your Details Below</h4>
                <form >
                    <input placeholder='XYZ' className='block my-8 w-full bg-transparent h-9 border-b border-slate-500 outline-none' required type="text" />
                    <input placeholder='XYZ' className='block my-8 w-full bg-transparent h-9 border-b border-slate-500 outline-none'required type="email" />
                    <input placeholder='XYZ' className='block my-8 w-full bg-transparent h-9 border-b border-slate-500 outline-none'required type="password" />
                    <button type='submit' className='w-full bg-blue-500 text-white rounded p-3'>Create Account</button>
                </form>
                <div className='mt-3 gap-4 flex items-center'>
                <p className=''>Already have a account?</p><Link to={'/login'} className='mr-3 inline-block font-semibold'>Log in</Link>
                </div>
            </div>
            <div className='hidden md:block'>
                <img src={signupimg} className=' w-2/3' alt="Sign Uo Image" />
            </div>
        </div>
    </div>
  )
}

export default Signup