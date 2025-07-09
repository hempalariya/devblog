import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

export default function Card({blog}) {

  console.log(blog)

  return (
    <div className="shadow-sm rounded-lg">
      <div className="h-[200px]">image</div>
      <div>
        <div className="flex justify-between bg-blue-400 p-1">
          <span>
            5 <CiHeart />
          </span>{" "}
          <span>
            2 <FaRegCommentAlt />
          </span>
          <button>
            <IoIosMore />
          </button>
        </div>
        <div className="flex flex-col gap-2 p-1">
          <h1 className="text-2xl ">{blog.title}</h1>
          <p className="text-xl">{blog.description}</p>
          <p className="line-clamp-3">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </p>
        </div>
      </div>
    </div>
  );
}
