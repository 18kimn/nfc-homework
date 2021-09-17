import React, { useState, useEffect } from "react";
import useNfc from "./helpers/useNfc.js";
import playSound from "./helpers/playSound.js";
import "./styles/styles.css";

// Home function that is reflected across the site
export default function Home() {
  const [signal, setAllowed] = useNfc();

  useEffect(() => {
    playSound(signal, 1)
  }, [signal])
  return (
    <>
      {!signal ? (
        <button onClick={() => setAllowed(true)}>
          click me to give permissions
        </button>
      ) : (
        <div>{signal}</div>
      )}
      <button onClick={() => playSound('C', 1)}>
      play sound
      </button>
    </>
  );
}
