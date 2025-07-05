import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'

import routerUser from "./router/userRouter.js";
import routerBlog from "./router/blogRouter.js";

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api/user", routerUser);
app.use("/api/blog", routerBlog)

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI).then(() =>
  app.listen(port, () => {
    console.log("running on port", port);
  })
);
