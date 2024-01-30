import React from "react"
import logo from '../../../assets/traveling.svg'
import { RxDashboard } from "react-icons/rx";
import { FiHome } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { TbMoneybag } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TiBell } from "react-icons/ti";
const Sidebar = () => {
  return (
    <div className="flex">
        <div className="min-h-screen bg-[var(--primary-color)] flex flex-col grow-[0] p-4 items-center justify-between">
         <div>
          <div className="flex gap-1 mt-5 items-center">
          <img src={logo} width={50} height={50} alt="Logo Image" />
          <p className="font-bold text-xl text-white">Company Name</p>
          </div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<FiHome className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Home</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<RxDashboard className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Dashboard</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<CgNotes className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Services</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<CgProfile className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Customers</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<CgNotes className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Orders</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<TbMoneybag className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Cashier</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<IoSettingsOutline className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Settings</p>
</div>
<div className="mt-3 flex gap-4 hover:bg-white duration-300 group p-1 ml-1 rounded-lg transition-all cursor-pointer items-center">
<RiErrorWarningFill className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Reports</p>
</div>
         </div>
         <div className="">
         <div className="mb-3 justify-between flex hover:bg-white duration-300 group p-1 rounded-lg transition-all cursor-pointer items-center">
          <div className="flex gap-4 items-center">
<TiBell className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Notification</p>
          </div>
          <p style={{borderRadius:'50%'}} className="text-white w-5 h-5 text-center p-1 text-xs bg-[var(--secondary-color)]">
            2 
          </p>
</div>
         <div className="mb-3 flex gap-4 hover:bg-white duration-300 group p-1 rounded-lg transition-all cursor-pointer items-center">
<IoSettingsOutline className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Setting</p>
</div>
         <div className="mb-3 flex gap-4 hover:bg-white duration-300 group p-1 rounded-lg transition-all cursor-pointer items-center">
<RiLogoutCircleRLine className="text-3xl duration-500 group-hover:text-[var(--primary-color)] text-[var(--secondary-color)]"/>
<p className="text-xl duration-500 group-hover:text-[var(--primary-color)] text-white ">Logout</p>
</div>
          <div className="flex gap-1 text-white">
          <img width={45} src={logo} alt="" />
          <div className="">
          <p className="name text-sm">Ali Burhan</p>
          <p className="email text-xs">aliburhandev@gmail.com</p>
          </div>
          </div>
         </div>
        </div>
        <div className="grow-[20]">
s
        </div>
    </div>
  )
}

export default Sidebar