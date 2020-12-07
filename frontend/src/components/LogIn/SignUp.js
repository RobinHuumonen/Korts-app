import React from 'react' 
import '../../index.css'
import { setNewUserNull } from '../../reducers/signUp'
import { useDispatch } from 'react-redux'
import LinkButton from '../LinkButton'

const SignUp = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setNewUserNull())
  }
  return (
       <p className="text">Don't have an account?
       {" "}
       <LinkButton className="pink-box-button" onClick={handleClick} text="Sign Up" to="/signup"/>
      </p>
   
  )
}

export default SignUp