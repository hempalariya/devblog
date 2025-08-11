import express from "express";
import { protect } from "../middleware/auth.js";
import { createComment, getComments } from "../controller/commentController.js";

const routerComment = express.Router();

routerComment.get("/:id", protect, getComments);
routerComment.post("/", protect, createComment);

export default routerComment; 
