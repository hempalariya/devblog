import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Button from "../utils/Button";

export default function Topbar() {
  const { isLoggedIn, user } = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between px-8 py-4 relative">
      <form action="#">
        <div className="flex items-center gap-2 text-xl">
          <input
            type="text"
            placeholder="Search for blog"
            className="border border-blue-500 outline-none px-4 py-2 rounded-3xl"
          />
          <IoMdSearch className="text-3xl text-blue-500" />
        </div>
      </form>

      {!isLoggedIn ? (
        <Link
          to="/signin"
          className="flex gap-1 items-center bg-blue-500 px-4 py-2 rounded-3xl text-xl text-white"
        >
          <MdLogin />
          <span>Sign In</span>
        </Link>
      ) : (
        <div className="relative">
          <Button
            className="flex gap-1 items-center px-4 py-2 rounded-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaRegUserCircle className="text-3xl" />
          </Button>
          {isOpen && (
            <div ref={dropdownRef}>
              <Dropdown user={user} onLogout={() => setIsOpen(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
