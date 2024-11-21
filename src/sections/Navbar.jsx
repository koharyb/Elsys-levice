import React, {useState} from "react";
import elsysImage from "../assets/elsys.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // funkcia na togglovanie nav menu 

  const toggleNav = () => setNav(!nav);
  

  return (
    <div>
      {/* nav menu classic */}
      <ul className="flex flex-row flex-start gap-6 justify-start items-center bg-[#0d1a34] max-sm:hidden sticky top-0">
        <img src={elsysImage} alt="Elsys" className="w-28 h-auto" />
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">Home</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">About us</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">Contacts</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">Gallery</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">Footer</li>
        <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleNav} className="cursor-pointer ml-auto mr-10 text-[#cebaba] "/>
        
      </ul>

      {/* Mobile Nav toggle   */}
      <div className="">
        
      </div>

      {/* mobile/small nav menu */}

      { nav && (
        <div className="grid mt-44 justify-center border-solid border-[#000000] border-[2px] m-4 max-sm:hidden">

        <button onClick={toggleNav} className="w-44 h-10 flex items-center bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl">
        <FontAwesomeIcon icon={faXmark} size="2x" className="cursor-pointer text-black "/> 
        </button>

        <a className="w-44 h-10 flex items-center bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href="#home" onClick={() => toggleNav()}>
          Home
        </a>
        
        <a className="w-44 h-10 flex items-center bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href="#aboutus" onClick={() => toggleNav()}>
          About us 
        </a>

        <a className="w-44 h-10 flex items-center bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href="#contacts" onClick={() => toggleNav()}>
          Contans
        </a>

        <a className="w-44 h-10 flex items-center bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href="#gallery" onClick={() => toggleNav()}>
          Gallery
        </a>

        <a className="w-44 h-10 flex items-center bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href="#footer" onClick={() => toggleNav()}>
          Footer
        </a>
        
        <img src={elsysImage} alt="Elsys" className="w-44 h-auto" />
        </div>

      )


        
      }
      
    </div>
  );
};

export default Navbar;