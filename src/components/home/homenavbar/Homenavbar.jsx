import {CiHeart} from 'react-icons/ci'
import { CiSearch } from "react-icons/ci";
import traveling from '../../../assets/traveling.svg'
import user from '../../../assets/user.svg'
const Homenavbar = () => {

  return (
    <div className='text-white grid grid-cols-2 items-center p-2 bg-blue-900 h-16'>
      <div className='flex justify-evenly items-center '>
        <div className='mt-1'>
          <img src={traveling} width={50} height={50}/>
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
        <div className='buttons flex lg:gap-20 md:gap-15 gap-5 mr-5'>
            <div className=" flex search gap-1 bg-[#D9D9D9] rounded-2xl mt-1">
                <CiSearch className='text-2xl mt-1 ml-2 text-black'/>
                <input type="text" className='bg-transparent placeholder:text-[#ADADAD] placeholder:font-bold' placeholder='Search'/>
            </div>
            <div className='icons flex gap-2'>
            <CiHeart className='bg-blue-900 text-4xl text-white '/>
            <img src={user} width={30} height={30}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homenavbar