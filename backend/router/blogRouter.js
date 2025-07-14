import express from 'express'

import { createBlog, getAllBlog, getBlog } from '../controller/blogController.js'
import { protect } from '../middleware/auth.js'



const routerBlog = express.Router()

routerBlog.get('/', getAllBlog)
routerBlog.get('/:id', getBlog)
routerBlog.post('/',protect, createBlog)

export default routerBlog