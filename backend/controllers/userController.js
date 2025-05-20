import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import User from "../models/user.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if email is already registered
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(409).json({ error: "email already registered" });
    }

  
    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({
      name: user.name,
      email: user.email,
      message: "Your account is created successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  //check if email exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid Credentials" });

  //check if password match
  const checkPassword = await bcryptjs.compare(password, user.password);

  if (!checkPassword)
    return res.status(400).json({ error: "Invalid Credentials" });

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
    process.env.JWT_SECRET 
  );

  res.cookie("access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    path: "/",
  });

  res.status(200).json({
    success: true,
    user,
    message: "Login successful",
  });
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
 