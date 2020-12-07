import React, { useEffect } from 'react'
import './index.css'

import {
  HashRouter  as Router,
  Switch, Route, Redirect
} from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { initUser} from './reducers/user'
import { initStacks} from './reducers/stack'

import AboutPage from './components//About/AboutPage'
import SignUpPage from './components/SignUp/SignUpPage'
import LogInPage from './components/LogIn/LogInPage'
import HomePage from './components/Home/HomePage'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUser())
  }, [dispatch])

  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(initStacks(user))
  }, [dispatch, user])
  
  const signUpUser = useSelector(state => state.signUpUser)
  const notification = useSelector(state => state.notification)
  const stacks = useSelector(state => state.stacks)

  return (
      <>
          <Router>
            <Switch>
            
              <Route path="/signup">
                {signUpUser ? <Redirect to="/"/> : <SignUpPage notification={notification}/>}
              </Route>

              <Route path="/about">
                <AboutPage  user={user}/>
              </Route>

              <Route path="/">
                {user === null ?
                  <LogInPage notification={notification}/> :
                  <HomePage user={user} notification={notification} stacks={stacks}/>
                }
              </Route>

            </Switch>
          </Router>
        </>
  )
}

export default App