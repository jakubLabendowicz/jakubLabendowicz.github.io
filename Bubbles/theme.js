var mode = 0;

function brithnes() {
  if (mode == 0) {
    document.body.style.backgroundColor = "black";
    document.documentElement.style.setProperty('--panelColor', 'white');
    document.documentElement.style.setProperty('--panelBackgroundColor', 'black');
    document.documentElement.style.setProperty('--bodyColor', 'white');
    document.documentElement.style.setProperty('--bodyBackgroundColor', 'black');


    document.getElementById('logo').style.backgroundImage = "url('Bubbles/JŁ!-2.png')";
    document.getElementById('menu').style.backgroundImage = "url('Bubbles/menu-1.png')";
    mode = 1;
  }
  else {
    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty('--panelColor', 'black');
    document.documentElement.style.setProperty('--panelBackgroundColor', 'white');
    document.documentElement.style.setProperty('--bodyColor', 'black');
    document.documentElement.style.setProperty('--bodyBackgroundColor', 'white');
    document.getElementById('logo').style.backgroundImage = "url('Bubbles/JŁ!.png')";
    document.getElementById('menu').style.backgroundImage = "url('Bubbles/menu.png')";
    mode = 0;
  }
}

function bubbles() {
  var quantity = document.getElementById('quantity').value;
  var bubbleTopColor = document.getElementById('bubbleTopColor').value;
  var bubbleBootomColor = document.getElementById('bubbleBootomColor').value;

  var bubbleBootomColor1 = bubbleBootomColor;
  var bubbleBootomColor2 = bubbleBootomColor;
  var bubbleBootomColor3 = bubbleBootomColor;

  if (bubbleBootomColor == "mix") {
    bubbleBootomColor1 = "#D14F4F";
    bubbleBootomColor2 = "#CDD14F";
    bubbleBootomColor3 = "#4FD153";
  }

  document.documentElement.style.setProperty('--bubbleTopColor', bubbleTopColor);
  document.documentElement.style.setProperty('--bubbleBootomColor1', bubbleBootomColor1);
  document.documentElement.style.setProperty('--bubbleBootomColor2', bubbleBootomColor2);
  document.documentElement.style.setProperty('--bubbleBootomColor3', bubbleBootomColor3);
}
