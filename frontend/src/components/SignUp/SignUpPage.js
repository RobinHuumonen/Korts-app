import React from 'react'
import '../../index.css'
import MainContainer from './MainContainer'
import Notification from '../Notification'
import Footer from '../Footer'

const SignUpPage = (props) => {
  return (
    <div className="site-wrapper">
      <Notification notification={props.notification}/>
      <main>
        <MainContainer/>
      </main>
      <Footer/>
    </div>
  )
}

export default SignUpPage