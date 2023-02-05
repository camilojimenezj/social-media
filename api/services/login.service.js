const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginService = async (email, password) => {
  
  const user = await User.findOne({ email })
  
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.password)
  
  if (!(user && passwordCorrect)) {
    throw new Error('invalid email or password')
  }
  
  const userForToken = {
    email: user.email,
    name: user.name,
    id: user._id
  }
  
  try {

    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 })
  
    return { token, user: { name: user.name, email: user.email, id: user._id, img: user.img } }

  } catch (error) {
    throw new Error('Error while loging in')
  }
}

module.exports = { loginService }
