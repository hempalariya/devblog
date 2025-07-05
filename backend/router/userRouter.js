import express from 'express'
import {createNewUser, userLogin} from '../controller/userController.js'

const routerUser = express.Router()

// router.get('/', getAllUser)

routerUser.post('/', createNewUser)
routerUser.post('/login', userLogin)



export default routerUser
