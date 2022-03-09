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

const gridDisplay = document.getElementById('#grid');

function createBoard () {
  for(let i = 0 ; i < 10; i++){
    const card = document.createElement('img');
    console.log(card, i);
  }
};

createBoard()