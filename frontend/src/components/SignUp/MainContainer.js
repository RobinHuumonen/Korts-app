import React, { useState } from 'react'
import { H1LinkExport } from '../Headings'
import UserForm from '../UserForm'
import '../../index.css'
import { onSignUp } from '../../reducers/signUp'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../reducers/notification'

const MainContainer = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      if (password.length < 3 || username.length < 3) {
        throw new Error("Password's and username's minimum length is 3")
      }
      dispatch(onSignUp({username, password}))
      setUsername('')
      setPassword('')
    } catch (error) {
        dispatch(setNotification(error.message, 5))
    }
  }

  return (
    <div className="form-container">
      <H1LinkExport  to="/"/>
      <UserForm
        username={username}
        password={password}
        usernameHandler={({ target }) => setUsername(target.value)}
        passwordHandler={({ target }) => setPassword(target.value)}
        submitHandler={handleSignUp}
        buttonText="Sign Up"
        to="/"
        usernameHint = "Username (min. length 3)"
        passwordHint = "Password (min. length 3)"
      />
    </div>
  )
}

export default MainContainer