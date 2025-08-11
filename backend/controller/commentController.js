import Comment from "../models/comments.js";


export const createComment = async (req, res) => {
    const {blogId, comment} = req.body
    const userId = req.user.id
    try{
        const newComment = await Comment.create({
            blog: blogId,
            user: userId,
            comment
        })

       return res.status(200).json({
            blog: blogId,
            user: userId,
            comment
        })
    } catch(error){
        res.status(400).json({error: 'something went wrong'})
    }
}

export const getComments = async (req, res) => {
    const {blogId} = req.params
    try {
        const commentCount = await Comment.countDocuments({blog: blogId})
        const comments = await Comment.find({blog: blogId})
        res.status(200).json({
            blogId,
            totalComment: commentCount,
            comments
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'something went wrong'})
    }
}