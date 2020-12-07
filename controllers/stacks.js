const stacksRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Stack = require('../models/stack')
const User = require('../models/user')

stacksRouter.get('/', async (req, res) => {
  const stacks = await Stack
    .find({}).populate('user', { username: 1, id: 1 })

  res.json(stacks.map(stack => stack.toJSON()))
})

stacksRouter.get('/:id', async (req, res) => {
  const stack = await Stack.findById(req.params.id)
  if (stack) {
    res.json(stack.toJSON())
  } else {
    res.status(404).end()
  }
})

stacksRouter.delete('/:id', async (req, res) => {
  if (!req.token) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  const stack = await Stack.findById(req.params.id)
  const user = await User.findById(decodedToken.id)

  if (stack.user.toString() === user._id.toString()) {
    await Stack.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } else {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
})

stacksRouter.put('/:id', async (req, res, nxt) => {
  const body = req.body

  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const stack = await Stack.findById(req.params.id)
  
  if (stack.user.toString() === user._id.toString()) {

    if (!body.flashcard) {
      const updatedStack = await Stack.findByIdAndUpdate(req.params.id, { $set: { stack: body.stack, flashcards: stack.flashcards } }, { new: true })
      res.status(200).json(updatedStack.toJSON())  
    }

    const flashcardHasEntries = stack.flashcards[0]

    if (body.flashcard) {
      if (body.flashcard.plusses >= 3) {
        const updatedStack = await Stack.findByIdAndUpdate(req.params.id, { $set: { stack: body.stack }, $pull: { flashcards: { hint: body.flashcard.hint, answer: body.flashcard.answer }  } }, { new: true })
        res.status(200).json(updatedStack.toJSON())
        return
      }

      if (flashcardHasEntries) {
              
        const flashcardID = stack.flashcards.findIndex(e => e.hint === body.flashcard.hint && e.answer === body.flashcard.answer)
        const newFlashcards = stack.flashcards
        const newFlashcard = { hint: body.flashcard.hint, answer: body.flashcard.answer, plusses: body.flashcard.plusses, minuses: body.flashcard.minuses }
  
        if (flashcardID !== -1) {
          newFlashcards[flashcardID] = newFlashcard
        } else {
          newFlashcards.push(newFlashcard)
        }
  
        const updatedStack = await Stack.findByIdAndUpdate(req.params.id, { $set: { stack: body.stack, flashcards: newFlashcards } }, { new: true })
        res.status(200).json(updatedStack.toJSON())   
  
      } else {
        const updatedStack = await Stack.findByIdAndUpdate(req.params.id, { $set: { stack: body.stack, flashcards: body.flashcard } }, { new: true })
        res.status(200).json(updatedStack.toJSON())   
      }
    }

  } else {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

})

stacksRouter.post('/', async (req, res) => {
  const body = req.body

  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const stack = new Stack({
    stack: body.stack,
    user: user._id
  })

  if (body.flashcard) {
    stack.flashcards.push(body.flashcard)
  }
  const savedStack = await stack.save()
  user.stacks = user.stacks.concat(savedStack._id)
  await user.save()

  res.status(201).json(savedStack.toJSON())
})

module.exports = stacksRouter
