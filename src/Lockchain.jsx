import React, {useEffect, useState} from 'react'
import useNfc from './helpers/useNfc.js'

const [C, D, E, F, G] = ['C', 'D', 'E', 'F', 'G']
const locks = {C, D, E, F, G}

const Lockchain = () => {
  const [prevSignal, setPrevSignal] = useState('')
  const [signal, setAllowed, setSignal] = useNfc()
  const [isStart, setIsStart] = useState(true)
  const [shouldAttempt, setShouldAttempt] = useState(false)
  const [victory, setVictory] = useState(false)

  const isCorrect = (key) => {
    const correctKey = locks[prevSignal]
    !correctKey || key !== correctKey
  }

  const reset = () => {
    setShouldAttempt(true)
    setSignal('')
  }

  /* god what a mess */
  useEffect(() => {
    console.log(signal)
    setPrevSignal(signal)
    if (signal && isStart) {
      // if user has been authenticated and hasn't started yet
      setShouldAttempt(true)
      return
    } else if (shouldAttempt) {
      // if the user has registered a key but not attempted to unlock something
      setShouldAttempt(false)
      return
    } else if (isCorrect(signal)) {
      // if the user has used the correct key
      reset()
      setVictory(true)
      return
    } else {
      // if the user has used an incorrect key
      reset()
      setVictory(false)
      return
    }
  }, [signal])

  return (
    <div id="lockchain">
      {!signal ? (
        <button onClick={() => setAllowed(true)}>
          <p>click to allow NFC reading</p>
        </button>
      ) : isStart ? (
        <div>Register a key to get started!</div>
      ) : shouldAttempt ? (
        <div>Now try to find a matching lock </div>
      ) : victory ? (
        <div>
          <p>you unlocked it! The key has been reset, you can try again</p>
        </div>
      ) : (
        <div>you failed :') The key has been reset, you can try again</div>
      )}
    </div>
  )
}

export default Lockchain
