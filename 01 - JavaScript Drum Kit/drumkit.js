// Function that sets off sound when user hits key
function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running - key is not valid
    audio.currentTime = 0; // Rewinds the clip, so you don't have to wait for it to finish before playing it again
    audio.play();
    key.classList.add('playing');
}

// Revert the key back to origianl appearnce
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if its not a transform
    this.classList.remove('playing');
}

// Adding event listener that's waiting for the user to press a key
window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.key');

// For each key, add an event listener that waits for a transition to end
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

key.classList.remove