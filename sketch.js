var thickness, wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "cyan";
  bullet.velocityX = speed;
  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = "white";
}


function draw() {
  background(0);  
  //console.log(wall.x-bullet.x)
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapecolor = "red";
    }
    if (damage<10){
      wall.shapeColor = "green";
    }
  }

  function hasCollided(bullet,wall){
    bulletRightEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
     return true;
    } 
      return false;
    }
  }

  drawSprites();
