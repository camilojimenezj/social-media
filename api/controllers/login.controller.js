const { loginService } = require("../services/login.service")

const loginController = async (req, res) => {
  const { email, password } = req.body
  
  try {
    
    const response = await loginService(email, password)
  
    res.status(200).json(response)
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { loginController }
