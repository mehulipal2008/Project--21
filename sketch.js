var bullet,wall;
var thickness, speed, weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,100,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor =color(80,80,80);

  car.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var damage= 0.5 *weight * speed * speed/ thickness* thickness* thickness;
if  (damage > 10)
{
  bullet.shapecolor=color(225,0,0);
}

if (damage<10 && damage>10)
{
  bullet.shapecolor=color(230,230,0);
}

if (damage<10)
{
  bullet.shapecolor=color(0,225,0);
}
}

function draw() {
  background(255,255,255);  

    if(hasCollided(bullet,wall))
    {
      bullet,velocityX =0;
      var damage = 0.5* weight* speed* spped/(thickness* thickness* thickness);
      
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);

      }



      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
    }

  drawSprites();
}
}

function hasCollided(Lbullet, Lwall)
{
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true 
}
return false;

}
