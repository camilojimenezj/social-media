const postRouter = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')
const uploadImage = require('../utils/cloudinary')
const fs = require('fs-extra')

postRouter.get('/', async (req, res) => {
  const posts = await Post.find({}).populate('user', {
    email: 1,
    name: 1,
    img: 1
  })
  res.status(200).json(posts)
})

postRouter.post('/', async (req, res, next) => {
  try {
    const { content, userId } = req.body
    
    let img = ''
    if (req.files) {
      const path = req.files.img.tempFilePath
      const imageUploaded = await uploadImage(path)
      await fs.unlink(path)
  
      img = imageUploaded.secure_url
    }

    const user = await User.findById(userId)

    const newPostInfo = {
      content,
      date: Date.now(),
      user: user._id
    }

    if(img) newPostInfo.img = img

    const newPost = new Post(newPostInfo)

    const savedPost = await newPost.save()
    const post = await Post.findById(savedPost._id).populate('user', {
    email: 1,
    name: 1,
    img: 1
  })
    user.posts = user.posts.concat(savedPost._id)
    await user.save()
    res.status(201).json(post)
  } catch (error) {
    next(error)
  }
})

postRouter.put('/:id/likes', async (req, res, next) => {
  const id = req.params.id
  const { userId, type } = req.body
  try {
    const post = await Post.findById(id)
    if (type === '+') { 
      post.likes = post.likes.concat(userId)
    } else {
      post.likes = post.likes.filter(id => id != userId)
    }

    const updatedPost = await post.save()
    res.status(200).json(updatedPost)

  } catch (error) {
    next(error)
  }
})

postRouter.put(postRouter.put('/:id/comments', async (req, res, next) => {
  const id = req.params.id
  const { content, userId } = req.body
  try {
    const post = await Post.findById(id)
  
    post.comments = post.comments.concat({ content, userId })

    const updatedPost = await post.save()
    res.status(200).json(updatedPost)

  } catch (error) {
    next(error)
  }
}))


module.exports = postRouter