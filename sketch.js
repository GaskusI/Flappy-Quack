function preload() {
  gameLost = loadImage('assets/Dead.png')
}

const RESOLUTION = {
  length: 800,
  height: 800,
}

const SPEED = 3;

let gameLost;

let gameBegin = false;
let gameEnd = false;
let player = new Player();
let logic = new Logic();
let obstacles = [];

function setup() {
  
  rectMode(CORNER);
  frameRate(60);
  let canvas = createCanvas(RESOLUTION.length, RESOLUTION.height);
  canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());
}

function draw() {
  
  if(!gameEnd) {

    background(135, 206, 235);

    player.draw(); 

    logic.spawnObstacle();
    logic.despawnObstacle();
    logic.checkForSecondObstacle();

    if(gameBegin) {   

      logic.checkScreenCollision();
      logic.checkObstacleCollision();

      player.update();

      for(let i = 0; i < obstacles.length; i++) {
      obstacles[i].drawTop();
      obstacles[i].drawBot(); 
      obstacles[i].update();

      }
    }
  } else {
    background(0);
    imageMode(CENTER);
    image(gameLost ,RESOLUTION.length / 2, RESOLUTION.height / 2);
  }
}