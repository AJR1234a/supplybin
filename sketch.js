const me = Matter.Engine;
const mw = Matter.World;
const mb = Matter.Bodies;

var engine,world,ground,ball,heli;
function setup() {
 var canvas= createCanvas(400,400);
 engine=me.create();
 world=engine.world;
var op= {
  isStatic: true
}
 ground=mb.rectangle(200,390,200,50,op);

mw.add(world,ground);
var ba ={
  restitution:3.0
}
ball=mb.circle(200,100,5,ba);
mw.add(world,ball);
heli=createSprite(5,100,80,50);
}

function draw() {
  background(0,0,0); 
  me.update(engine);
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS) ;
 ellipse(ball.position.x,ball.position.y,20);
heli.velocityX=5;
if (heli.x>400){
  heli.x=1;
}
  drawSprites();
}