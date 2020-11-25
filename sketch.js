var climber, climberImage;
var door, doorImage;
var tower, towerImage;
var ghost, ghostImage;
var gameGroup;

function preload() {
  climberImage = loadImage("climber.png");
  doorImage = loadImage("door.png");
  towerImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-jumping.png");

}

function setup() {
  createCanvas(600,600);

  tower = createSprite(300,300)
  tower.addImage(towerImage);
  tower.velocityY = 3;
  
  ghost = createSprite(250,250);
  ghost.addImage(ghostImage);
  ghost.scale = 0.5;
  
  gameGroup = new Group();
  gameGroup.add(tower);
  gameGroup.add(ghost);
}

function draw() {
if (tower.y>600){
  tower.y = 300;
}
if (keyDown("space")) {
  ghost.velocityY = -10;
}
 //add Gravity
  ghost.velocityY = ghost.velocityY + 0.8;

if (keyDown("right")) {
  ghost.x = ghost.x + 3;
}
  
if (keyDown("left")) {
  ghost.x = ghost.x - 3;
}

spawnDoors();
drawSprites();
if (ghost.y>600) {
  background(0);
  textSize(30);
  fill("yellow");
  textAlign(CENTER);
  text("Game Over",300,300);
  gameGroup.destroyEach();
}
}
function spawnDoors() {
  if (frameCount%240 ===0) {
    door = createSprite(random(120,400),-50);
    door.addImage(doorImage);
    door.velocityY = 3;
    climber = createSprite(door.x,10);
    climber.addImage(climberImage);
    climber.velocityY = 3;
    door.depth = ghost.depth -1;
    gameGroup.add(door);
    gameGroup.add(climber);
  }
  
}