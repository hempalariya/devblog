import React, { useState } from "react";
import Card from "../utils/Card";
import Input from "../component/Input";
import Button from "../utils/Button";
import Editor from "../component/editor/Editor";
import { z } from "zod";


const signUpSchema = z.object({
  title: z.string().min(2, "Title should be at least two characters long"),
  description: z.string(),
  blogData: z.string().min(2, "Content must be at least 2 characters"),
});


export default function CreateBlog() {
  const [errors, setErrors] = useState({})
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    blogData: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditorChange = (value) => {
    setBlogData((prev) => ({
      ...prev,
      blogData: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    const result = signUpSchema.safeParse(blogData);

    if(!result.success){
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors);
    }else{
      setErrors({})

      const response = await fetch('http://localhost:5000/api/blog/new-blog', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData)
      })
      console.log(response)
    }

  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <Input
          type="text"
          placeholder="Blog Title"
          name="title"
          value={blogData.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Blog Description"
          name="description"
          value={blogData.description}
          onChange={handleChange}
        />
        <div className="h-36">
          <Editor
            className="h-[100%]"
            initialData={blogData.blogData}
            onChange={handleEditorChange}
          />
        </div>
        <Button className="bg-blue-400 text-white">Add Blog</Button>
      </form>
    </Card>
  );
}
