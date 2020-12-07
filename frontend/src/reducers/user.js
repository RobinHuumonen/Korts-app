import stack from '../services/stack'
import login from '../services/login' 
import { setNotification } from './notification'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT':
      return action.loggedUser
    case 'LOGIN':
      return { ...action.user }
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const initUser = () => {
  return async dispatch => {
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    if (loggedUser) {
      stack.setToken(loggedUser.token)
      dispatch({
        type: 'INIT',
        loggedUser
      })
    }
  }
}

export const onLogOut = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedUser')
    stack.nullToken()
    dispatch({ type: 'LOGOUT' })
  }
}

export const onLogIn = loginData => {
  return async dispatch => {
    try {
      const user = await login.login(loginData)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      stack.setToken(user.token)
      dispatch(
        setNotification(
          `User ${user.username} signed in successfully`, 5)
      )
      dispatch({
        type: 'LOGIN',
        user
      })
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export default reducer