import React from 'react'
import '../../index.css'

const Stacks = (props) => {
  return (
    <>
      <ol>
        {props.stacks.map(stack => 
          <li onClick={() => props.setStack(stack.stack)} key={stack.stack}>{stack.stack}</li>
        )}
      </ol>
    </>
  )
}

export default Stacks