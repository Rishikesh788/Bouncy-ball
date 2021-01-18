const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine,myworld,ground,ball;






function setup() {
  createCanvas(800,400);
myengine = Engine.create();
myworld = myengine.world;
var ground_option = {isStatic : true}
ground = Bodies.rectangle(400,380,800,20,ground_option);
World.add(myworld,ground);
console.log(ground);
var ball_option = {restitution:1.3}
  ball = Bodies.circle(400,200,20,ball_option);
World.add(myworld,ball)
}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
 
}