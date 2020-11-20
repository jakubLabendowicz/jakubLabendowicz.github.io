var color = 1;

function viewEasterEggs() {
  if(sessionStorage.getItem('color') == null) {
    sessionStorage.setItem('color', 0);
    color = 0;
  }
  else {
    color = sessionStorage.getItem('color');
  }
  changeColor();
}

function changeColor() {
  const colors = ['#9e9e9e', '#f44336', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];
  const element = document.querySelector(".container");
  element.style.setProperty("--backgroundColor2", colors[color]);
  sessionStorage.setItem('color', color);
  color++;
  if(color == 15) {
    color = 0;
  }
}
