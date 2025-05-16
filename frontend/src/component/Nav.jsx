import React from 'react'
import {NavLink} from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { GrBlog } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";


const linkCSS = 'flex gap-1 items-center text-xl'

export default function Nav() {
  return (
    <div className='mt-8 flex flex-col gap-2'>
        <NavLink to={'/'} className={linkCSS}><MdHome /> <span>Home</span></NavLink>
        <NavLink to={'/categories'} className={linkCSS}><TbCategory /> <span>Categories</span></NavLink>
        <NavLink to={'/blogs'} className={linkCSS}><GrBlog /> <span>Blogs</span></NavLink>
        <NavLink to={'/comments'} className={linkCSS}><FaRegComments /> <span>Comments</span></NavLink>
        <NavLink to={'/users'} className={linkCSS}><FiUsers /> <span>Users</span></NavLink>
    </div>
  )
}
