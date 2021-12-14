import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'

// POST Register
router.route('/').post(registerUser)
// POST Login
router.route('/login').post(authUser)
// GET Profile
router.route('/profile').get(protect, getUserProfile)

export default router
