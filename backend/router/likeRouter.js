import express from "express";
import { protect } from "../middleware/auth.js";
import { getLikes, createLike } from "../controller/likeController.js";

const routerLike = express.Router();

routerLike.get("/:blogId", protect, getLikes);
routerLike.post("/", protect, createLike);


export default routerLike