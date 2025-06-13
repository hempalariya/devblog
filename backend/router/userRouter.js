import express from 'express'
import {createNewUser, userLogin} from '../controller/userController.js'

const router = express.Router()

// router.get('/', getAllUser)

router.post('/', createNewUser)
router.post('/login', userLogin)



export default router
