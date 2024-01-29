import React from 'react'
import Authnavbar from '../authnavbar/authnavbar'
import signupimg from '../../../assets/signup.png'
const Login  = () => {
  return (
    <div className=''>
        <Authnavbar/>
        <div className=' place-items-center w-full p-5 md:p-0 h-[calc(100vh-65px)] grid md:grid-cols-2'>
            <div className=''>
                <h1 className='text-4xl inline-block font-semibold tracking-wider'>Login To Company</h1>
                <h4 className='leading-10'>Enter Your Details Below</h4>
                <form className='relative'>
                    <input placeholder='Email or Phone Number' className='block my-8 w-full bg-transparent h-9 border-b border-slate-500 outline-none'required type="email" />
                    <input placeholder='XYZ' className='block my-8 w-full bg-transparent h-9 border-b border-slate-500 outline-none'required type="password" />
                    <p className='right-0 absolute top-[56%] text-xs font-bold text-blue-500'>Forget Password?</p>
                    <button type='submit' className='w-full bg-blue-500 text-white rounded p-3'>Login</button>
                </form>
                <div className='mt-3 gap-4 flex items-center'>
                {/* <p className=''>Already have a account?</p><Link to={'/login'} className='mr-3 inline-block font-semibold'>Log in</Link> */}
                </div>
            </div>
            <div className='hidden md:block'>
                <img src={signupimg} className=' w-2/3' alt="Sign Uo Image" />
            </div>
        </div>
    </div>
  )
}

export default Login    