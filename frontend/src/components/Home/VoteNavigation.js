import React from 'react'
import '../../index.css'

import arrowRight from './resources/arrowRight.svg'
import arrowLeft from './resources/arrowLeft.svg'
import addPlus from './resources/add_plus.svg'
import addMinus from './resources/add_minus.svg'

const VoteNavigation = (props) => {
  return (
    <div id="vote-navigation">
      <img 
        src={arrowLeft}
        alt="Click here for next card"
        height="87"
        width="100"
        onClick={props.previousCard}
      />

      <div id="vote">
        <img 
          src={addPlus}
          alt="Click here to add plus"
          height="87"
          width="100"
          onClick={props.votePlus}
        />
        <p className="plusses-minuses">{props.getPlusses()} * +</p>
        <img 
          src={addMinus}
          alt="Click here to add minus"
          height="87"
          width="100"
          onClick={props.voteMinus}
        />
        <p className="plusses-minuses">{props.getMinuses()} * -</p>
      </div>
      
      <img 
        src={arrowRight}
        alt="Click here for next card"
        height="87"
        width="100"
        onClick={props.nextCard}
      />

    </div>
  )
}

export default VoteNavigation