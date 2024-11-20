import React from 'react'
import el1 from "../assets/el1.jpg"
import el2 from "../assets/el2.jpg";
import el3 from "../assets/el3.jpeg";
import el4 from "../assets/el4.jpg";
import el5 from "../assets/el5.webp";

const Gallery = () => {
  return (
    <div>
    <div className="flex justify-start m-10">
      <h1 className="text-3xl text-[#a61d9f] font-bold underline">Gallery</h1>
      <img src={el1} alt="el1" className="w-12 h-auto" />
      <img src={el2} alt="el2" className="w-12 h-auto" />
      <img src={el3} alt="el3" className="w-12 h-auto" />
      <img src={el4} alt="el4" className="w-12 h-auto" />
      <img src={el5} alt="el5" className="w-12 h-auto" />



    </div>
  </div>
  )
}

export default Gallery