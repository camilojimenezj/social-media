const userRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

userRouter.get('/', async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
})

userRouter.post('/', async (req, res) => {
  const { email, name, password } = req.body
  const user = await User.findOne({ email })

  if (user) return res.status(400).json({ error: 'email already taken' })

  const passwordHash = await bcrypt.hash(password, 10)
  const newUser = new User({
    email,
    name,
    password: passwordHash
  })
  const savedUser = await newUser.save()

  res.status(201).json(savedUser)
})

userRouter.put('/:id', async(req, res) => {
  /* const img = req.file */
  const id = req.params.id

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
  
    res.status(200).json(updatedUser)
    
  } catch (error) {
    console.error(error)
  }

})

module.exports = userRouter