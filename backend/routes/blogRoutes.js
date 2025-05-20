import express from 'express'
import { getAllBlogs, createBlog, getBlog, updateBlog } from '../controllers/blogController.js'

const router = express.Router()

router.post('/new-blog', createBlog)

router.get('/blogs', getAllBlogs)

router.get('/blog/:id', getBlog)

router.patch('/blog/:id', updateBlog) 

export default router