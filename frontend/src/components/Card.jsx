import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import noImage from "../assets/no-image.png";
import Like from "./Like";

export default function Card({ blog }) {
  let image;
  if (blog.image) {
    image = blog.image;
  } else {
    image = noImage;
  }

  let date = new Date(blog.createdAt);
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
    <Link to={`/blog/${blog._id}`}>
      <div className="relative shadow-sm shadow-blue-200 rounded-lg p-5 transition-all hover:scale-103">
        <div className="absolute left-0 top-0 bg-blue-400 text-white text-md font-bold flex flex-col justify-center items-center p-1">
          <p>{blogDate}</p>
          <p>{blogMonth}</p>
          <p>{blogYear}</p>
        </div>
        <div className="h-[200px] flex justify-center">
          <img src={image} alt="" className="h-full" />
        </div>
        <div>
          <div className="flex flex-col gap-2 p-1">
            <h1 className="text-2xl ">{blog.title}</h1>
          </div>
        </div>
        <Like btnClass="absolute top-3 right-3" blogId={blog._id}/>
      </div>
    </Link>
  );
}
