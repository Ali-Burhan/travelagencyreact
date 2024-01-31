import React from "react"
import logo from '../../../../assets/traveling.svg'
import { RxDashboard } from "react-icons/rx";
import { FiHome } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { TbMoneybag } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TiBell } from "react-icons/ti";
import { Link } from "react-router-dom";
const Sidebar = ({children}) => {
  return (
    <div className="flex">
    <div className="min-h-screen fixed top-0 left-0 bg-[var(--primary-color)] flex flex-col w-[200px] p-4 justify-between">
     <div>
      <div className="flex gap-1 mt-5 items-center">
      <img src={logo} width={50} height={50} alt="Logo Image" />
      <p className="font-bold text-xl text-white">Company</p>
      </div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<FiHome className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white "> <Link to={'/dashboard'}>Home</Link></p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<RxDashboard className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)]  text-white ">Dashboard</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<CgNotes className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white "><Link to={'/dashboard/service'}>Service</Link></p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<CgProfile className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white ">Customers</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<CgNotes className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white ">Orders</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<TbMoneybag className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white ">Cashier</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<IoSettingsOutline className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white ">Settings</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4 rounded-lg transition-all cursor-pointer items-center">
<RiErrorWarningFill className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white ">Reports</p>
</div>
     </div>
     <div className="">
    
     <div className="mt-3 flex gap-4 hover:bg-white duration-300 group py-2 px-4  rounded-lg transition-all cursor-pointer items-center">
<RiLogoutCircleRLine className="text-2xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-lg duration-500 group-hover:text-[var(--primary-color)] text-white "> Logout</p>
</div>
     </div>
    </div>
    <div className="grow ml-[200px]">
        <nav className="p-6 flex justify-between">
        <p className="text-2xl font-bold">Dashboard</p>
        <div className="flex relative items-center gap-2">
          <p className="absolute top-3 left-5 bg-red-600 rounded-full text-xs text-white grid place-items-center w-4 h-4">1</p>
<TiBell className="text-4xl text-[var(--grey-color)]"/>
<div className="h-10 w-10 grid place-items-center bg-[var(--secondary-color)] rounded-full">
{/* <Image src={'/user.svg'} height={35} width={35} className=" border-white rounded-full border-2"/> */}
</div>
        </div>
        </nav>
        <div className="">
        {children}
        </div>
    </div>
</div>
  )
}

export default Sidebar