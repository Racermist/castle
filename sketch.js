const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bgImage;
var tower, towerImage;

function preload() {
 bgImage=loadImage("assets/background.gif");
towerImage=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 tower=Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
angle=20;
cannon=new Cannon(180,110,130,100,angle);

 
}

function draw() {
  //background(189);
  image(bgImage,0,0,1200,600)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  push ()
   imageMode (CENTER);
   image(towerImage,tower.position.x,tower.position.y,160,310);
   pop ()
   cannon.display();
}
