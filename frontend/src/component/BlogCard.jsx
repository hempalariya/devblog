import React, { useState } from "react";
import { FaRegBookmark, FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export default function BlogCard({ blog }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="h-[300px] flex flex-col overflow-hidden rounded-md shadow-md group transition-all duration-500 relative">
      {/* Date tag */}
      <div className="absolute left-2 top-2 bg-blue-600 text-white text-center w-12 rounded-sm z-10">
        <h1 className="font-bold text-2xl">12</h1>
        <p className="text-sm">Aug</p>
        <p className="text-sm">2024</p>
      </div>

      {/* Image section */}
      <div className="flex-[0.7] bg-red-400 relative transition-all duration-500 group-hover:flex-[0.4] flex items-center justify-center text-white">
        <h1 className="text-3xl">No</h1>
        <h1 className="text-3xl">Image</h1>

        {/* Action Menu */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-blue-500 text-white transition-transform duration-500 transform origin-bottom ${
            showActions ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div className="flex justify-around p-3 text-xl">
            <button title="Bookmark"><FaRegBookmark /></button>
            <button title="Like"><FaRegHeart /></button>
            <button title="Comment"><FaRegComment /></button>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex-[0.3] transition-all duration-500 group-hover:flex-[0.6] flex flex-col justify-between bg-white">
        <div className="flex justify-between items-center px-3 py-2 text-sm">
          <span>John</span>
          <button onClick={() => setShowActions(prev => !prev)}>
            <BsThreeDots />
          </button>
        </div>
        <div className="px-3 pb-3 overflow-hidden">
          <h2 className="text-md font-semibold">{blog.title}</h2>
          <div className="max-h-0 group-hover:max-h-24 transition-all duration-500 overflow-hidden text-sm text-gray-700 pb-2">
            <p>{blog.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
