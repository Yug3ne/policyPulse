import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-12 flex justify-between items-center p-4 bg-lGray">
      {/* logo */}
      <div className="flex items-center justify-center cursor-pointer">
        <span className="text-coral text-2xl font-pRegular">Policy</span>
        <h1 className="text-xl text-rBlue font-bold">Pulse</h1>
      </div>
      {/* center navigatiom */}
      <div className="hidden md:flex items-center gap-8 cursor-pointer ">
        <Link>Features</Link>
        <Link>About</Link>
        <Link>Strategy</Link>
        <Link>Mission</Link>
      </div>
      {/* right menus */}
      <div className="flex items-center justify-center gap-3">
        <button className="p-2  bg-coral rounded-xl font-pRegular ">
          Donate
        </button>
        <button className="p-2 bg-rBlue rounded-xl text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
