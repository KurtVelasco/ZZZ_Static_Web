var fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = '../counter_strike/en-us.ttf';
fontLink.media = 'print';

fontLink.addEventListener('load', function() {
    setTimeout(function() {
        window.location.href = 'index.html';
      }, 5000); // 5000 milliseconds = 5 seconds
});

document.head.appendChild(fontLink);