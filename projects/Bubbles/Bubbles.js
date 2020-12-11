class BubblesTheme {
  static quantity = 0;

  constructor(name="defoult", bubbleTopColor1, bubbleBootomColor1=bubbleTopColor1, bubbleTopColor2=bubbleTopColor1, bubbleBootomColor2=bubbleBootomColor1, bubbleTopColor3=bubbleTopColor1, bubbleBootomColor3=bubbleBootomColor1) {
    this.name = name;
    this.number = BubblesTheme.quantity;
    BubblesTheme.quantity++;
    this.bubbleTopColor1 = bubbleTopColor1;
    this.bubbleTopColor2 = bubbleTopColor2;
    this.bubbleTopColor3 = bubbleTopColor3;
    this.bubbleBootomColor1 = bubbleBootomColor1;
    this.bubbleBootomColor2 = bubbleBootomColor2;
    this.bubbleBootomColor3 = bubbleBootomColor3;
  }

  showTopColors() {
    document.documentElement.style.setProperty('--bubbleTopColor1', this.bubbleTopColor1);
    document.documentElement.style.setProperty('--bubbleTopColor2', this.bubbleTopColor2);
    document.documentElement.style.setProperty('--bubbleTopColor3', this.bubbleTopColor3);
  }

  showBootomColors() {
    document.documentElement.style.setProperty('--bubbleBootomColor1', this.bubbleBootomColor1);
    document.documentElement.style.setProperty('--bubbleBootomColor2', this.bubbleBootomColor2);
    document.documentElement.style.setProperty('--bubbleBootomColor3', this.bubbleBootomColor3);
  }

  static bubbleThemeMode = 0;

  static change() {
    if (BubblesTheme.bubbleThemeMode==0) {
      bubblesThemes[0].showTopColors();
      bubblesThemes[4].showBootomColors();
      BubblesTheme.bubbleThemeMode = 1;
    }
    else {
      bubblesThemes[1].showTopColors();
      bubblesThemes[4].showBootomColors();
      BubblesTheme.bubbleThemeMode = 0;
    }
  }
}

bubblesThemes = new Array();
bubblesThemes[0] = new BubblesTheme("white", "white");
bubblesThemes[1] = new BubblesTheme("black", "black");
bubblesThemes[2] = new BubblesTheme("red", "#D14F4F");
bubblesThemes[3] = new BubblesTheme("green", "#4FD153");
bubblesThemes[4] = new BubblesTheme("blue", "#4f7fd1");
bubblesThemes[5] = new BubblesTheme("yellow", "#CDD14F");

BubblesTheme.change();


function bubbles() {
  // var quantity = document.getElementById('quantity').value;
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

  var bubblesTheme = new BubblesTheme("", bubbleTopColor, bubbleBootomColor1, bubbleTopColor, bubbleBootomColor2, bubbleTopColor, bubbleBootomColor3);
  bubblesTheme.showTopColors();
  bubblesTheme.showBootomColors();
}
