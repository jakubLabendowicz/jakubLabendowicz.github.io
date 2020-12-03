class Theme {
  static counter = 0;
  static presentTheme = 0;

  constructor(name="Default", bodyBackgroundColor='white', bodyColor='black', panelBackgroundColor='white', panelColor='black', barBackgroundColor='whie', barColor='black') {
    this.name = name;
    this.bodyBackgroundColor = bodyBackgroundColor;
    this.bodyColor = bodyColor;
    this.panelBackgroundColor = panelBackgroundColor;
    this.panelColor = panelColor;
    this.barBackgroundColor = barBackgroundColor;
    this.barColor = barColor;
    this.number = Theme.counter++;
  }

  run(dec=6) {
    Theme.presentTheme = this.number;
    document.getElementById('themeStatus').innerHTML = this.name;

    if (dec >=4) {
      document.body.style.backgroundColor = this.bodyBackgroundColor;
      document.body.style.color = this.bodyColor;
      document.documentElement.style.setProperty('--bodyColor', this.bodyColor);
      document.documentElement.style.setProperty('--bodyBackgroundColor', this.bodyBackgroundColor);
      dec = dec - 4;
    }
    if (dec>=2) {
      document.documentElement.style.setProperty('--panelColor', this.panelColor);
      document.documentElement.style.setProperty('--panelBackgroundColor', this.panelBackgroundColor);
      dec = dec - 2;
    }
    if (dec>=1) {
      document.documentElement.style.setProperty('--barColor', this.barColor);
      document.documentElement.style.setProperty('--barBackgroundColor', this.barBackgroundColor);
      dec = dec - 1;
    }
  }

  static change(dec=6) {
    if (Theme.presentTheme == Themes.length-1) Themes[0].run(dec);
    else Themes[Theme.presentTheme+1].run(dec);
  }

  static auto(dec=6) {
    const date = new Date();
    var hour = date.getHours();

    if (hour>=6 || hour<22) {
      Themes[0].run(dec);
    }
    else if (hour>=22 || hour<6) {
      Themes[1].run(dec);
    }
  }
}

Themes = new Array();
Themes[0]= new Theme("Light", 'white', 'black', 'white', 'black', 'white', 'black');
Themes[1] = new Theme("Dark", 'black', 'white', 'black', 'white', 'black', 'white');
