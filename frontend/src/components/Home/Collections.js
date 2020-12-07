import React from 'react'
import '../../index.css'
import collections from './resources/collections.svg'

const Collections = (props) => {
  return (
    <>
      <img 
        src={collections}
        alt="Click here to view collections"
        height="87"
        width="100" 
        onClick={props.toggleRenderCollections}
      />
    </>
  )
}

export default Collections

