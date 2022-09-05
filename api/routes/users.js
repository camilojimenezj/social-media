const userRouter = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')

userRouter.get('/', async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
})

userRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id).populate('posts', {
    content: 1,
    img: 1,
    likes: 1,
    date: 1,
    comments: 1
  })
  res.status(200).json(user)
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

userRouter.put('/:id', async (req, res) => {
  const img = req.files?.img.tempFilePath
  const id = req.params.id
  let newUserInfo
  if (img) {
    newUserInfo = {
      ...req.body,
      img
    }
  } else {
    newUserInfo = { ...req.body }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true })
  
    res.status(200).json(updatedUser)
    
  } catch (error) {
    console.error(error)
  }

})

module.exports = userRouter