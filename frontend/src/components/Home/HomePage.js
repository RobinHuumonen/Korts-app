import React from 'react'
import '../../index.css'
import Notification from '../Notification'
import TopContainer from './TopContainer'
import Footer from '../Footer'
import MainContainer from './MainContainer'

const HomePage = (props) => {
  
  return (
    <div className="site-wrapper">
      <Notification notification={props.notification}/>
      <TopContainer />
      <main>
        <MainContainer stacks={props.stacks}/>
      </main>
      <Footer/>
    </div>
  )
}

export default HomePage
 
