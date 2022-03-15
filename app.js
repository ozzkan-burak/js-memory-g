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
const cardChosen = []

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
  console.log('matched');
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name)
  console.log(cardChosen)
  this.setAttribute('src', cardArray[cardId].img);
  if(cardChosen.length == 2){
    setTimeout(checkMatch, 500);
  };
}