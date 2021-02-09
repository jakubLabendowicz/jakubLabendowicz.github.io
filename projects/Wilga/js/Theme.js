class Theme {
  counter = 0;
  variables = [];
  values = [];

  constructor(name="") {
    this.name = name;
  }

  add(variable, value) {
    this.variables.push(variable);
    this.values.push(value);
    this.counter++;
  }

  set() {
    for (var i = 0; i < this.counter; i++) {
      document.documentElement.style.setProperty(this.variables[i], this.values[i]);
    }
  }
}

class ThemeSwitch {
  counter = 0;
  state = 0;
  themes = [];

  constructor(name="") {
    this.name = name;
  }

  add(theme) {
    this.themes.push(theme);
    this.counter++;
  }

  change() {
    this.state++;
    if (this.state==this.counter) this.state=0;
    this.themes[this.state].set();
  }
}
