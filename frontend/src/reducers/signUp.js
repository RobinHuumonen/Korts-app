import userService from '../services/user'
import { setNotification } from './notification'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'NULL_SIGN_UP_USER':
      return null
    case 'ON_SIGNUP':
      return action.newUser
    default:
      return state
  }
}

export const setNewUserNull = () => {
  return {
    type: 'NULL_SIGN_UP_USER',
  }
}

export const onSignUp = (object) => {
  return async dispatch => {
    try {
      const newUser = await userService.signUp(object)
      dispatch({
        type: 'ON_SIGNUP',
        newUser
      })
    } catch (error) {
      console.log(error.message);
      dispatch(setNotification(error.message, 5))
    }
  }

}



export default reducer