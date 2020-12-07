import React from 'react'
import '../../index.css'
import Footer from '../Footer'
import MainContainer from './MainContainer'
import Notification from '../Notification'


const LogInPage = (props) => {
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

export default LogInPage