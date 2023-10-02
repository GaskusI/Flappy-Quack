class Logic {
  
  constructor() {
    this.secondObstacleReady = false;
  }
  
  getSecondObstacleReady() {
    return this.boolObstacle;
  }
  
  setSecondObstacleReady(variable) {
    this.boolObstacle = variable;
  }
  
  spawnObstacle() {
    if(obstacles[0] === undefined) {
       obstacles.push(new Obstacle());
    }
    if(obstacles[1] === undefined && this.getSecondObstacleReady()) {
      obstacles.push(new Obstacle());
      this.setSecondObstacleReady(false);
    }
  } 
  
  despawnObstacle() {
    for(let i = 0; i < obstacles.length; i++) {
      if(obstacles[i].getReadyToDespawn() === true) {
        obstacles.shift();
      }
    }
  }
    
  checkForSecondObstacle() {
    if(obstacles[0].getPositionX() < RESOLUTION.length / 2 ) {
      this.setSecondObstacleReady(true);
    }
  }
}