const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'blank',
    img: 'images/blank.png'
  },
  {
    name: 'white',
    img: 'images/white.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'blank',
    img: 'images/blank.png'
  },
  {
    name: 'white',
    img: 'images/white.png'
  }
]

cardArray.sort(() => 0.5 - Math.random());

const cardsChosen = [];
const cardsChoosenId = [];

const gridDisplay = document.getElementById('grid');

function createBoard () {
  for(let i = 0 ; i < cardArray.length; i++){
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
};

createBoard();

function checkMatch(){
  const cards = document.querySelectorAll('img');

  console.log(cards);

  if(cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match');

    cards[cardsChoosenId[0]].setAttribute('src', 'images/white.png');
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name)
  cardsChoosenId.push(cardId);
  console.log(cardsChoosenId);
  this.setAttribute('src', cardArray[cardId].img);
  if(cardsChosen.length == 2){
    console.log('TEST')
    setTimeout(checkMatch, 500);
  };
}