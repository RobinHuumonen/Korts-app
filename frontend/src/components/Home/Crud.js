import React from 'react'
import '../../index.css'

const Crud = (props) => {
  return (
    <div id="CRUD">
      <input
        placeholder={props.getStackName(props.stackIndex)}
        className="white-rename-input"
        id="collection-name"
        type="text"
        value={props.stackName}
        onChange={({ target }) => props.setStackName(target.value)}
      />
      <button id="rename-button" onClick={() => props.rename(props.stackName)}>Rename</button>
      <div className="btn-group">
        <button onClick={() => props.createStack(props.cardHint, props.cardAnswer, props.stackName)}>Create Stack and Card</button>
        <button onClick={() => props.addCardToStack(props.cardHint, props.cardAnswer)}>Add card to Stack</button>
        <button onClick={props.deleteStack}>Delete Stack</button>
      </div>
    </div>
  )
}

export default Crud