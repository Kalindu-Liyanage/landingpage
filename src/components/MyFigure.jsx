import React from 'react'
import myPic from '../asset/designer.png'

function MyFigure() {
  return (
    <div className='pr-100 flex jusitify-items-end relative'>
      <figure>
        <img src={myPic} alt="Kalindu" className='jusitify-items-end'/>
      </figure>

      <div className='bg-[#E95793] w-96 h-96 lg:w-[1000px] lg:h-[1000px] rounded-full absolute -right-32 -bottom-80 -z-10'>
      </div>

      
    </div>
  )
}

export default MyFigure