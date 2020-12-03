class Card {
  static previousCardId = '';

  constructor(cardId) {
    this.cardId = cardId;
  }

  open() {
    if (!Card.previousCardId=='') document.getElementById(Card.previousCardId).style.visibility = 'hidden';
    document.getElementById(this.cardId).style.visibility = 'visible';
    Card.previousCardId = this.cardId;
  }

  static open(cardId) {
    if (!Card.previousCardId=='') document.getElementById(Card.previousCardId).style.visibility = 'hidden';
    document.getElementById(cardId).style.visibility = 'visible';
    Card.previousCardId = cardId;
  }
  static close() {
    document.getElementById(Card.previousCardId).style.visibility = 'hidden';
  }
}

mainCard = new Card('mainCard');
settingsCard = new Card('settingsCard');
appsCard = new Card('appsCard');
