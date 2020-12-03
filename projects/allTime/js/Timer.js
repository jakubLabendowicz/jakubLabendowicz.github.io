class Timer {
  constructor(time, name="Timer", delayTimer=true) {
    this.time = time;
    this.name = name;
    this.delayTimer = delayTimer;
  }

  run() {
    getElementById('title').innerHTML = this.name;

  }
}

Gear = new Array();
Gear[0] = new Timer();

class Gear {
  constructor(name) {
    this.name = name;
  }
}
