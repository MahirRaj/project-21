const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var leftWall , rightWall , ground;
var ball;


function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(600,690,1200,30);
  leftWall = new Ground(800,640,20,100);
  rightWall = new Ground(900,640,20,100);

  var ball_options = {
    
    restitution : 0.5,
    friction : 0.5,
  }
  ball = Matter.Bodies.circle(200,600,15,ball_options);
  World.add(world,ball);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();
  leftWall.display();
  rightWall.display();

 ellipse(ball.position.x,ball.position.y,15,15);
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x : 0.05 , y:-0.0205});
  }
}



