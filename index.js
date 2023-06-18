// Map key codes to sound IDs
const keySoundMap = {
    KeyW: 'soundW',
    KeyA: 'soundA',
    KeyS: 'soundS',
    KeyD: 'soundD',
    KeyJ: 'soundJ',
    KeyK: 'soundK',
    KeyL: 'soundL',
  };
  
  // Play sound based on key press
  document.addEventListener('keydown', function(event) {
    const soundID = keySoundMap[event.code];
    if (soundID) {
      playSound(soundID);
    }
  });

function playSound(soundID){
    var audio = new Audio(document.getElementById(soundID).src);
    audio.play();
}