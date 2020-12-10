function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class Freestyle {
  constructor(topicsTable, beatsTable) {
    this.topicsTable = topicsTable;
    this.beatsTable = beatsTable;
  }

  randomTopic() {
    var random = getRandomInt(0, this.topicsTable.length);
    return this.topicsTable[random];
  }

  randomBeat() {
    var random = getRandomInt(0, this.beatsTable.length);
    return this.beatsTable[random];
  }

  showTopic() {
    var first = this.randomTopic();
    var second = this.randomTopic();
    var third = this.randomTopic();

    var loop = true;
    while (loop) {
      if (first == second || first==third) {
        first = this.randomTopic();
      } else loop = false;
    }
    loop = true;
    while (loop) {
      if (second == first || second==third) {
        second = this.randomTopic();
      } else loop = false;
    }
    // if (third == first || third==second) {
    //   third = this.randomTopic();
    // }
    var topics = first + ", " + second + ", " + third;
    document.getElementById('topics').innerHTML = topics;
  }

  showBeat() {
    document.getElementById('beat').src = this.randomBeat();
  }
}

var topics = ["obraz", "małpa", "drzewo", "życie", "miłość", "konopie", "wakacje", "sztuka", "historia", "niedoczekanie", "wenybrak", "krew", "żart", "reanimacja", "papuga", "zapałka", "energia", "słowa", "rana", "moda", "szyba", "szósty zmysł", "droga", "pęknięte lustro", "witraż", "noc", "skrzydła", "niebo", "metr", "świat"];
var beats = ["https://www.youtube.com/embed/sn91ANm2bho", "https://www.youtube.com/embed/aw7Kws3GaHI", "https://www.youtube.com/embed/Q9Ul8T0rUfQ", "https://www.youtube.com/embed/5349nreLhwg", "https://www.youtube.com/embed/jh9XLBunyXU", "https://www.youtube.com/embed/GBI-GCGNFRQ", "https://www.youtube.com/embed/c2LtuWqJnVM", "https://www.youtube.com/embed/Ms7FA7CuMzE", "https://www.youtube.com/embed/uO5uIkbey5g", "https://www.youtube.com/embed/4W0gGswEzYY", "https://www.youtube.com/embed/lPrkdmjDn2Q", "https://www.youtube.com/embed/YJoC0j6AXRc", "https://www.youtube.com/embed/h37Q96_ZFgE", "https://www.youtube.com/embed/47gnIFzAd6E", "https://www.youtube.com/embed/PSPDISNB7I8", "https://www.youtube.com/embed/0DTTku99YFs", "https://www.youtube.com/embed/ZtcZASY1eX0", "https://www.youtube.com/embed/_JctWCZhCaY", "https://www.youtube.com/embed/tZ-BgQU1o3Y", "https://www.youtube.com/embed/r-d-HHTDAOw", "https://www.youtube.com/embed/laFRYWKdw-4", "https://www.youtube.com/embed/DoyjHZjlkds", "https://www.youtube.com/embed/NErC3Omdv9M", "https://www.youtube.com/embed/65vsMn0uyxY", "https://www.youtube.com/embed/1wIwvRf3C9M", "https://www.youtube.com/embed/-kchmDAxfms", "https://www.youtube.com/embed/Zhqll8TOO5s", "https://www.youtube.com/embed/gn4RKbqTO4s", "https://www.youtube.com/embed/MUTbzVUr8Sw", "https://www.youtube.com/embed/k6VOszb7iPg", "https://www.youtube.com/embed/PZvVrzSdHWM", "https://www.youtube.com/embed/c5hPd2gM9oE", "https://www.youtube.com/embed/Iw3ZGQ1cx18", "https://www.youtube.com/embed/N_RCzugbPpc", "https://www.youtube.com/embed/bxkC6KMwIfo", "https://www.youtube.com/embed/GTpcfumRKlo", "https://www.youtube.com/embed/OquFv_jT-l8", "https://www.youtube.com/embed/k_bPFeL6_3s"];

var freestyle = new Freestyle(topics, beats);
