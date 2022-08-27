import * as React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const [navbar, setNavbar] = React.useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-[#00df9a] w-full text-3xl font-bold">TAILWIND.</h1>
      <ul className=" hidden md:flex uppercase">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!navbar ?  <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>

      <div
        className={
          !navbar
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className="text-[#00df9a] w-full text-3xl font-bold m-4">
          TAILWIND
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
