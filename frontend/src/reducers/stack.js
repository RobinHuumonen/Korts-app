import stack from '../services/stack'
import { setNotification } from './notification'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_STACKS':
      return [...action.data]
    case 'CREATE_STACK':
      return [...state, action.data]
    case 'REMOVE_STACK':
      return [...state].filter(s => s.id !== action.data)
    case 'UPDATE_STACK':
      return [...state].map(s =>
        s.id === action.data.id ? action.data : s
      )
    default:
      return state
  }
}

export const removeStack = (currentStack) => {
  return async dispatch => {
    try {
      await stack.remove(currentStack.id)

      dispatch({
        type: 'REMOVE_STACK',
        data: currentStack.id
      })

      dispatch(setNotification(`${currentStack.stack} removed`, 5))

    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export const createStackAndCard = (stackAndCard) => {
  return async dispatch => {
    try {
      const data = await stack.create(stackAndCard)
      dispatch({
        type: "CREATE_STACK",
        data
      })

      dispatch(setNotification(`${data.stack} created`, 5))
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export const updateStack = (currentStack, updatedCard) => {
  return async dispatch => {
    try {
      const id = currentStack.id
      const dataToServer = {
        stack: currentStack.stack,
        flashcard : {
          hint: updatedCard.hint,
          answer: updatedCard.answer,
          plusses: updatedCard.plusses,
          minuses: updatedCard.minuses
        }
      }
      
      const data = await stack.update(id, dataToServer)

      dispatch({
        type: "UPDATE_STACK",
        data
      })
  
      dispatch(setNotification(`${currentStack.stack} altered`, 5))

    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export const renameStack = (updatedStack, oldName) => {
  return async dispatch => {
    try {
      const data = await stack.update(updatedStack.id, updatedStack)
      dispatch({
        type: "UPDATE_STACK",
        data
      })
      dispatch(setNotification(`${oldName} renamed to ${updatedStack.stack}`, 5))
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export const initStacks = (user) => {
  return async dispatch => {
    try {
      const data = await stack.getAll()
      if (user) {
        dispatch({
          type: 'INIT_STACKS',
          data: data.filter(s => s.user.username === user.username)
        })
      }
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}


export default reducer