import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Authbuttons = ({isactive,title,click,link}) => {
const [classes, setClass] = useState('')
    useEffect(()=>{
        setClass(isactive ? 'bg-blue-400 text-white' :"")
    },[isactive])
  return (
    
    <Link to={link} className={`pl-2 p-1 rounded-2xl font-semibold duration-200 ${classes}`}> <button  onClick={click}> {title}</button></Link>
  )
}

export default Authbuttons