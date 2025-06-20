import React from "react";
import { Link } from "react-router-dom";


import Dropdown from "./Dropdown";

import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between h-16">
      <Link to="/" className="h-full">
        <img src={logo} alt="" className="h-full" />
      </Link>
      <div className="flex items-center gap-10">
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Blog or Category"
            className="outline-0 border-b-1 border-blue-400 p-1"
          />
        </form>
        <div className="relative">
          <FaRegUser
            className="cursor-pointer text-2xl"
            onClick={() => {
              setDropdown((pre) => !pre);
            }}
          />
          {dropdown && <Dropdown />}
        </div>
      </div>
    </div>
  );
}
