class Theme {
  constructor(name="Default", bodyBackgroundColor='white', bodyColor='black', panelBackgroundColor='white', panelColor='black', barBackgroundColor='whie', barColor='black') {
    this.name = name;
    this.bodyBackgroundColor = bodyBackgroundColor;
    this.bodyColor = bodyColor;
    this.panelBackgroundColor = panelBackgroundColor;
    this.panelColor = panelColor;
    this.barBackgroundColor = barBackgroundColor;
    this.barColor = barColor;
  }

  run() {
    document.body.style.backgroundColor = this.bodyBackgroundColor;
    document.body.style.color = this.bodyColor;

    document.documentElement.style.setProperty('--bodyColor', this.bodyColor);
    document.documentElement.style.setProperty('--bodyBackgroundColor', this.bodyBackgroundColor);

    document.documentElement.style.setProperty('--panelColor', this.panelColor);
    document.documentElement.style.setProperty('--panelBackgroundColor', this.panelBackgroundColor);

    document.documentElement.style.setProperty('--barColor', this.barColor);
    document.documentElement.style.setProperty('--barBackgroundColor', this.barBackgroundColor);

    document.getElementById('themeStatus').innerHTML = this.name;
  }

  static presentTheme = 0;

  static change() {
    if (Theme.presentTheme == Themes.length-1) {
      Theme.presentTheme = 0;
    }
    else {
      Theme.presentTheme++;
    }
    Themes[Theme.presentTheme].run();
  }

  static auto() {
    const date = new Date();
    var hour = date.getHours();

    if (hour>=6 || hour<22) {
      Themes[0].run();
      Theme.presentTheme = 0;
    }
    else if (hour>=22 || hour<6) {
      Themes[1].run();
      Theme.presentTheme = 1;
    }
  }
}

Themes = new Array();
Themes[0]= new Theme("Light", 'white', 'black', 'white', 'black', 'white', 'black');
Themes[1] = new Theme("Dark", 'black', 'white', 'black', 'white', 'black', 'white');
