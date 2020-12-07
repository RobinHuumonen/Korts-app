// Component taken from https://stackoverflow.com/a/49439893

import React from 'react'
import { withRouter } from 'react-router'
import '../index.css'

const LinkButton = (props) => {
  const {
    history,
    to,
    onClick,
    id,
    className,
    text,
    type,
  } = props
  return (
    <button
    type={type}
    id={id} className={className}
    onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >
      {text}
    </button>
  )
}

export default withRouter(LinkButton)