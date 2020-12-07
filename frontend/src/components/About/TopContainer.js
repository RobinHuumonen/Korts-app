import React from 'react'
import LinkButton from '../LinkButton'
import Button from '../Button'
import H2Link from '../Headings'
import '../../index.css'
import { onLogOut } from '../../reducers/user'
import { useDispatch } from 'react-redux'



const TopContainer = (props) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(onLogOut())
  }

  return (
    <div className="container-2">
      <H2Link to="/"/>
      {props.user ? 
        <Button className="pink-box-button" text="Log Out" handleClick={handleLogout}/> :
        <LinkButton className="pink-box-button" text="Log In" to="/"/>
      }
    </div>
  )
}

export default TopContainer
