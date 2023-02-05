const yup = require("yup")

const loginBodySchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
    'Must contain 8 characters, one uppercase and one lowercase'
  ),
})

module.exports = { loginBodySchema }
