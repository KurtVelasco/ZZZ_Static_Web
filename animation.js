let isPlaying = false;
const audio = new Audio('99.mp3'); // Replace with the path to your MP3 file

function togglePulse(element) {
  const svgElement = element.querySelector('svg');
  svgElement.classList.toggle('pulse');
  
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }

  isPlaying = !isPlaying;
}