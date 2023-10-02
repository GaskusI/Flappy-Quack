class Player {
  constructor() {
    this.diameter = RESOLUTION.length / 16;
    this.position = new p5.Vector(RESOLUTION.length / 16, RESOLUTION.height / 2);
    
    this.flappingTime = 0;
  }
  
  getPositionX() {
    return this.position.x;
  }
  
  getPositionY() {
    return this.position.y;
  }
  
  getGravity() {
    return this.gravity;
  }
  
  getFlappingTime() {
    return this.flappingTime;
  }
  
  setPositionY(variable) {
    this.position.y = variable;
  }
  
  setFlappingTime(variable) {
    this.flappingTime = variable;
  }
  update() {
    if(this.getFlappingTime() != 0) {
      this.setPositionY(this.getPositionY() + (SPEED * -2));
      // this.setPositionY(this.getPositionY() + (this.getGravity() * -2));
      this.setFlappingTime(this.getFlappingTime() - 1);
    } else {
      this.setPositionY(this.getPositionY() + SPEED * 3);
      // this.setPositionY(this.getPositionY() + this.getGravity());
    }
  }
  
  draw() {
    fill(255,255,0);
    // rect(this.position.x, this.position.y, this.length, this.height);
    circle(this.position.x, this.position.y, this.diameter);
  }
}