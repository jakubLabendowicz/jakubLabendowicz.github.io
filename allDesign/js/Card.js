class Card {
  static previousCardId = '';

  constructor(cardId) {
    this.cardId = cardId;
  }

  open() {
    if (!Card.previousCardId='') document.getElementById(Card.previousCardId).style.visibility = 'hidden';
    document.getElementById(this.cardId).style.visibility = 'visible';
    Card.previousCardId = this.cardId;
  }

  static open(cardId) {
    if (!Card.previousCardId='') document.getElementById(Card.previousCardId).style.visibility = 'hidden';
    document.getElementById(cardId).style.visibility = 'visible';
    Card.previousCardId = cardId;
  }
}

Card mainCard = new Card('mainCard');
Card settingsCard = new Card('settingsCard');
Card appsCard = new Card('appsCard');

mainCard.open();
