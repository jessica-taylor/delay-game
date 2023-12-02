
const c = 15;  // Increment in time delay
const d = c*20; // Max time delay
let currentDelay = 0;

const audio = document.getElementById('audio');
function handleButtonClick() {
    audio.play();

    setTimeout(() => {
      // Play the sound
      const colorFlash = document.getElementById('colorFlash');
      colorFlash.style.backgroundColor = 'red';
      
      setTimeout(() => {
        colorFlash.style.backgroundColor = 'white';
      }, 200);  // Flash duration
    }, currentDelay);

    // Increment the time delay
    currentDelay += c;
    
    if (currentDelay >= d) {
        currentDelay = 0;
    }
}
