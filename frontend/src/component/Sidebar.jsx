import React from "react";
import logo from "../assets/logo.png";
import Nav from "./Nav";
import Categories from "./Categories";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[400px] border p-4">
      <div className="h-[40px]">
        <Link to={"/"}>
          <img src={logo} alt="logo image" className="h-full" />
        </Link>
      </div>
      <Nav />
      <Categories />
    </div>
  );
}
