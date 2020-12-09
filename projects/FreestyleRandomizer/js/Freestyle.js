function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class Freestyle {
  constructor(topicsTable) {
    this.topicsTable = topicsTable;
    // this.beatsTable = beatsTable;
  }

  randomTopic() {
    random = getRandomInt(0, this.topicsTable.size-1);
    return this.topicsTable[random];
  }

  randomBeat() {
    random = getRandomInt(0, this.beatsTable.size-1);
    return this.beatsTable[random];
  }

  showTopic() {
    first = this.randomTopic();
    second = this.randomTopic();
    third = this.randomTopic();
    loop = true;
    while (loop) {
      loop = false;
      if (first == second || first==third) {
        first = this.randomTopic();
        loop = true;
      }
      if (second == first || second==third) {
        second = this.randomTopic();
        loop = true;
      }
      if (third == first || third==second) {
        third = this.randomTopic();
        loop = true;
      }
    }
    topics = first + ", " + second + ", " + third;
    getElementById('topics').innerHTML = topics;
  }
}

var topics = ["abc", "bcd", "cde", "def", "efg"];

Freestyle freestyle = new Freestyle(topics);
