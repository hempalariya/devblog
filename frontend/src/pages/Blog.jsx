import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImage from "../assets/no-image.png";
import { useSelector } from "react-redux";
import Button from "../components/Button";

export default function Blog() {
  const [blog, setBlog] = useState({});

  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  let date = new Date(blog.createdAt);
  date = date.toLocaleDateString("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  let image;
  if (blog.image) {
    image = blog.image;
  } else {
    image = noImage;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/blog/${id}`);

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex-1">
      <div>{date}</div>
      <div className="text-center ">
        <img src={image} alt="" className="w-[25%] mx-auto" />
      </div>
      <main>
        <h1 className="text-3xl font-bold capitalize">{blog.title}</h1>
        <p>{blog.description}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </main>
      {isLoggedIn && <>
        <h1>Write Comment</h1>
        <textarea className="w-full border border-black resize-none"></textarea>
        <Button>Add Comment</Button>
      </>}
    </div>
  );
}
