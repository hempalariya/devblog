import Like from "../models/likes.js";

export const getLikes = async (req, res) => {
  const { blogId } = req.params;
  try {
    const likeCount = await Like.countDocuments({ blog: blogId });
    const likedUsers = await Like.find({ blog: blogId }).populate("user", "name");

    return res.status(200).json({
      blogId,
      totalLikes: likeCount,
      likedBy: likedUsers,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
};

export const createLike = async (req, res) => {
  console.log(req.body)
  const { blogId } = req.body;
  const userId = req.user.id

  try {
    const existingLike = await Like.findOne({blog: blogId, user: userId})

    if(existingLike){
      console.log(existingLike)
      await Like.deleteOne({_id: existingLike._id})
    }
    const newLike = await Like.create({blog: blogId, user: userId})
    // return res.status(201).json({messege: 'Blog liked', like: newLike})
  } catch (error) {
    return res.status(500).json({error: 'Something went wrong'})
  }
};
 