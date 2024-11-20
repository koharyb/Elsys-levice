import React from 'react'
import elsysImage from "../assets/elsys.jpeg";

const Footer = () => {
  return (
    <div>
    <div id="Footer" className="flex flex-col items-center justify-center mt-44">
      <h1 className="text-3xl text-[#a61d9f] font-bold underline">footer</h1>
      <p className='text-3xl text-[#a61d9f] font-bold underline'>created by B.K</p>
      <img src={elsysImage} alt="Elsys" className="w-12 h-auto" />
    </div>
  </div>
  )
}

export default Footer