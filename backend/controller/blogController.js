import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";

import Blog from "../models/blog.js";

const window = new JSDOM("").window;
const DOMPurify = createDomPurify(window);

export const getBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      throw new Error("Blog not found");
    }
    res.status(201).json(blog);
  } catch (error) {
    res.status(401).json(error.message);
  }
};

export const getAllBlog = async (req, res) => {
  console.log("get");
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  const { title, description, category, content } = req.body;

  const cleanContent = DOMPurify.sanitize(content);
  try {
    const blog = await Blog.create({
      user: req.user.id,
      title,
      description,
      category,
      content: cleanContent,
    });

    res.status(201).json({ title, description, category, content });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getAllUserBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(401).json({ error });
    console.log(error);
  }
};


export const deleteUserBlog = async (req, res) => {
  const id = req.params.id
  try{
    const blog = await Blog.findByIdAndDelete(id)
    if(!blog) throw new Error("Blog not found")
      console.log(blog)
      res.status(200).json(blog)
  }catch(error){
    res.status(400).json({error})
  }
};
