class Element {
  constructor(name, background, text='') {
    this.name = name;
    this.background = background;
    this.text = text;
  }

  showBackgroundColor(color) {
    document.documentElement.style.setProperty(this.background, color);
  }

  showTextColor(color) {
    document.documentElement.style.setProperty(this.text, color);
  }
}

Elements = new Array();
Elements[0] = new Element('body', '--bodyBackgroundColor', '--bodyColor');
Elements[1] = new Element('panel', '--panelBackgroundColor', '--panelColor');
Elements[2] = new Element('bar', '--barBackgroundColor', '--barColor');

Bubbles = new Array();
Bubbles[0] = new Element('top1', '--bubbleTopColor1');
Bubbles[1] = new Element('top2', '--bubbleTopColor2');
Bubbles[2] = new Element('top3', '--bubbleTopColor3');
Bubbles[3] = new Element('bottom1', '--bubbleBootomColor1');
Bubbles[4] = new Element('bottom2', '--bubbleBootomColor2');
Bubbles[5] = new Element('bottom3', '--bubbleBootomColor3');

class Color {
  constructor(name, background, text='') {
    this.name = name;
    this.background = background;
    this.text = text;
  }
}

Colors = new Array();
Colors[0] = new Colors('body', '--bodyBackgroundColor', '--bodyColor');
Colors[1] = new Colors('panel', '--panelBackgroundColor', '--panelColor');
Colors[2] = new Colors('bar', '--barBackgroundColor', '--barColor');


class Theme {
  constructor(name, elementsTable, colorsTable) {
    this.name = name;
    this.elementsTable = elementsTable;
    this.colorsTable = colorsTable;
  }

  showBackgroundColors() {

  }

  showTextColors() {

  }

  showName() {
    document.getElementById('themeStatus').innerHTML = this.name;
  }
}

Themes = new Array();
Themes[0]= new Theme("Light", 'white', 'black', 'white', 'black', 'white', 'black');
Themes[1] = new Theme("Dark", 'black', 'white', 'black', 'white', 'black', 'white');


class ThemeSchedule {
  constructor(name, theme, startTime, endTime) {
    this.name = name;
    this.theme = theme;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

//tworzyć nowe motywy
//
//usuwanie motywów

//motyw
//kolor
//element
