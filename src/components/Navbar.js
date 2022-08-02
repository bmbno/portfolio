import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 sticky drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Gabe Ng</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="mr-4 px-8 py-3">
            <a
              href="https://linkedin.com/in/gng1032"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
          <button className="px-8 py-3">
            <a
              href="https://github.com/bmbno"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/about">About</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/contact">Contact</Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4">
            <a
              href="https://linkedin.com/in/gng1032"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
          <button className="px-8 py-3">
            <a
              href="https://github.com/bmbno"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
