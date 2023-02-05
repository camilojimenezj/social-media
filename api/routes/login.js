const loginRouter = require('express').Router()
const { loginController } = require('../controllers/login.controller')
const validate = require('../middlewares/validationMiddleware')
const { loginBodySchema } = require('../validation/login.validation')

loginRouter.post('/', validate(loginBodySchema), loginController)

module.exports = loginRouter