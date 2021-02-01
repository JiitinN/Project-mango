
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var attach;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(995,125,30);
	mango3=new mango(990,200,30);
	mango4=new mango(1210,175,30);
	mango5=new mango(1100,170,30);

    stoneObj=new Stone(180,350, 30, 35, 20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	attach= new Launch(stoneObj.body,{x:240,y:400});

	
	Engine.run(engine);

}

function draw() {

  background(255);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stoneObj.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}