import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import signUpReducer from './reducers/signUp'
import notificationReducer from './reducers/notification'
import stacksReducer from './reducers/stack'
import userReducer from './reducers/user'


const reducer = combineReducers({
  user: userReducer,
  signUpUser: signUpReducer,
  stacks: stacksReducer,
  notification: notificationReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store