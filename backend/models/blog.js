import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
    },
    content:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Blog = mongoose.model("Blog", blogSchema)
export default Blog