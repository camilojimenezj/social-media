const router = require('express').Router()
const userRouter = require('./users')
const postRouter = require('./posts')
const loginRouter = require('./login')
const notFound = require('../middlewares/notFound')
const errorHandler = require('../middlewares/errorHandler')

// Users
router.use('/api/users', userRouter)

// Posts
router.use('/api/posts', postRouter)

// Login
router.use('/api/login', loginRouter)

// Route not found
router.use(notFound)

// Error handler
router.use(errorHandler)

module.exports = router