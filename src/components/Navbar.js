import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-neutral-900 sticky drop-shadow">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-neutral-100">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">
            <Link to="/portfolio">Gabe Ng</Link>
          </h1>
          <ul className="hidden md:flex">
            <li>
              <button>
                <Link to="/portfolio">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/portfolio/projects">Projects</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/portfolio/about">About</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/portfolio/work">Work</Link>
              </button>
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
              GitHub
            </a>
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 text-neutral-100" />
          ) : (
            <XIcon className="w-5 text-neutral-100" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-neutral-800 w-full px-8 text-neutral-100 text-center md:hidden flex flex-col"
        }
      >
        <li className="w-full" onClick={handleClick}>
          <button className="px-8 py-3 w-full">
            <Link to="/portfolio">Home</Link>
          </button>
        </li>
        <li className="w-full" onClick={handleClick}>
          <button className="px-8 py-3 w-full">
            <Link to="/portfolio/projects">Projects</Link>
          </button>
        </li>
        <li className="w-full" onClick={handleClick}>
          <button className="px-8 py-3 w-full">
            <Link to="/portfolio/about">About</Link>
          </button>
        </li>
        <li className="w-full" onClick={handleClick}>
          <button className="px-8 py-3 w-full">
            <Link to="/portfolio/work">Work</Link>
          </button>
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
              GitHub
            </a>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
