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
    random = getRandomInt(0, this.topicsTable.size-1);
    return this.topicsTable[random];
  }

  randomBeats() {
    random = getRandomInt(0, this.beatsTable.size-1);
    return this.beatsTable[random];
  }
}

Freestyle freestyle = new Freestyle();
