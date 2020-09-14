var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83);
    bullet = createSprite(50,200,50,50);
    wall = createSprite(1200,200,thickness,height/2);
    bullet.velocityX = speed ;
  }

function draw() {
  background(0,0,0); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2 ){
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  

    bullet.velocityX=0
    if(damage>180){
    wall.shapeColor = color(255,0,0);

  } 

  if(damage<180 && deformation>100){

  wall.shapeColor=color(230,230,0);    
  }
  if(damage   <100)
  {
    wall.shapeColor=color(0,255,0)
  }
  }
   drawSprites();
  }


