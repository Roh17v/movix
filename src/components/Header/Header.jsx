import React, { useState } from "react";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./Header.css";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav
      className={`w-full h-[60px] ease-in transition-all duration-500 ${
        isOpen ? " bg-[#020c1b]" : "bg-black/20"
      }`}
    >
      <div className="flex justify-between py-2 md:px-24 px-8">
        <div>
          <Link to={"/"}>
            <img
              className="h-10 md:h-[50px] cursor-pointer"
              src="src/assets/movix-logo.svg"
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-x-8">
          <IoMdSearch size={25} color="white" />
          {isOpen ? (
            <IoMdClose
              size={25}
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setisOpen(!isOpen);
              }}
            />
          ) : (
            <IoMdMenu
              size={25}
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setisOpen(!isOpen);
              }}
            />
          )}
        </div>
        <ul
          className={`${
            isOpen ? "mobile-view" : " hidden md:flex items-center gap-8"
          }`}
        >
          <li>
            <NavLink
              to={"/movies"}
              className="text-xl text-white cursor-pointer rounded p-2 nav-link"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/tv-shows"}
              className="text-xl text-white cursor-pointer rounded p-2 nav-link"
            >
              TVShows
            </NavLink>
          </li>
          <li className={isOpen && "hidden"}>
            <IoMdSearch size={25} color="white" className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
