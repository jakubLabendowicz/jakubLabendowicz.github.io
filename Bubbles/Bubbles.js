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
