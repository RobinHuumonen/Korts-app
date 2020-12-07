import React from 'react'
import '../index.css'
import { withRouter } from 'react-router'

export const H1 = () => {
  return (
      <h1 className="h1-heading">Korts</h1>
  )
}

const H2Link = (props) => {
  const {
    history,
    to,
    onClick,
  } = props
  return (
    <h2 className="h1-heading"
    onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >Korts</h2>
  )
}

const H1Link = (props) => {
  const {
    history,
    to,
    onClick,
  } = props
  return (
    <h1 className="h1-heading"
    onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >Korts</h1>
  )
}


export const H1LinkExport = withRouter(H1Link)
export default withRouter(H2Link)
