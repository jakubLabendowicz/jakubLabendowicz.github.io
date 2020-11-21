var mode = 0;

function brithnes() {
  if (mode == 0) {
    document.body.style.backgroundColor = "black";
    document.getElementById('logo').style.backgroundImage = "url('JŁ!-2.png')";
    mode = 1;
  }
  else {
    document.body.style.backgroundColor = "white";
    document.getElementById('logo').style.backgroundImage = "url('JŁ!.png')";
    mode = 0;
  }
}
