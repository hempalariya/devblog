import express from 'express'

import { createBlog } from '../controller/blogController.js'
import { protect } from '../middleware/auth.js'



const routerBlog = express.Router()


routerBlog.post('/',protect, createBlog)

export default routerBlog