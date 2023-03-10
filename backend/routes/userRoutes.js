<<<<<<< HEAD
const express = require('express')
const {registerUser,authUser,updateUserProfile}=require('../controllers/userControllers')
const router = express.Router()
const { protect } = require("../middlewares/authMiddlewares");



router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').post(protect, updateUserProfile)


=======
const express = require('express')
const {registerUser,authUser,updateUserProfile}=require('../controllers/userControllers')
const router = express.Router()
const { protect } = require("../middlewares/authMiddlewares");



router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').post(protect, updateUserProfile)


>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
module.exports = router;