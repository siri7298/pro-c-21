
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(950, 930);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options={
  isstatic:false,
  restitution:0.3,
  density:1.2	 
 }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



