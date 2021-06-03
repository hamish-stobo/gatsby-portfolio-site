import React, { useState, useEffect } from 'react'

const TypeWriter = ({ messages }) => {
  const CONSTANTS = {
    DELETING_SPEED: 60,
    TYPING_SPEED: 100,
  }
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  })

  useEffect(() => {
    let timer = ""
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs)
      }))
      timer = setTimeout(handleType, state.typingSpeed)
    }
    handleType()
    return () => clearTimeout(timer)
  }, [state.isDeleting, state.typingSpeed])

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message && state.text !== 'full-stack') {
      setTimeout(() => {
        setState(cs => ({
          ...cs,
          isDeleting: true
        }))
      }, 500)
    } else if (state.isDeleting && state.text === "") {
        setTimeout(() => {setState(cs => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages)
      }))}, 200)
    }
  }, [state.text, state.message, state.isDeleting, messages])

  const getCurrentText = currentState => {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1)
  }

  const getMessage = (currentState, data) => {
    return data[Number(currentState.loopNum) % Number(data.length)]
  }

  const getTypingSpeed = (currentState) => {
    return currentState.isDeleting
      ? CONSTANTS.DELETING_SPEED
      : CONSTANTS.TYPING_SPEED
  }

  return (
    <div className="typewriterText inline-block">
        {/* <span className="inline-block">{state.text}</span> */}
        <span className="inline-block">{state.text.indexOf('fu') === 0 ? <b>{state.text}</b> : state.text}</span>
        <span id="cursor" />
    </div>
  )
}

export default TypeWriter