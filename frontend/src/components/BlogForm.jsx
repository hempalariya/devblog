import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Editor from "../components/Editor";
import { useToast } from "../store/ToastContext";
import { useNavigate } from "react-router-dom";

const labelCSS = "block text-xl";
const inputCSS =
  "w-full border-1 border-blue-400 rounded-md px-2 py-1 text-xl outline-0";
const controllerCss = "mb-2";

export default function BlogForm({ initialData = {}, isEdit = false }) {
  const [blogContent, setBlogContent] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
  });

  const navigate = useNavigate();

  const { showToast } = useToast();

  const token = useSelector((state) => state.user.user.token);

  console.log(initialData)
  useEffect(() => {
    if (isEdit && initialData) {
      setBlogContent(
        {
          title: initialData.title || "",
          description: initialData.description || "",
          category: initialData.category || "",
          content: initialData.content || "",
        },
        [initialData, isEdit]
      );
    }
  }, [isEdit, initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBlogContent((prev) => ({ ...prev, [name]: value }));
  }

  const handleEditorChange = (html) => {
    setBlogContent((prev) => ({ ...prev, content: html }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const url = isEdit ? `http://localhost:3000/api/blog/${initialData._id}` : `http://localhost:3000/api/blog`

      const method = isEdit ? "PUT" : "POST"
      const response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogContent),
      });

      const data = await response.json();

      if (!response.ok) {
        showToast(data.message, "Failed");
      }
      showToast("Blog Created");
      navigate("/");
    } catch (error) {
      showToast(error, "Failed");
    }
  }

  return (
    <div className="flex-1 py-5">
      <div>
        <form onSubmit={handleSubmit}>
          <div className={controllerCss}>
            <label htmlFor="title" className={labelCSS}>
              Title
            </label>
            <input
              name="title"
              value={blogContent.title}
              type="text"
              id="title"
              required
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
              required
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
              required
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
            {isEdit ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
