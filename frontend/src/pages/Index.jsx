import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import BlogCard from "../component/BlogCard";
import { Link } from "react-router-dom";
export default function Index() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch("http://localhost:5000/api/blog/blogs");
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "failed to fetch blogs");
          return;
        }

        setBlogs(data);
      } catch (error) {
        setError("Something went wrong while fetching blogs");
      }
    }

    fetchBlog();
  }, []);

  console.log(blogs);
  return (
    <div className="p-8">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {blogs.map((blog) => {
            return (
              <Link key={blog._id} to={`/blog/${blog._id}`}>
                <BlogCard blog={blog} />;
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}


