const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  img: String,
  likes: [Schema.Types.ObjectId],
  date: Date,
  comments: [{
    content: String,
    userId: Schema.Types.ObjectId
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
