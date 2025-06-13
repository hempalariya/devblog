import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createNewUser = async (req, res) => {
  console.log(req.body);
  const { name, email, mobile, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ error: "Password and confirmpassword did not match" });

    const existingEmail = await User.findOne({ email });
    const existingMobile = await User.findOne({ mobile });

    if (existingEmail)
      return res.status(400).json({ error: "email already exist" });
    if (existingMobile)
      return res.status(400).json({ error: "mobile no already exist" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });
    const token = createToken(user._id);
    res.status(200).json({
      id: user._id,
      name,
      email,
      mobile,
      token,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const userLogin = async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [
        { email: userId },
        { mobile: !isNaN(userId) ? Number(userId) : null },
      ],
    });

    if (!user)
      return res.status(404).json({ error: "Invalid User Id or Password" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(404).json({ error: "Invalid User Id or Password" });

    const token = createToken(user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
