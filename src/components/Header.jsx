import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black/20 px-24 w-full py-2">
      <div className="flex justify-between">
        <div>
          <Link to={"/"}>
            <img
              className="h-12 cursor-pointer"
              src="src/assets/movix-logo.svg"
            />
          </Link>
        </div>
        <div className="flex gap-x-6 items-center">
          <Link to={"/movies"}>
            <div className="text-white text-lg cursor-pointer">Movies</div>
          </Link>
          <Link to={"/tv-shows"}>
            <div className="text-white text-lg cursor-pointer">TV Shows</div>
          </Link>
          <div className="text-white text-lg cursor-pointer">
            <IoMdSearch size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
