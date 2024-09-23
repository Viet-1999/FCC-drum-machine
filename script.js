const displayNameOfAudio = document.getElementById("display");
const drumPads = document.getElementsByClassName("drum-pad");

// Update display element and play audio when drum pad button is clicked
function drumPadClick(e) {
  const button = e.currentTarget;
  const audio = button.querySelector("audio");
  const audioName = audio.getAttribute("name");
  audio.currentTime = 0;
  audio.play();

  // Display the pressed key (audio's name) in the display element
  displayNameOfAudio.innerText = audioName;
}

// Add an event listener to each drum pad for mouse clicks
for (let pad of drumPads) {
  pad.addEventListener("click", drumPadClick);
}

// Add a keypress functionality to trigger corresponding sound
document.addEventListener("keydown", function (e) {
  const keyPressed = e.key.toUpperCase(); // Convert key to uppercase to match the ID
  const drumPad = document.getElementById(keyPressed); // Find the drum pad with the matching key

  if (drumPad) {
    const audio = drumPad.querySelector("audio"); // Get the audio element in the drum pad
    audio.currentTime = 0; // Reset the audio so it playes from the start
    audio.play();

    // Update the display with the key pressed
    const audioName = audio.getAttribute("name");
    displayNameOfAudio.innerText = audioName;
  }
});
