// plays sound given string input of musical note

const noteTable = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440,
  B: 493.88
};

const playSound = (note, time) => {
  if(!noteTable[note]) return 
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  oscillator.frequency.value = noteTable[note];
  oscillator.start(0);
  console.log(gainNode.gain.value);

  setTimeout(() => {
    const fadeOutLength = audioCtx.currentTime + 0.75 * time;
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, fadeOutLength);
    setTimeout(() => {
      oscillator.stop();
    }, fadeOutLength * 1000);
  }, time * 1000);
};

export default playSound;
