function arrow() {
  document.getElementById('container').style.animation = 'move 2s 1';
  document.getElementById('footer').style.animation = 'move 2s 1';
  document.getElementById('footer').style.display = 'none';
  setTimeout("window.open('https://jakublabendowicz.github.io/projects/FreestyleRandomizer/random.html', '_self')", 1000);
}

function refresh() {
  // document.getElementById('container').style.animation = 'move 2s 1';
  setTimeout("window.open('https://jakublabendowicz.github.io/projects/FreestyleRandomizer/random.html', '_self')", 1000);
}
