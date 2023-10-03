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
  
  checkScreenCollision() {
    if(player.getPositionY() >= RESOLUTION.height - (player.getDiameter() / 2)) {
      gameEnd = true;
      console.log('ooga booga');
    }
  }
  
  
  checkObstacleCollision() {
    for(let i = 0; i < obstacles.length; i++) {
      
        // Top
      
      if(player.getPositionX() + player.getDiameter() / 2 > obstacles[i].getPositionX() &&
         player.getPositionX() - player.getDiameter() / 2 < obstacles[i].getPositionX() + (RESOLUTION.length / 8) &&
         player.getPositionY() - player.getDiameter() / 2 > 0 &&
         player.getPositionY() - player.getDiameter() / 2 < obstacles[i].getGapY()) {
            gameEnd = true;
            console.log('top');
         }
      
        // Bot
        
      if(player.getPositionX() + player.getDiameter() / 2 > obstacles[i].getPositionX() &&
         player.getPositionX() - player.getDiameter() / 2 < obstacles[i].getPositionX() + (RESOLUTION.length / 8) &&
         player.getPositionY() + player.getDiameter() / 2 > obstacles[i].getGapY() + 200 &&
         player.getPositionY() + player.getDiameter() / 2 < RESOLUTION.height) {
            gameEnd = true;
            console.log('bot');
         } 
    }
  }
  
  
}