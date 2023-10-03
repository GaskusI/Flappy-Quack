class Obstacle {
    
  constructor() {
    this.gapSize = 250;
    this.position = new p5.Vector(RESOLUTION.length, 0);
    this.gapY = Math.floor(Math.random() * 500) + 100;
    this.readyToDespawn = false;
  }
  
  getGapSize() {
    return this.gapSize;
  }
  
  getPositionX() {
    return this.position.x;
  }
  
  getPositionY() {
    return this.position.y;
  }
  
  getReadyToDespawn() {
    return this.readyToDespawn;
  }
  
  getGapY() {
    return this.gapY;
  }
  
  setPositionX(variable) {
    this.position.x = variable;
  }
   
  setReadyToDespawn(variable) {
    this.readyToDespawn = variable;
  }
  
  checkForDespawn() {
    if(this.getPositionX() < -100) {
      this.setReadyToDespawn(true);
    }
  }
  
  update() {
    this.setPositionX(this.getPositionX() - SPEED * 1.25);
    this.checkForDespawn();
  }
  
  drawTop() {
    fill(0,255,0);
    rect(this.position.x, 0, RESOLUTION.length / 8, this.gapY);  
  }
  drawBot() {
    fill(0,255,0);
    rect(this.position.x, this.gapY + 200, RESOLUTION.length / 8, RESOLUTION.height - this.gapY - 200);
  }
}