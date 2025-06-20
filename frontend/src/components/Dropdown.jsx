import React from "react";
import { Link } from "react-router-dom";

import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";


const flexClass = "flex gap-2 items-center";

export default function Dropdown() {

  let signedIn = false

  if(!signedIn) return <div className="absolute right-0 top-8 w-30 p-1 ring"><Link to={'signin'}><button>SignIn</button></Link></div>


  return (
    <div className="absolute right-0 top-8 w-30 p-1 ring">
      <h2 className="text-lg mb-2">Hem Palariya</h2>
      <div>
        <ul className="flex flex-col">
          <Link to="profile" className={`${flexClass}`}>
            <CgProfile /> Profile
          </Link>
          <Link to="" className={`${flexClass}`}>
            <FaBlog /> Blogs
          </Link>
        </ul>
        <button className={`${flexClass} cursor-pointer`}>
          <GoSignOut /> Sign Out
        </button>
      </div>
    </div>
  );
}
