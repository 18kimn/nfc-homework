import React, {useEffect} from 'react'
import useNfc from './helpers/useNfc.js'
import playSound from './helpers/playSound.js'
import './styles/styles.css'
import './styles/main.css'

const Keyboard = () => {
  const [signal, setAllowed] = useNfc()

  useEffect(() => {
    playSound(signal, 1)
  }, [signal])
  return (
    <div id="keyboard">
      {!signal ? (
        <button onClick={() => setAllowed(true)}>
          <p>click to allow NFC reading</p>
        </button>
      ) : (
        <p>{signal}</p>
      )}
    </div>
  )
}

export default Keyboard
