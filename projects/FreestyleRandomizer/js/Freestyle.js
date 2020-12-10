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

var topics = ["Obraz", "Małpa", "Drzewo", "Życie", "Miłość"];
var beats = ["https://www.youtube.com/embed/YS90FjNQfBY", "https://www.youtube.com/embed/mqFymG42huo", "https://www.youtube.com/embed/0KS1xHIglx0"];

var freestyle = new Freestyle(topics, beats);
