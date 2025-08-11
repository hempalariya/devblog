import React from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useToast } from "../store/ToastContext";



const heartClass = "text-2xl text-red-600 hover:scale-110";

export default function Like({ blogId, like, btnClass = '' }) {
    const {showToast} = useToast()
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const token = useSelector((state) => state.user.user.token)

    const handleLike = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(blogId)
        if(!isLoggedIn) showToast('You are not Logged In')

            try {
                const response = await fetch('http://localhost:3000/api/blog/like', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({blogId})
                })

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
    }


  return (
    <button
      type="button"
      className={`${btnClass}`}
      onClick={handleLike}
    >
      {like ? (
        <FaHeart className={heartClass} />
      ) : (
        <CiHeart className={heartClass} />
      )}
    </button>
  );
}
