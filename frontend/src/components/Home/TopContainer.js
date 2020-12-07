import React from 'react'
import H2Link from '../Headings'
import Button from '../Button'
import '../../index.css'
import { onLogOut } from '../../reducers/user'
import { useDispatch } from 'react-redux'

const TopContainer = () => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(onLogOut())
  }

return (
  <div className="container-2">
    <H2Link to="/" />
    <Button className="pink-box-button" text="Log Out" handleClick={handleLogout}/>
  </div>
)
}

export default TopContainer