const postRouter = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

postRouter.get('/', async (req, res) => {
  const posts = await Post.find({}).populate('user', {
    email: 1,
    name: 1
  })
  res.status(200).json(posts)
})

postRouter.post('/', async (req, res, next) => {
  try {
    const { content, userId } = req.body
    const img = req.files?.img.tempFilePath

    const user = await User.findById(userId)

    const newPostInfo = {
      content,
      date: Date.now(),
      user: user._id
    }

    if(img) newPostInfo.img = img

    const newPost = new Post(newPostInfo)

    const savedPost = await newPost.save()
    user.posts = user.posts.concat(savedPost._id)
    await user.save()
    res.status(201).json(savedPost)
  } catch (error) {
    next(error)
  }
})

postRouter.put('/:id/likes', async (req, res, next) => {
  const id = req.params.id
  const { type } = req.body
  try {
    const post = await Post.findById(id)
    if (type === '+') { 
      if (!post.likes) {
        post.likes = 1
      } else {
        post.likes += 1
      }
    } else {
      if (!post.likes) {
        post.likes = 0
      } else {
        post.likes += -1
      }
    }

    const updatedPost = await post.save()
    res.status(200).json(updatedPost)

  } catch (error) {
    next(error)
  }
})

postRouter.put(postRouter.put('/:id/comments', async (req, res, next) => {
  const id = req.params.id
  const { content, name } = req.body
  try {
    const post = await Post.findById(id)
  
    post.comments = post.comments.concat({ content, name })

    const updatedPost = await post.save()
    res.status(200).json(updatedPost)

  } catch (error) {
    next(error)
  }
}))


module.exports = postRouter