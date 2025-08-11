import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    req: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    req: true
  },
  comment: {
    type: String,
    req: true
  }
}, {timestamps: true});

const Comment = mongoose.model("Comment", commentSchema)

export default Comment
