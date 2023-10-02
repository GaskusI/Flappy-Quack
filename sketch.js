const RESOLUTION = {
  length: 800,
  height: 800,
}

const SPEED = 2.5;

let gameBegin = false;
let player = new Player();
let obstacle = new Obstacle();

function setup() {
  rectMode(CORNER);
  frameRate(60);
  let canvas = createCanvas(RESOLUTION.length, RESOLUTION.height);
  canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());
  
}

function draw() {
  background(135, 206, 235);
  player.draw();  
  obstacle.drawTop();
  obstacle.drawBot();
  if(gameBegin) {
  player.update();
  obstacle.update();
  }
}
