import React from "react"
const Category = ({Icon,content}) => {
    return (
      <div className="md:py-7 p-6 md:px-14 border border-slate-400">
          <div className="icon flex justify-center items-center">
          <Icon className='md:text-4xl text-2xl' />
          </div>
          <div className="content mt-3">{content}</div>
      </div>
    )
  }
  
  export default Category