// Function for running the memory game

function startGame(){ 

// Hiding the start button and displaying the restart button once the game starts

startButton.style.display="none"

// Displaying the tiles and creating pairs

var tileArray = [{'name': 'arryn', 'image': 'assets/images/house-arryn.png'},
                 {'name': 'baratheon', 'image': 'assets/images/house-baratheon.png'},
                 {'name': 'greyjoy', 'image': 'assets/images/house-greyjoy.png'},
                 {'name': 'lannister', 'image': 'assets/images/house-lannister.png'},
                 {'name': 'martell', 'image': 'assets/images/house-martell.png'},
                 {'name': 'stark', 'image': 'assets/images/house-stark.png'},
                 {'name': 'targaryen', 'image': 'assets/images/house-targaryen.png'},
                 {'name': 'tully', 'image': 'assets/images/house-tully.png'},
                 {'name': 'tyrell', 'image': 'assets/images/house-tyrell.png'}];

var gameBoard = tileArray.concat(tileArray);

// Randomising the tiles 

gameBoard.sort(() => 0.5 - Math.random());

// Setting the variables for when tiles are picked

let firstChoice = '';
let secondChoice = '';
let count = 0;
let previousChoice = null;
let delay = 1000;

// Setting images for the tiles and getting them to appear on-screen

var memoryGame = document.getElementById('memoryGame');
var board = document.createElement('section');
board.setAttribute('class', 'board');
memoryGame.appendChild(board);

gameBoard.forEach(item => {
  var {name, image} = item;

  var tile = document.createElement('div');
  tile.classList.add('tile');
  tile.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${image})`;

  board.appendChild(tile);
  tile.appendChild(front);
  tile.appendChild(back);
});

// Variable for adding the pair class to the tiles that have the picked class

var pair = () => {
  var picked = document.querySelectorAll('.picked');
  picked.forEach(tile => {
    tile.classList.add('pair');
  });
};

// Variable for resetting choice variables 

var resetChoices = () => {
  firstChoice = '';
  secondChoice = '';
  count = 0;
  previousChoice = null;

// Variable for removing the picked class from tiles

  var selected = document.querySelectorAll('.picked');
  selected.forEach(tile => {
    tile.classList.remove('picked');
  });
};

// Event listener that operates the function for pairing tiles and resetting the board

board.addEventListener('click', event => {

  var clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousChoice ||
    clicked.parentNode.classList.contains('picked') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstChoice = clicked.parentNode.dataset.name;
      console.log(firstChoice);
      clicked.parentNode.classList.add('picked');
    } else {
      secondChoice = clicked.parentNode.dataset.name;
      console.log(secondChoice);
      clicked.parentNode.classList.add('picked');
    }

    if (firstChoice && secondChoice) {
      if (firstChoice === secondChoice) {
        setTimeout(pair, delay);
      }
      setTimeout(resetChoices, delay);
    }
    previousChoice = clicked;
  }
  
});

}






