let isPlaying = false;
const audio = new Audio('beep_boops/99.mp3'); // Replace with the path to your MP3 file

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

function showSidebar(sidebarToShow) {
  const sidebars = document.querySelectorAll('.main-sidebar');

  sidebars.forEach(sidebar => {
    if (sidebar.classList.contains(sidebarToShow)) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('shown');
    } else {
      sidebar.classList.remove('shown');
      sidebar.classList.add('hidden');
    }
  });
}
