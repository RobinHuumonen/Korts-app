const mongoose = require('mongoose')

const flashCardSchema = new mongoose.Schema(
  {
    hint: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    plusses: {
      type: Number,
      required: true
    },
    minuses: {
      type: Number,
      required: true
    },

  }
)

const stackSchema = new mongoose.Schema({
  stack: {
    type: String,
    required: true,
  },
  flashcards: [flashCardSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

stackSchema.set('toJSON', {
transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id.toString()
  delete returnedObject._id
  delete returnedObject.__v
}
})

flashCardSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
  })

module.exports = mongoose.model('Stack', stackSchema)