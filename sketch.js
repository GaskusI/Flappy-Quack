const RESOLUTION = {
  length: 800,
  height: 800,
}

const SPEED = 3;

let gameBegin = false;
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
  background(135, 206, 235);
  
  logic.spawnObstacle();
  logic.despawnObstacle();
  
  logic.checkForSecondObstacle();
  
  player.draw(); 
  
  if(gameBegin) {  
    player.update();
    for(let i = 0; i < obstacles.length; i++) {
    obstacles[i].drawTop();
    obstacles[i].drawBot(); 
    obstacles[i].update();
    }
  }
}