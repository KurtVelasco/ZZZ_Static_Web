let isPlaying = false;
const audio = new Audio('https://fastcdn.hoyoverse.com/mi18n/nap_global/m20240603hy38zhr2tc/upload/0e5b56341f72ae72f5db600776e79cbc_4823529791387624270.mp3'); 

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
