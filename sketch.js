const RESOLUTION = {
  length: 800,
  height: 800,
}

let player = new Player();

function setup() {
  rectMode(CENTER);
  frameRate(60);
  let canvas = createCanvas(RESOLUTION.length, RESOLUTION.height);
  canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());
  
}

function draw() {
  background(135, 206, 235);
  player.update();
  player.draw();
}
