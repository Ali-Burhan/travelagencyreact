import React from 'react'
import Sidebar from '../sidebar/sidebar'
import CardDash from '../cards/dashboardcard'
import Linechart from '../chart/linechart'
import Traficchart from '../chart/trafficchart'
import Barcharts from '../chart/barchart'
import Piechart from '../chart/piechart'

const Dashoardhome = () => {
  return (
        <Sidebar>
            <div>
      <div className='flex justify-evenly gap-3 flex-wrap'>
        <CardDash/>
        <CardDash/>
        <CardDash/>
        <CardDash/>
      </div>
      <div className='flex flex-wrap justify-evenly py-4 items-center'>
        <Linechart/>
        <Traficchart/>
      </div>
      <div className='flex flex-wrap justify-evenly py-4 items-center'>
        <Barcharts/>
        <Piechart/>
      </div>
    </div>
        </Sidebar>
  )
}

export default Dashoardhome