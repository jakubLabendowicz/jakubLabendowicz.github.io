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
    var random = getRandomInt(0, this.topicsTable.length-1);
    return this.topicsTable[random];
  }

  randomBeat() {
    var random = getRandomInt(0, this.beatsTable.length-1);
    return this.beatsTable[random];
  }

  showTopic() {
    var first = this.randomTopic();
    var second = this.randomTopic();
    var third = this.randomTopic();
    // loop = true;
    // while (loop) {
    //   var loop = false;
      if (first == second || first==third) {
        first = this.randomTopic();
        // loop = true;
      }
      if (second == first || second==third) {
        second = this.randomTopic();
        // loop = true;
      }
      if (third == first || third==second) {
        third = this.randomTopic();
        // loop = true;
      }
    // }
    var topics = first + ", " + second + ", " + third;
    document.getElementById('topics').innerHTML = topics;
  }

  showBeat() {
    document.getElementById('beat').src = this.randomBeat();
  }
}

var topics = ["Obraz", "Małpa", "Drzewo", "Życie", "Miłość"];
var beats = ["https://www.youtube.com/embed/YS90FjNQfBY"];

var freestyle = new Freestyle(topics, beats);
