import React, { useState } from "react";
import Editor from "../components/Editor";

const labelCSS = "block text-xl";
const inputCSS =
  "w-full border-1 border-blue-400 rounded-md px-2 py-1 text-xl outline-0";
const controllerCss = "mb-2";

export default function CreateBlog() {

  const [blogContent, setBlogContent] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
  });

  

  function handleChange(e) {
    const { name, value } = e.target;
    setBlogContent((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddBlog(e){
    e.preventDefault()
    console.log(data)
  }

  const handleEditorChange = (html) => {
    setBlogContent((prev) => ({ ...prev, content: html }));
  };

  return (
    <div className="flex-1 py-5">
      <div>
        <form action="">
          <div className={controllerCss}>
            <label htmlFor="title" className={labelCSS}>
              Title
            </label>
            <input
              name="title"
              value={blogContent.title}
              type="text"
              id="title"
              className={inputCSS}
              onChange={handleChange}
            />
          </div>
          <div className={controllerCss}>
            <label htmlFor="description" className={labelCSS}>
              Description
            </label>
            <input
              name="description"
              value={blogContent.description}
              type="text"
              id="description"
              className={inputCSS}
              onChange={handleChange}
            />
          </div>
          <div className={controllerCss}>
            <label htmlFor="category" className="text-xl mr-10 outline-0">
              Category
            </label>
            <select
              name="category"
              value={blogContent.category}
              id="category"
              className="text-xl"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="abc">abc</option>
              <option value="xyz">xyz</option>
            </select>
          </div>
          <div className={controllerCss}>
            <Editor onChange={handleEditorChange} />
          </div>
          <button className="w-full bg-blue-400 rounded-2xl text-white text-xl p-2">
            {" "}
            Add{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
