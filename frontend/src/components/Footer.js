import React from 'react'
import '../index.css'
import LinkButton from './LinkButton'

const Footer = () => {

  return (
          <p className="footer">
            {new Date().getFullYear()} Korts |
            <LinkButton className="text-button" text="About" to="/about"/>
          </p>
  )
}

export default Footer
