const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  name: String,
  description: String,
  img: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id

    delete returnedObject.password
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('users', userSchema)