var mode = 0;

function panel() {
  if (mode == 0) {
    document.getElementById('panel').style.visibility = 'visible';
    mode = 1;
  }
  else {
    document.getElementById('panel').style.visibility = 'hidden';
    mode = 0;
  }
}
