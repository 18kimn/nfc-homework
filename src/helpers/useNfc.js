import React, { useState, useEffect } from "react";

// three possible return values
// if device incompatible, string message to display
// if device compatible but permissions not yet given, false
// if device compatible and permissions given, the read value

const useNfc = () => {
  const [allowed, setAllowed] = useState(false)
  const [signal, setSignal] = useState();
  const available = "NDEFReader" in window;
  const ndef = available && allowed && new window.NDEFReader();

  if (!available) return ['NFC reader not available on this device', setAllowed]
  
  useEffect(async () => {
    if(!allowed){
      setSignal(false)
      return // exit the useEffect, e.g. don't try to detect a scan
    } 
    // remove the button UI
    setSignal('everything looks good, now awaiting read!')
    await ndef.scan();
    const onRead = ({ message} ) => {
      const decoder = new TextDecoder();
      setSignal(decoder.decode(message.records[0].data.buffer));
    };

    ndef.onreading = onRead;
  }, [allowed]);

  return [signal, setAllowed]
};

export default useNfc