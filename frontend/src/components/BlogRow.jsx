import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BlogRow({ blog }) {
  const token = useSelector((state) => state.user.user.token);
  const navigate = useNavigate()

  let date = new Date(blog.createdAt);
  console.log(blog)
  
  const handleDelete = async () => {
    const id = blog._id;
    
    try {
      const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Something Went Wrong");

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleEdit = () => {
    navigate(`/edit/${blog._id}`)
  }


  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const blogDate = date.getDate();
  const blogMonth = months[date.getMonth()];
  const blogYear = date.getFullYear();

  return (
    <div className="flex w-3/4 justify-between items-center mx-auto bg-gray-300 rounded-md p-2 mb-3">
      <div className="text-center flex items-center gap-2">
        <p className="text-xl w-2/3">{blog.title}</p>
        <p className="text-sm">{`${blogDate}/${blogMonth}/${blogYear}`}</p>
      </div>
      <div className="flex gap-3">
        <span className="flex items-center gap-1">
          <GrLike /> 2
        </span>
        <span className="flex items-center gap-1">
          <FaRegComment /> 1{" "}
        </span>
      </div>
      <div className="flex gap-2 text-2xl">
        <button>
          <CiEdit onClick={handleEdit}/>
        </button>
        <button onClick={handleDelete}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
