import Blog from "../models/blog.js";

export const getAllBlogs = async(req, res) => {

}

export const createBlog  = async(req, res) =>{
    const {title, description, blogData } = req.body

    try{
        const existingTitle = await Blog.findOne({
            title
        })

        if(existingTitle){
            return res.status(409).json({error: 'A Blog with the title already exists.'})
        }

        const blog = await Blog.create({
            title, description, blogData
        })

        res.status(200).json(blog)

    }catch (error){
        console.error(error)
        res.status(500).json({error: "server error"})
    }
}

export const getBlog = async(req, res) => {

}

export const updateBlog = async(req, res) => {
    
}