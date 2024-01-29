import React from "react"
const Cards = ({heading,date,img}) => {
  return (
    <div className='flex flex-col border rounded-lg shadow-slate-200 shadow-sm'>
        <img src={img} width={300} height={300}/>
        <div className="flex gap-1 -mt-3 flex-row">
            <div className="icon ml-3">
              <img src={'/location.png'} width={25} height={25}/>
            </div>
            <div className="country">
              Pakistan
            </div>
        </div>
        <h1 className="heading ml-3 text-2xl font-bold mt-2">{heading}</h1>
        <p className="dates ml-4 mt-7 text-blue-400">{date}</p>
    </div>
  )
}

export default Cards