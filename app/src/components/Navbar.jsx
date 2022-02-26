import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggle] = useState(false);

  return (
    <nav className="w-full md:justify-center flex justify-between items-center p-4 ">
      <div className="md:flex-[0.25] flex-initial justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="w-15 cursor-pointer image-width"
        />
      </div>
      <ul className="text-white md:flex hidden flex-initial justify-between items-center list-none">
        {["Home", "Future", "Web3.0", "Wallet"].map((each, index) => (
          <NavbarItems key={each + index} title={each} />
        ))}
        <li className="bg-[#4f36be]  py-2 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#703ecc] flex md:mx-16 justify-center items-center text-xl">
          Login
        </li>
        <span className="flex h-3 w-3 -ml-16 -mt-[45px]">
            <span className="animate-ping relative inline-flex h-full w-full rounded-full bg-[#703ecc] opacity-75"></span>
            <span className=" absolute inline-flex rounded-full h-3 w-3 bg-[#703ecc]"></span>
          </span>
      </ul>
      <li className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer "
            onClick={() => setToggle(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggle(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <ul className=" z-40 fixed top-0 -right-2 p-3 w-[100vw] h-screen shadow-2xl md:hidden list:none flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in ">
            <li className="w-full text-xl my-2 flex justify-center items-center">
              <AiOutlineClose
              fontSize={28}
                className="text-gray-300 md:hidden cursor-pointer "
                onClick={() => setToggle(!toggleMenu)}
              />
            </li>
            {["Home", "Future", "Web3.0", "Wallet"].map((each, index) => (
              <NavbarItems
                key={each + index}
                title={each}
                props="text-lg my-2"
              />
            ))}
          </ul>
        )}
      </li>
    </nav>
  );
};
const NavbarItems = ({ title, props }) => {
  return (
    <li
      className={`underline decoration-sky-500 text-2xl mx-4 cursor-pointer hover:text-sky-400 ${props}`}
    >
      {title}
    </li>
  );
};
export default Navbar;
