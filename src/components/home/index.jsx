import React from 'react'
import Homenavbar from './homenavbar/Homenavbar'
import carosal from '../../assets/carosal.png'
import Cards from './homecards/card'
import Category from './homecards/categorycard'
import { IoManOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import card from '../../assets/card.png'
const Home = () => {
  return (
    <div> 
    <Homenavbar/>
    <div className="mainhero grid place-items-center w-full">
      <img src={carosal}  className="w-[95%] mt-3" />
    </div>
    <h1 className="text-3xl font-bold ml-10 mt-5">Flash Sales - 25% off</h1>
    <div className="flex justify-center my-8 flex-wrap gap-2">
  <Cards heading={"Finding Love & Name"} date={'17 september 2021'} img={card}/>
  <Cards heading={"Finding Love & Name"} date={'17 september 2021'} img={card}/>
  <Cards heading={"Finding Love & Name"} date={'17 september 2021'} img={card}/>
  <Cards heading={"Finding Love & Name"} date={'17 september 2021'} img={card}/>
    </div>
    <hr className="w-[95%] m-auto"/>
     <h1 className="text-3xl font-bold ml-10 mt-5">Browse By Category</h1>
     <div className="categories flex my-8 gap-4 flex-row justify-center">
      <Category Icon={IoManOutline} content={"Men"}/>
      <Category Icon={IoWomanOutline} content={'Women'}/> 
      <Category Icon={IoWomanOutline} content={'All'}/> 
      <Category Icon={IoWomanOutline} content={'Couple'}/> 
     </div>
    <hr className="w-[95%] m-auto"/>
    
     </div>
  )
}

export default Home