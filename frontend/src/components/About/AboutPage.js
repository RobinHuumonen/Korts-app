import React from 'react'
import '../../index.css'
import TopContainer from './TopContainer'
import MainContainer from './MainContainer'
import Footer from '../Footer'

const AboutPage = (props) => {
  return (
    <div className="site-wrapper">
      <TopContainer user={props.user}/>
      <main>
        <MainContainer/>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutPage