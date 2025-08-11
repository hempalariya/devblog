import express from 'express'

import { createBlog, getAllBlog, getBlog, getAllUserBlog, deleteUserBlog, updateBlog } from '../controller/blogController.js'
import { protect } from '../middleware/auth.js'



const routerBlog = express.Router()

routerBlog.get('/blogs', protect, getAllUserBlog)
routerBlog.get('/', getAllBlog)
routerBlog.get('/:id', getBlog)
routerBlog.post('/',protect, createBlog)
routerBlog.delete('/:id', protect, deleteUserBlog)
routerBlog.put('/:id', updateBlog)

export default routerBlog