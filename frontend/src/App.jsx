import React from "react";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SingUp";
import CreateBlog from "./pages/CreateBlog";
import Blog from "./pages/Blog";
import UserBlogs from "./pages/UserBlogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blogs/create-blog" element={<CreateBlog/>}/>
          <Route path = "blog/blogs" element = {<UserBlogs/>} />
          <Route path="blog/:id" element = {<Blog />}/>
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
