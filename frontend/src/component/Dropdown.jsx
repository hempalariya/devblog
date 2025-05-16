import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import Button from "../utils/Button";
import { showTost } from "../helpers/showToast";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/user/user.slice";

export default function Dropdown({ user, onLogout }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/logout`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      if (!response.ok) {
        return showTost("error", data.message);
      }

      dispatch(removeUser());
      onLogout();
      navigate("/");
      showTost("success", data.message);
    } catch (error) {
      showTost("error", error.message);
    }
  }

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-4 z-20">
      <div className="mb-3">
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to="/profile"
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
        >
          <CiUser /> Profile
        </Link>
        <Link
          to="/create-blog"
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
        >
          <LuPlus /> Create Blog
        </Link>
        <Button
          className="flex items-center gap-2 w-full text-left hover:bg-gray-100 p-2 rounded-md"
          onClick={handleLogout}
        >
          <FiLogOut /> Sign Out
        </Button>
      </div>
    </div>
  );
}
