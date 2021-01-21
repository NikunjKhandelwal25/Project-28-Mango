
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boyImage,boy,ground;
function preload()
{
boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1300,600);

	engine = Engine.create();
	world = engine.world;


	boy=createSprite(200,520)
	boy.addImage(boyImage)
	boy.scale=0.1;

	stoneObj= new stone(150,450,20)
    ground=new Ground(width/2,600,width,20)
	Mangotree= new tree(1050,325)
	mango1=new mangos(1100,100,30);
    mango2=new mangos(1070,130,30);
	mango3=new mangos(1020,140,30);
	mango4=new mangos(1150,70,30);
	mango5=new mangos(1100,70,30);
	mango6=new mangos(950,230,30);
	mango7=new mangos(1000,230,40);
  launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImage,200,340,200,300);
  stoneObj.display();
  Mangotree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  
  launcherObject.display();
  ground.display();
   detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);

 
}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

 function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



