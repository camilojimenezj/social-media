const router = require('express').Router()
const userRouter = require('./users')
const notFound = require('../middlewares/notFound')

// Users
router.use('/api/users', userRouter)

// Route not found
router.use(notFound)

module.exports = router