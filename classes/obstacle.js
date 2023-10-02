class Obstacle {
    
  constructor() {
    this.gapSize = new p5.Vector(100, 250);
    this.position = new p5.Vector(RESOLUTION.length - 200, 0);
    this.gapY = Math.floor(Math.random() * 500) + 100;
  }
  
  getGapSizeX() {
    return this.gapSize.x;
  }
  
  getGapSizeY() {
    return this.gapSize.y;
  }
  
  getPositionX() {
    return this.position.x;
  }
  
  getPositionY() {
    return this.position.y;
  }
  
  setPositionX(variable) {
    this.position.x = variable;
  }
  
  setGapY(variable) {
    this.gapY = variable;
  }
  
  update() {
    this.setPositionX(this.getPositionX() - SPEED);
  }
  
  drawTop() {
    fill(0,255,0);
    rect(this.position.x, 0, RESOLUTION.length / 8, this.gapY);  
  }
  drawBot() {
    fill(0,255,0);
    rect(this.position.x, this.gapY + 200, RESOLUTION.length / 8, RESOLUTION.height);
  }
}