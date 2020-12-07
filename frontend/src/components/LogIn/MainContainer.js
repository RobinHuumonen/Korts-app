import React, { useState } from 'react'
import { onLogIn } from '../../reducers/user'
import { setNewUserNull } from '../../reducers/signUp'
import { useDispatch } from 'react-redux'
import '../../index.css'
import { H1 } from '../Headings'
import UserForm from '../UserForm'
import SignUpLink from './SignUp'
import { setNotification } from '../../reducers/notification'


const MainContainer = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      if (password.length < 3 || username.length < 3) {
        throw new Error("Password's and username's minimum length is 3")
      }
      dispatch(setNewUserNull())
      dispatch(onLogIn({username, password}))
      setUsername('')
      setPassword('')
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }

  return (
      <div className="form-container">
      <H1/>
      <UserForm
        username={username}
        password={password}
        usernameHandler={({ target }) => setUsername(target.value)}
        passwordHandler={({ target }) => setPassword(target.value)}
        submitHandler={handleLogin}
        buttonText="Log In"
        usernameHint = "Username (min. length 3)"
        passwordHint = "Password (min. length 3)"
      />
      <SignUpLink/>
    </div>
    
  )
}

export default MainContainer