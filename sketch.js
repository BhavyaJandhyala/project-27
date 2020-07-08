var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(300,400,50);
	bobObject2 = new bob(350,400,50);
	bobObject3 = new bob(400,400,50);
	bobObject4 = new bob(450,400,50);
	bobObject5 = new bob(500,400,50);

	roofObject1 = new roof(400,150,300,30);
/*
	rope1 = new rope(bobObject1.body, roofObject1.body, -bobDiameter*0, 0);
	rope2 = new rope(bobObject2.body, roofObject1.body, -bobDiameter*0, 0);
	rope3 = new rope(bobObject3.body, roofObject1.body, -bobDiameter*0, 0);
	rope4 = new rope(bobObject4.body, roofObject1.body, -bobDiameter*0, 0);
	rope5 = new rope(bobObject5.body, roofObject1.body, -bobDiameter*0, 0);
*/
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50); 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject1.display();
  /*rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites(); */
}



