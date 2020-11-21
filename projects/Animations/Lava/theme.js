var mode = 0;

function brithnes() {
  if (mode == 0) {
    document.body.style.backgroundColor = "black";
    mode = 1;
  }
  else {
    document.body.style.backgroundColor = "white";
    mode = 0;
  }
}
