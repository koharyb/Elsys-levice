import React from "react";
import elsysImage from "../assets/elsys.jpeg";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row flex-start gap-6 justify-start bg-[#0d1a34] max-sm:hidden">
        <img src={elsysImage} alt="Elsys" className="w-28 h-auto" />
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">about us</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">contacts</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">galerry</li>
        <li className=" bg-[#5b9d55] hover:bg-[#5bacf7]">footer</li>
      </ul>

      <div className="grid mt-44 justify-center border-solid border-[#000000] border-[2px] m-4 max-sm:hidden">
        <a
          className="w-44 h-10 bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href=""
        >
          home
        </a>
        <a
          className="w-44 h-10 bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href="Footer"
        >
          about us
        </a>
        <a
          className="w-44 h-10 bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href=""
        >
          contacts
        </a>
        <a
          className="w-44 h-10 bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href=""
        >
          galerry
        </a>
        <a
          className="w-44 h-10 bg-[#5b9d55] hover:bg-[#5bacf7] justify-center text-xl"
          href=""
        >
          footer
        </a>

        <img src={elsysImage} alt="Elsys" className="w-44 h-auto" />
      </div>
    </div>
  );
};

export default Navbar;
