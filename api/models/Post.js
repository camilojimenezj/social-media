const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  img: String,
  likes: Number,
  date: Date,
  comments: [{
    content: String,
    name: String
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Post', postSchema)
