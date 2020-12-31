
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.MouseConstraint;


var roof;
var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;

function preload()
{
	
};

function setup() {
	createCanvas(1300,700 );
	engine = Engine.create();
	world = engine.world;

   let canvasmouse = Matter.Mouse.create(canvas.elt);
   canvasmouse.pixelRatio = pixelDensity();
   let is ={
      mouse:canvasmouse
   };
   mConstraint = MouseConstraint.create(engine,is);
   World.add(world,mConstraint);

	Engine.run(engine);
   roof=new Roof(450,50,600,50);
   bob=new Pendulum (300,500,40);
   bob2=new Pendulum (350,500,40);
   bob3=new Pendulum (400,500,40);
   bob4=new Pendulum (450,500,40);
   bob5=new Pendulum (500,500,40);
   rope  =  new Rope(bob .p,{ x: 340, y: 90 } ); 
   rope2 = new Rope (bob2.p,{ x: 390, y: 90 });
   rope3 = new Rope (bob3.p,{ x: 440, y: 90});
   rope4 = new Rope (bob4.p,{ x: 490, y: 90});
   rope5 = new Rope (bob5.p,{ x: 540, y: 90});
   
};



 function draw() {
    rectMode(CENTER);
    background(255);
      roof.display();
      rope.display();
      rope2.display();
      rope3.display();
      rope4.display();
      rope5.display();
      
         bob.display();
         bob2.display();
         bob3.display();
         bob4.display();
         bob5.display();
    
};
 function mouseDragged(){
      Matter.Body.setPosition(bob.p,{x:mouseX,y:mouseY});
  };