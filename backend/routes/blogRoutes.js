import express from 'express'
import { getAllBlogs, createBlog, getBlog, updateBlog } from '../controllers/blogController'

const router = express.Router()

router.post('/blog/new-blog', createBlog)

router.get('blog', getAllBlogs)

router.get('blog/:id', getBlog)

router.patch('blog/:id', updateBlog)