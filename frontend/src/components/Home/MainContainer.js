import React, { useState }  from 'react'
import '../../index.css'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../reducers/notification'

import { updateStack, createStackAndCard, renameStack, removeStack } from '../../reducers/stack'
import Crud from './Crud'
import Card from './Card'
import Collections from './Collections'
import Stacks from './Stacks'
import VoteNavigation from './VoteNavigation'

const MainContainer = (props) => {
  const dispatch = useDispatch()
  const [stackIndex, setStackIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [renderStacks, setRenderStacks] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [stackName, setStackName] = useState('')
  const [cardHint, setCardHint] = useState('')
  const [cardAnswer, setCardAnswer] = useState('')
  
  const getStackName = (index) => {
    if (props.stacks.length > 0) {
      const i = index === null ? 0 : index
      try {
        return props.stacks[i].stack
      } catch (error) {
        return props.stacks[0].stack
      }
    }
  }

  const getStack = (i) => props.stacks.find(s => s.stack === getStackName(i))

  const getCardInfo = (index) => {
    const currentStack = getStack(stackIndex)
    if (currentStack) {
      const i = index === null ? 0 : index 
      try {
        if (showAnswer) {
          return currentStack.flashcards[i].answer
        } else {
          return currentStack.flashcards[i].hint
        }
      } catch (error) {
        setCardIndex(0)
      }
      
    }
  }

  const deleteStack = () => {
    try {
      const currentStack = getStack(stackIndex)
      dispatch(removeStack(currentStack))
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }

  const addCardToStack = (cardHint, cardAnswer) => {
    try {
      const currentStack = getStack(stackIndex)

      if (cardHint === '' || cardAnswer === '') {
        throw new Error("Provide hint and answer")
      } else {
        const newCard = {...currentStack.flashcards[cardIndex], hint: cardHint, answer: cardAnswer, plusses: 0, minuses: 0}
        dispatch(updateStack(currentStack, newCard))
      }
      setCardAnswer('')
      setCardHint('')
      setStackName('')
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }

  const createStack = (cardHint, cardAnswer, stackName) => {
    try {

      if (cardHint === '' && cardAnswer === '') {
        throw new Error('Provide hint and/or answer')
      } 

      if (stackName === '') {
        throw new Error('Provide stack name')
      }

      const newStack = {
        stack: stackName,
        flashcard: {
          hint: cardHint,
          answer: cardAnswer,
          plusses: 0,
          minuses: 0
        }
      }

      dispatch(createStackAndCard(newStack))
      setCardAnswer('')
      setCardHint('')
      setStackName('')
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }

  const rename = (stackName) => {
    try {
      if (stackName === '') {
        throw new Error("Provide stack name")
      }
      if (props.stacks) {
        let duplicatesExist = false
        for (let i = 0; i < props.stacks.length; i++) {
          if (props.stacks[i].stack === stackName) {
            duplicatesExist = true
            break
          }
        }
        if (duplicatesExist) {
          throw new Error('Provide unique stack name')
        }
      }

      const currentStack = getStack(stackIndex)
      const updatedStack = {...currentStack, stack: stackName}
      dispatch(renameStack(updatedStack, currentStack.stack))
      setStackName('')
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }

  const toggleRenderCollections = () => {
    renderStacks ? setRenderStacks(false)
    : setRenderStacks(true)
  }

  const previousCard = () => {
    if (showAnswer) {
      setShowAnswer(false)
    }
    setCardIndex(cardIndex - 1)
  }

  const nextCard = () => {
    if (showAnswer) {
      setShowAnswer(false)
    }
    setCardIndex(cardIndex + 1)
  }



  const flipCard = () => {
    showAnswer ? setShowAnswer(false)
    : setShowAnswer(true)
  }

  const getPlusses = () => {
    const currentStack = getStack(stackIndex)
    try {
      return currentStack.flashcards[cardIndex].plusses
    } catch (error) {
      return "Not available"
    }
  }

  const getMinuses = () => {
    const currentStack = getStack(stackIndex)
    try {
      return currentStack.flashcards[cardIndex].minuses
    } catch (error) {
      return "Not available"
    }
  }

  const voteMinus = () => {
    try {
      const currentStack = getStack(stackIndex)
      currentStack.flashcards[cardIndex].minuses += 1
      const updatedCard = currentStack.flashcards[cardIndex]
      dispatch(updateStack(currentStack, updatedCard))
    } catch (error) {
      dispatch(setNotification(`Cannot vote before card is loaded`, 5))
    }

  }

  const votePlus = () => {
    try {
      const currentStack = getStack(stackIndex)
      currentStack.flashcards[cardIndex].plusses += 1
      const updatedCard = currentStack.flashcards[cardIndex]
      dispatch(updateStack(currentStack, updatedCard))
    } catch (error) {
      dispatch(setNotification(`Cannot vote before card is loaded`, 5))
    }

  }

  const setStack = (stack) => {
    try {
        setStackIndex(props.stacks.findIndex(s => s.stack === stack))
        setRenderStacks(false)
    } catch (error) {
      console.log(error)
    }

  }

  if (renderStacks) {
    return (
      <div className=".container-1">
        {props.stacks.length >= 1 ?
          <Stacks stacks={props.stacks} setStack={setStack}/> :
          <p>Not available</p>
        }
        <Collections toggleRenderCollections={toggleRenderCollections}/>
      </div>
    )
  }
  
  return (
    <div className=".container-1">
      <Crud getStackName={getStackName} stackIndex={stackIndex} setStackName={setStackName} 
        rename={rename} createStack={createStack} addCardToStack={addCardToStack}
        stackName={stackName} cardHint={cardHint} cardAnswer={cardAnswer} deleteStack={deleteStack}
      />
      <Card
        showAnswer={showAnswer} flipCard={flipCard} getCardInfo={getCardInfo}
        cardAnswer={cardAnswer} setCardAnswer={setCardAnswer} cardHint={cardHint} 
        setCardHint={setCardHint} cardIndex={cardIndex}
      />
      <VoteNavigation previousCard={previousCard} nextCard={nextCard} 
        votePlus={votePlus} voteMinus={voteMinus} getPlusses={getPlusses} getMinuses={getMinuses}
      />
      <Collections toggleRenderCollections={toggleRenderCollections}/>
  </div>
  )
}

export default MainContainer