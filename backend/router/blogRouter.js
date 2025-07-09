import express from 'express'

import { createBlog, getAllBlog } from '../controller/blogController.js'
import { protect } from '../middleware/auth.js'



const routerBlog = express.Router()

routerBlog.get('/', getAllBlog)
routerBlog.post('/',protect, createBlog)

export default routerBlog