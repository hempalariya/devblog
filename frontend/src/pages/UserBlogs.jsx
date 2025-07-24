import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogRow from "../components/BlogRow";

export default function UserBlogs() {
  const [blogs, setBlogs] = useState([])

  const token = useSelector((state) => state.user.user.token)



  useEffect(() =>{
    const fetchUserBlog = async () =>{
      try {
        const response = await fetch("http://localhost:3000/api/blog/blogs", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json()
        setBlogs(data)
      } catch (error) {
        console.log(error)
      }
  
    }
    fetchUserBlog()
  }, [])

  return <div className="flex-1 flex content-center items-center">
      <div className="w-full">
        {blogs.map((blog) => {
          return <BlogRow blog = {blog} key={blog.createdAt}/>
        })}
      </div>
  </div>;
}
