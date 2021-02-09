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

  constructor(name="", button="", status="") {
    this.name = name;
    this.status = status;
  }

  add(theme) {
    this.themes.push(theme);
    this.counter++;
  }

  change(state=-1) {
    if (state==-1) {
      this.state++;
      if (this.state==this.counter) this.state=0;
    } else {
      this.state=state;
    }
    console.log(state);
    this.themes[this.state].set();
    this.statusChange();
  }

  statusChange() {
    document.getElementById(this.status).innerHTML = this.themes[this.state].name;
  }

  schedulesCounter = 0;
  schedules = [];

  addSchedule(id, start, end) {
    this.schedules[this.schedulesCounter] = [id, start, end];
    this.schedulesCounter++;
    this.scheduleChange();
  }

  scheduleChange() {
    const date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var time = hour + minute*0.01;
    console.log(time);

    for (var i = 0; i < this.schedulesCounter; i++) {
      if (this.schedules[i][1]<this.schedules[i][2]) {
        if (this.schedules[i][1]<=time && this.schedules[i][2]>=time) {
          this.change(this.schedules[i][0]);
        }
      } else if (this.schedules[i][1]>this.schedules[i][2]) {
        if (this.schedules[i][1]<=time || this.schedules[i][2]>=time) {
          this.change(this.schedules[i][0]);
        }
      }
    }
  }
}

var light = new Theme("Light");
light.add("--firstBackgroundColor", "white");
light.add("--firstColor", "black");
light.add("--shadowColor", "#DDDDDD");

var dark = new Theme("Dark");
dark.add("--firstBackgroundColor", "#111111");
dark.add("--firstColor", "white");
dark.add("--shadowColor", "black");

var themeSwitch = new ThemeSwitch("switch", "themeStatus", "themeStatus");
themeSwitch.add(light);
themeSwitch.add(dark);

themeSwitch.addSchedule(0, 8.00, 19.59);
themeSwitch.addSchedule(1, 20.00, 7.59);

$(document).ready(function(){
  $("#themeStatus").on("click", function(){
    themeSwitch.change();
  });
});
