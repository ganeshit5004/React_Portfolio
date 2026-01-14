import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const nav = ["Home", "About", "Project", "Skills", "Contact"];

  return (
    <div className="fixed w-full h-20 z-30 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Ganesh S
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          {nav.map((n, i) => (
            <li key={i} className="hover:text-cyan-400 cursor-pointer duration-200">
              <Link to={n} smooth duration={500}>{n}</Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setOpen(!open)} className="md:hidden text-white z-50">
          {open ? <FaTimes size={28}/> : <FaBars size={28}/>}
        </div>

        {open && (
          <ul className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-10 text-3xl">
            {nav.map((n, i) => (
              <li key={i} className="hover:text-cyan-400">
                <Link to={n} smooth duration={500} onClick={()=>setOpen(false)}>{n}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
