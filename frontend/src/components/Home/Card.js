import React from 'react'
import '../../index.css'

const Card = (props) => {

  const stopPropagation = (event) => {
    event.stopPropagation();
  }

  return (
    <>
      {props.showAnswer === true ?
        <div id="card" onClick={props.flipCard}>
          <p className="hint-ans">Answer</p>
          <input
            onClick={stopPropagation}
            placeholder={props.getCardInfo(props.cardIndex)}
            className="white-card-input"
            id="card-info"
            type="text"
            value={props.cardAnswer}
            onChange={({ target }) => props.setCardAnswer(target.value)}
          />

      </div>
      :
      <div id="card" onClick={props.flipCard}>
        <p className="hint-ans">Hint</p>
        <input
          onClick={stopPropagation}
          placeholder={props.getCardInfo(props.cardIndex)}
          className="white-card-input"
          id="card-info"
          type="text"
          value={props.cardHint}
          onChange={({ target }) => props.setCardHint(target.value)}
        />

      </div>
      }
    </>
  )
}

export default Card